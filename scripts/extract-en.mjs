#!/usr/bin/env node
/**
 * Snapshot every English dictionary a DSH checkout registers through
 * `ctx.locale.register(ns, { zh, en })`, so `check-keys` can diff our `vi`
 * dictionaries against exactly the keys that release ships.
 *
 * Namespaces are usually constants declared elsewhere and dictionaries are
 * imported from sibling files, so a regex cannot find them. The TypeScript
 * checker resolves each call's namespace (string literal type) and the module
 * that declares the `en` dictionary; Node then imports that module (native
 * type stripping) to read the real values.
 *
 * Usage: node scripts/extract-en.mjs <dsh-checkout> [out.json]
 */
import { writeFileSync } from 'node:fs'
import { join, relative, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import ts from 'typescript'

const checkout = resolve(process.argv[2] ?? '../deepseek-harness')
const pkg = JSON.parse(await import('node:fs').then((fs) => fs.readFileSync(join(checkout, 'package.json'), 'utf8')))
const out = process.argv[3] ?? `upstream/en-${pkg.version}.json`

const files = ts.sys
  .readDirectory(join(checkout, 'packages'), ['.ts', '.tsx'], ['**/node_modules/**', '**/lib/**', '**/tests/**', '**/*.spec.*', '**/*.test.*'])
  .filter((file) => file.includes('/src/'))
const program = ts.createProgram(files, {
  target: ts.ScriptTarget.ES2022,
  module: ts.ModuleKind.ESNext,
  moduleResolution: ts.ModuleResolutionKind.Bundler,
  allowImportingTsExtensions: true,
  jsx: ts.JsxEmit.ReactJSX,
  noEmit: true,
  skipLibCheck: true,
  allowJs: false,
})
const checker = program.getTypeChecker()

/** @type {{ ns: string, file: string, exportName: string, site: string }[]} */
const targets = []
/** @type {string[]} */
const unresolved = []

function site(node) {
  const sf = node.getSourceFile()
  const { line } = sf.getLineAndCharacterOfPosition(node.getStart())
  return `${relative(checkout, sf.fileName)}:${line + 1}`
}

function stringLiteralOf(expr) {
  if (ts.isStringLiteralLike(expr)) return expr.text
  const type = checker.getTypeAtLocation(expr)
  return type.isStringLiteral() ? type.value : undefined
}

/** Follow an identifier to the exported declaration that owns its value. */
function declarationOf(expr) {
  // `{ en }` shorthand: the name's own symbol is the property, not the variable.
  let symbol = ts.isShorthandPropertyAssignment(expr.parent) && expr.parent.name === expr
    ? checker.getShorthandAssignmentValueSymbol(expr.parent)
    : checker.getSymbolAtLocation(expr)
  if (symbol === undefined) return undefined
  if (symbol.flags & ts.SymbolFlags.Alias) symbol = checker.getAliasedSymbol(symbol)
  const decl = symbol.valueDeclaration ?? symbol.declarations?.[0]
  if (decl === undefined) return undefined
  return { file: decl.getSourceFile().fileName, exportName: symbol.name, decl }
}

/** Strip `as const`, `satisfies T`, parentheses and `Object.freeze(...)`-style wrappers. */
function unwrap(expr) {
  while (true) {
    if (ts.isAsExpression(expr) || ts.isSatisfiesExpression(expr) || ts.isParenthesizedExpression(expr) || ts.isTypeAssertionExpression(expr)) expr = expr.expression
    // Object.freeze({...}) / defineDict(dict): the single argument is the dictionary itself.
    else if (ts.isCallExpression(expr) && expr.arguments.length === 1 && !ts.isPropertyAccessExpression(expr.expression)) expr = expr.arguments[0]
    else if (ts.isCallExpression(expr) && ts.isPropertyAccessExpression(expr.expression) && expr.expression.name.text === 'freeze' && expr.arguments.length === 1) expr = expr.arguments[0]
    else return expr
  }
}

/** `['a', 'b'].join(sep)` with literal parts → the joined string. */
function joinedStrings(expr) {
  if (!ts.isCallExpression(expr) || !ts.isPropertyAccessExpression(expr.expression) || expr.expression.name.text !== 'join') return undefined
  const array = unwrap(expr.expression.expression)
  const sep = expr.arguments[0] === undefined ? ',' : unwrap(expr.arguments[0])
  if (!ts.isArrayLiteralExpression(array) || (typeof sep !== 'string' && !ts.isStringLiteralLike(sep))) return undefined
  const parts = array.elements.map((e) => unwrap(e))
  if (!parts.every((e) => ts.isStringLiteralLike(e))) return undefined
  return parts.map((e) => e.text).join(typeof sep === 'string' ? sep : sep.text)
}

/**
 * Read a dictionary's string entries straight from the AST, following spreads
 * and identifier references. Returns undefined when any entry is computed at
 * runtime, so the caller can fall back to importing the module.
 */
function staticDict(expr, seen = new Set()) {
  expr = unwrap(expr)
  if (ts.isIdentifier(expr)) {
    const ref = declarationOf(expr)
    if (ref === undefined || seen.has(ref.decl) || !ts.isVariableDeclaration(ref.decl) || ref.decl.initializer === undefined) return undefined
    seen.add(ref.decl)
    return staticDict(ref.decl.initializer, seen)
  }
  if (!ts.isObjectLiteralExpression(expr)) return undefined
  const dict = {}
  for (const prop of expr.properties) {
    if (ts.isSpreadAssignment(prop)) {
      const inner = staticDict(prop.expression, seen)
      if (inner === undefined) return undefined
      Object.assign(dict, inner)
      continue
    }
    if (!ts.isPropertyAssignment(prop)) return undefined
    const key = ts.isComputedPropertyName(prop.name) ? stringLiteralOf(prop.name.expression) : (ts.isIdentifier(prop.name) || ts.isStringLiteralLike(prop.name) ? prop.name.text : undefined)
    const value = unwrap(prop.initializer)
    if (key === undefined) return undefined
    if (ts.isStringLiteralLike(value)) dict[key] = value.text
    else if (joinedStrings(value) !== undefined) dict[key] = joinedStrings(value)
    else return undefined
  }
  return dict
}

/** Find the `['en', { ... }]` tuple of a per-language dictionary table. */
function enTupleIn(sourceFile) {
  let found
  const walk = (n) => {
    if (found !== undefined) return
    if (ts.isArrayLiteralExpression(n) && n.elements.length === 2 && ts.isStringLiteralLike(n.elements[0]) && n.elements[0].text === 'en' && ts.isObjectLiteralExpression(n.elements[1])) found = n.elements[1]
    else ts.forEachChild(n, walk)
  }
  walk(sourceFile)
  return found
}

function visit(node) {
  if (
    ts.isCallExpression(node)
    && ts.isPropertyAccessExpression(node.expression)
    && node.expression.name.text === 'register'
    && /locale$/i.test(node.expression.expression.getText())
    && node.arguments.length >= 2
  ) {
    const ns = stringLiteralOf(node.arguments[0])
    const dicts = node.arguments[1]
    if (ns !== undefined && ts.isObjectLiteralExpression(dicts)) {
      const enProp = dicts.properties.find((p) => p.name?.getText() === 'en')
      const enExpr = enProp && (ts.isShorthandPropertyAssignment(enProp) ? enProp.name : enProp.initializer)
      const decl = enExpr && declarationOf(enExpr)
      if (decl) targets.push({ ns, ...decl, site: site(node) })
      else unresolved.push(`${site(node)} (en dictionary not resolvable)`)
    } else if (ns !== undefined && node.arguments.length === 3 && enTupleIn(node.getSourceFile()) !== undefined) {
      // Language-pack form `register(ns, locale, dict)` fed from a
      // `[['zh', {...}], ['en', {...}]]` table in the same file.
      targets.push({ ns, file: node.getSourceFile().fileName, exportName: 'en', decl: enTupleIn(node.getSourceFile()), site: site(node) })
    } else {
      unresolved.push(`${site(node)} (${ns === undefined ? 'namespace' : 'dictionary shape'} not static)`)
    }
  }
  ts.forEachChild(node, visit)
}

for (const sf of program.getSourceFiles()) {
  if (!sf.fileName.startsWith(join(checkout, 'packages'))) continue
  visit(sf)
}

/** @type {Record<string, Record<string, string>>} */
const snapshot = {}
for (const t of targets) {
  let dict = ts.isObjectLiteralExpression(t.decl)
    ? staticDict(t.decl)
    : ts.isVariableDeclaration(t.decl) && t.decl.initializer !== undefined ? staticDict(t.decl.initializer) : undefined
  if (dict === undefined) {
    try {
      dict = (await import(pathToFileURL(t.file).href))[t.exportName]
    } catch (error) {
      unresolved.push(`${t.site} (${t.exportName} in ${relative(checkout, t.file)}: ${error.code ?? error.message})`)
      continue
    }
  }
  if (dict === null || typeof dict !== 'object') {
    unresolved.push(`${t.site} (export ${t.exportName} of ${relative(checkout, t.file)} is not an object)`)
    continue
  }
  const target = (snapshot[t.ns] ??= {})
  for (const [key, value] of Object.entries(dict)) {
    if (typeof value === 'string') target[key] = value
  }
}

const sorted = Object.fromEntries(Object.keys(snapshot).sort().map((ns) => [
  ns,
  Object.fromEntries(Object.keys(snapshot[ns]).sort().map((k) => [k, snapshot[ns][k]])),
]))
writeFileSync(out, `${JSON.stringify(sorted, null, 2)}\n`)

const keyCount = Object.values(sorted).reduce((n, d) => n + Object.keys(d).length, 0)
console.log(`dsh ${pkg.version}: ${Object.keys(sorted).length} namespaces, ${keyCount} keys → ${out}`)
if (unresolved.length > 0) {
  console.log(`unresolved call sites (${unresolved.length}) — translate these by hand:`)
  for (const u of unresolved) console.log(`  ${u}`)
}
