/**
 * Pure comparison between the upstream English snapshot and our Vietnamese
 * dictionaries. Kept free of I/O so the rules are unit-tested directly.
 */

const PLACEHOLDER = /\{(\w+)\}/g

/** Placeholder names a template interpolates, sorted (DSH uses plain `{name}`). */
export function placeholders(template) {
  return [...template.matchAll(PLACEHOLDER)].map((m) => m[1]).sort()
}

/**
 * @param {Record<string, Record<string, string>>} en - namespace → key → English text
 * @param {Record<string, Record<string, string>>} vi - namespace → key → Vietnamese text
 * @returns {{ missing: string[], extra: string[], placeholder: string[], empty: string[], total: number, translated: number }}
 *   each finding is `namespace:key`
 */
export function compareDicts(en, vi) {
  const report = { missing: [], extra: [], placeholder: [], empty: [], total: 0, translated: 0 }
  for (const [ns, enDict] of Object.entries(en)) {
    const viDict = vi[ns] ?? {}
    for (const [key, enText] of Object.entries(enDict)) {
      report.total++
      const id = `${ns}:${key}`
      if (!Object.hasOwn(viDict, key)) {
        report.missing.push(id)
        continue
      }
      const viText = viDict[key]
      // Whitespace-only is legitimate when the English is too (e.g. a sentence separator).
      if (typeof viText !== 'string' || (viText.trim() === '' && enText.trim() !== '')) {
        report.empty.push(id)
        continue
      }
      report.translated++
      if (placeholders(enText).join() !== placeholders(viText).join()) report.placeholder.push(id)
    }
  }
  for (const [ns, viDict] of Object.entries(vi)) {
    for (const key of Object.keys(viDict)) {
      if (!Object.hasOwn(en[ns] ?? {}, key)) report.extra.push(`${ns}:${key}`)
    }
  }
  return report
}
