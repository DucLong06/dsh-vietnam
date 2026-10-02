/**
 * Glass surfaces over the backdrop, done through DSH's token override layer
 * (no DOM selectors): the page background and the sidebar fill become
 * translucent versions of the active palette, so the photo shows through.
 * The `bg-layer-*` tokens stay solid — DSH paints modals, popovers, inputs
 * and cards with them, and those must not let content bleed through.
 *
 * Legibility: the photo is first dimmed by a scrim of the base colour, then a
 * surface sits on top. Combined coverage ranges from 0.92 (visibility 0) down
 * to a 0.65 floor (visibility 100). Over the worst possible photo pixel:
 * at visibility ≤ 40 (≈0.81) primary and secondary text keep WCAG AA; at the
 * floor (visibility 100, the default) only primary text is guaranteed AA. tests/palette-contrast.spec.ts
 * sweeps every grey to hold both claims.
 */
import type { PaletteSeed, Scheme } from '../theme/palettes.ts'

export const SCRIM_ALPHA = 0.35
export const MIN_COVERAGE = 0.65
const MAX_COVERAGE = 0.92

/** Combined photo coverage of the base surface for a visibility of 0–100. */
export function baseCoverage(visibility: number): number {
  const v = Math.min(100, Math.max(0, visibility)) / 100
  return MAX_COVERAGE - (MAX_COVERAGE - MIN_COVERAGE) * v
}

/** Surface alpha giving `coverage` once stacked on the scrim. */
export function surfaceAlpha(coverage: number): number {
  return 1 - (1 - coverage) / (1 - SCRIM_ALPHA)
}

/** Neutral seeds for DSH's own light/dark themes (approximate base colours). */
export const NEUTRAL_SEEDS: Record<Scheme, Pick<PaletteSeed, 'base' | 'layer1' | 'layer2' | 'layer3'>> = {
  light: { base: '#ffffff', layer1: '#ffffff', layer2: '#f6f7f9', layer3: '#eef0f3' },
  dark: { base: '#16181c', layer1: '#1c1f24', layer2: '#22252b', layer3: '#292d34' },
}

const alpha = (color: string, a: number) => `color-mix(in srgb, ${color} ${Math.round(a * 100)}%, transparent)`

/** Override values for one scheme: translucent page and sidebar. */
export function glassTokens(seed: Pick<PaletteSeed, 'base' | 'layer1' | 'layer2' | 'layer3'>, visibility: number): Record<string, string> {
  const base = surfaceAlpha(baseCoverage(visibility))
  // The sidebar stays more solid than the page so the hierarchy survives.
  const panel = Math.min(1, base + 0.15)
  return {
    '--dsw-alias-bg-base': alpha(seed.base, base),
    '--dsw-specific-sidebar-fill': alpha(seed.layer2, panel),
  }
}
