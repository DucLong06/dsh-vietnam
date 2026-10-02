/**
 * Register the six Viet themes and keep the user's choice. DSH only persists
 * its built-in preferences (light/dark/system), so the Viet selection lives in
 * localStorage and is re-applied on boot; "system" follows prefers-color-scheme.
 */
import type { Context as ClientContext } from '@deepseek-ai/cordis'
import type { ThemeSnapshot } from '@deepseek-ai/dsh-client-ui-theme/client'
import { PALETTES, parseThemeId, themeId, type PaletteId, type Scheme } from './palettes.ts'
import { aliasTokens } from './tokens.ts'

export type VietScheme = Scheme | 'system'
export interface VietThemeChoice {
  palette: PaletteId
  scheme: VietScheme
}

const STORAGE_KEY = 'dsh-vietnam.theme'
/** The built-in preference (light/dark/system) the user had before picking a Viet palette. */
const RESTORE_KEY = 'dsh-vietnam.theme.restore'
const BUILTIN_PREFERENCES = ['light', 'dark', 'system']
const DARK_QUERY = '(prefers-color-scheme: dark)'

export function readChoice(): VietThemeChoice | undefined {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null')
    if (raw !== null && PALETTES.some((p) => p.id === raw.palette) && ['light', 'dark', 'system'].includes(raw.scheme)) return raw
  } catch {}
  return undefined
}

function writeChoice(choice: VietThemeChoice | undefined): void {
  try {
    if (choice === undefined) localStorage.removeItem(STORAGE_KEY)
    else localStorage.setItem(STORAGE_KEY, JSON.stringify(choice))
  } catch {}
}

function rememberBuiltin(preference: string): void {
  if (!BUILTIN_PREFERENCES.includes(preference)) return
  try {
    localStorage.setItem(RESTORE_KEY, preference)
  } catch {}
}

function restoredBuiltin(): string {
  try {
    const stored = localStorage.getItem(RESTORE_KEY)
    if (stored !== null && BUILTIN_PREFERENCES.includes(stored)) return stored
  } catch {}
  return 'system'
}

function resolveScheme(scheme: VietScheme): Scheme {
  if (scheme !== 'system') return scheme
  return typeof matchMedia === 'function' && matchMedia(DARK_QUERY).matches ? 'dark' : 'light'
}

export interface VietThemeController {
  /** Current Viet selection, or undefined when a non-Viet theme is active. */
  current(): VietThemeChoice | undefined
  /** Switch to a Viet palette; undefined restores the built-in theme the user had before. */
  select(choice: VietThemeChoice | undefined): void
  /** Notified whenever the Viet selection changes (including being dropped). */
  subscribe(listener: () => void): () => void
}

export function applyVietThemes(ctx: ClientContext): VietThemeController {
  let choice = readChoice()
  const listeners = new Set<() => void>()
  const setChoice = (next: VietThemeChoice | undefined) => {
    choice = next
    writeChoice(next)
    for (const listener of listeners) listener()
  }
  // Set while we drive setTheme ourselves, so the change listener can tell our
  // switches from the user picking a built-in theme in Appearance.
  let switching = false

  const activate = () => {
    if (choice === undefined) return
    switching = true
    try {
      ctx.theme.setTheme(themeId(choice.palette, resolveScheme(choice.scheme)))
    } finally {
      switching = false
    }
  }

  ctx.effect(() => {
    const disposers = PALETTES.flatMap((p) => (['light', 'dark'] as const).map((scheme) =>
      ctx.theme.register({ id: themeId(p.id, scheme), colorScheme: scheme, tokens: aliasTokens(p[scheme], scheme) })))
    activate()
    return () => {
      for (const dispose of disposers) dispose()
    }
  }, 'dsh-vietnam: viet themes')

  // Tell a user's explicit pick apart from DSH re-adopting its persisted
  // built-in preference (which happens after boot and would otherwise undo our
  // restore): only a setTheme call that we did not make is the user's choice.
  ctx.effect(() => {
    const runtime = ctx.theme
    const original = runtime.setTheme
    const wrapped: typeof original = function (this: typeof runtime, id) {
      // Call through first: if DSH rejects the id, our choice must survive.
      const result = original.call(this, id)
      if (!switching && choice !== undefined && parseThemeId(id) === undefined) setChoice(undefined)
      return result
    }
    runtime.setTheme = wrapped
    return () => {
      if (runtime.setTheme === wrapped) runtime.setTheme = original
    }
  }, 'dsh-vietnam: observe explicit theme picks')

  // Re-assert our theme when DSH adopts its stored preference. Deferred out of
  // the current dispatch: a synchronous setTheme inside theme/change would let
  // the presenter apply the outer (stale) snapshot last.
  let restorePending = false
  ctx.effect(() => ctx.on('theme/change', (snapshot: ThemeSnapshot) => {
    if (switching || choice === undefined || restorePending) return
    if (parseThemeId(snapshot.preference) !== undefined) return
    restorePending = true
    queueMicrotask(() => {
      restorePending = false
      if (choice !== undefined && parseThemeId(ctx.theme.getTheme().preference) === undefined) activate()
    })
  }), 'dsh-vietnam: keep viet theme')

  ctx.effect(() => {
    if (typeof matchMedia !== 'function') return () => {}
    const media = matchMedia(DARK_QUERY)
    const onChange = () => { if (choice?.scheme === 'system') activate() }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, 'dsh-vietnam: follow system scheme')

  return {
    current: () => choice,
    select(next) {
      if (next !== undefined && choice === undefined) rememberBuiltin(ctx.theme.getTheme().preference)
      setChoice(next)
      if (next === undefined) ctx.theme.setTheme(restoredBuiltin())
      else activate()
    },
    subscribe(listener) {
      listeners.add(listener)
      return () => { listeners.delete(listener) }
    },
  }
}
