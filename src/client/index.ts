/**
 * Browser half of DSH Việt Nam. Wires the Vietnamese locale, the Viet palettes
 * and the Vietnam backdrop into the DSH web client.
 */
import type { Context as ClientContext } from '@deepseek-ai/cordis'
import type {} from '@deepseek-ai/dsh-client-ui-renderer/client'
import type {} from '@deepseek-ai/dsh-client-ui-settings/client'
import { BackdropController } from './backdrop/index.ts'
import { mountCredit } from './backdrop/credit.ts'
import { applyVietnameseLocale } from './locale/index.ts'
import { en, NS, vi, zh } from './locales/plugin.ts'
import { VietRow, type VietRowInjected } from './settings/VietRow.tsx'
import { SettingsStore } from './state.ts'
import { applyVietThemes } from './theme/index.ts'

export const name = 'dsh-vietnam'

/** Services resolved from the client root context: `ctx.locale`, `ctx.theme`, `ctx.slots`. */
export const inject = ['locale', 'theme', 'slots']

export function apply(ctx: ClientContext): void {
  applyVietnameseLocale(ctx)
  ctx.effect(() => {
    const disposers = [ctx.locale.register(NS, 'zh', zh), ctx.locale.register(NS, 'en', en), ctx.locale.register(NS, 'vi', vi)]
    return () => { for (const dispose of disposers) dispose() }
  }, 'dsh-vietnam: plugin dictionaries')

  const themes = applyVietThemes(ctx)
  const settings = new SettingsStore()
  const backdrop = new BackdropController(ctx, settings)
  ctx.effect(() => backdrop.start(), 'dsh-vietnam: backdrop')
  ctx.effect(() => mountCredit(backdrop, ctx.locale.bind(NS), (cb) => ctx.on('locale/change', cb)), 'dsh-vietnam: photo credit')

  // Our namespace is not part of DSH's typed LocaleNamespaceMap, so the slot
  // registration is untyped; VietRow declares the props it actually reads.
  ctx.slots.inject('settings.general.item', () => ctx.slots.register({
    name: 'settings.general.item',
    id: 'dsh-vietnam',
    order: 25,
    locale: NS,
    inject: (): VietRowInjected => ({ themes, settings, backdrop }),
  } as never, VietRow as never))
}
