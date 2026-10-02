/**
 * Map one palette seed onto DSH alias tokens (`--dsw-alias-*`). Only the
 * tokens that carry colour identity are set; masks, borders and diff colours
 * fall through to the built-in base palette of the same scheme.
 */
import type { PaletteSeed, Scheme } from './palettes.ts'

export function aliasTokens(seed: PaletteSeed, scheme: Scheme): Record<string, string> {
  const tint = (alpha: number) => `rgba(${seed.tint}, ${alpha})`
  const mix = (color: string, pct: number) => `color-mix(in srgb, ${color} ${pct}%, transparent)`
  return {
    '--dsw-alias-bg-base': seed.base,
    '--dsw-alias-bg-layer-1': seed.layer1,
    '--dsw-alias-bg-layer-2': seed.layer2,
    '--dsw-alias-bg-layer-3': seed.layer3,
    '--dsw-alias-bg-overlay': seed.overlay,
    '--dsw-alias-bg-module-platform': seed.layer2,
    '--dsw-alias-bg-multi-select': seed.layer2,
    '--dsw-alias-bg-document-preview': seed.layer2,
    '--dsw-alias-bg-document-selection': mix(seed.accent, 35),
    '--dsw-specific-sidebar-fill': seed.layer2,

    '--dsw-alias-label-primary': seed.ink,
    '--dsw-alias-label-primary-dimmed': seed.ink2,
    '--dsw-alias-label-primary-bluish': seed.ink,
    '--dsw-alias-label-secondary': seed.ink2,
    '--dsw-alias-label-tertiary': seed.ink3,
    '--dsw-alias-label-caption': seed.caption,
    '--dsw-alias-label-dimmed': mix(seed.ink3, 60),
    '--dsw-alias-label-document-preview': seed.ink2,
    '--dsw-alias-label-primary-foreground': seed.accentInk,
    '--dsw-alias-label-primary-inverted': seed.accentInk,

    '--dsw-alias-brand-primary': seed.accent,
    '--dsw-alias-brand-primary-invert': seed.accentInk,
    '--dsw-alias-brand-primary-new-colorprimary-new-color': seed.accent,
    '--dsw-alias-brand-text': seed.accent,
    '--dsw-alias-button-primary-fill': seed.accent,
    '--dsw-alias-button-primary-hover': seed.accentHover,
    '--dsw-alias-button-primary-dimmed': mix(seed.accent, 45),
    '--dsw-alias-link': seed.link,
    '--dsw-alias-button-info-fill': seed.action,
    '--dsw-alias-button-info-hover': seed.actionHover,

    '--dsw-alias-interactive-bg-hover': tint(scheme === 'dark' ? 0.1 : 0.07),
    '--dsw-alias-interactive-bg-active': tint(scheme === 'dark' ? 0.16 : 0.12),
    '--dsw-alias-interactive-bg-hover-accent': tint(scheme === 'dark' ? 0.2 : 0.16),
    '--dsw-alias-interactive-bg-hover-solid': seed.layer3,

    '--dsw-alias-markdown-code-block': seed.code,
    '--dsw-alias-markdown-code-block-banner': seed.code,
    '--dsw-alias-markdown-inline-code': tint(scheme === 'dark' ? 0.16 : 0.1),
    '--dsw-alias-scrollbar-bg-l1': tint(0.18),
    '--dsw-alias-scrollbar-hover-l1': tint(0.32),

    '--dsw-alias-tooltip-bg': seed.ink,
    '--dsw-alias-toast-bg': seed.ink,
    '--dsw-alias-toast-label': seed.base,

    '--dsw-alias-state-success-primary': seed.success,
    '--dsw-alias-state-warn-primary': seed.warn,
    '--dsw-alias-state-warn-label': seed.warn,
    '--dsw-alias-state-error-primary': seed.error,
  }
}
