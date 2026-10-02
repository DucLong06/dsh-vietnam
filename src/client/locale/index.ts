/**
 * Vietnamese UI language: adds "Tiếng Việt" to the language picker and
 * registers a `vi` dictionary for every core namespace we translate. Keys we
 * have not translated resolve through the `en` fallback.
 */
import type { Context as ClientContext } from '@deepseek-ai/cordis'
import type {} from '@deepseek-ai/dsh-client-locale/client'
import { VI_DICTIONARIES } from '../locales/vi/index.ts'

export const VI_LANGUAGE = { id: 'vi', label: 'Tiếng Việt', fallback: 'en' } as const

export function applyVietnameseLocale(ctx: ClientContext): void {
  ctx.effect(() => {
    const disposers: (() => void)[] = []
    try {
      disposers.push(ctx.locale.addLanguage(VI_LANGUAGE))
    } catch (error) {
      // Another language pack already owns `vi`; our dictionaries still apply to it.
      console.warn('[dsh-vietnam] vi language not added:', error)
    }
    for (const [ns, dict] of Object.entries(VI_DICTIONARIES)) {
      if (Object.keys(dict).length === 0) continue
      try {
        disposers.push(ctx.locale.register(ns, VI_LANGUAGE.id, dict))
      } catch (error) {
        console.warn(`[dsh-vietnam] vi dictionary for "${ns}" not registered:`, error)
      }
    }
    return () => {
      for (const dispose of disposers.reverse()) dispose()
    }
  }, 'dsh-vietnam: vi language + dictionaries')
}
