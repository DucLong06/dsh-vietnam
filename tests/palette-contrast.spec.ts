import { describe, expect, it } from 'vitest'
import { baseCoverage, SCRIM_ALPHA, surfaceAlpha } from '../src/client/backdrop/glass.ts'
import { DEFAULT_SETTINGS } from '../src/client/state.ts'
import { PALETTES, parseThemeId, themeId, type PaletteSeed } from '../src/client/theme/palettes.ts'

function luminance(hex: string): number {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4))
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

function contrast(a: string, b: string): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x)
  return (hi + 0.05) / (lo + 0.05)
}

const SURFACES: (keyof PaletteSeed)[] = ['base', 'layer1', 'layer2', 'layer3', 'overlay']

// WCAG 2.1 AA: body text 4.5:1; captions and state indicators (icons, dots,
// badges paired with text) 3:1.
const TEXT: [keyof PaletteSeed, number][] = [['ink', 4.5], ['ink2', 4.5], ['ink3', 4.5], ['link', 4.5], ['caption', 3], ['success', 3], ['warn', 3], ['error', 3]]

describe.each(PALETTES.flatMap((p) => (['light', 'dark'] as const).map((s) => [themeId(p.id, s), p[s]] as const)))('%s contrast', (_id, seed) => {
  it.each(TEXT)('%s on every surface ≥ %d:1', (fg, min) => {
    for (const surface of SURFACES) {
      expect(contrast(seed[fg], seed[surface]), `${fg} on ${surface}`).toBeGreaterThanOrEqual(min)
    }
  })

  it('white send-button text on action ≥ 4.5:1', () => {
    expect(contrast('#ffffff', seed.action)).toBeGreaterThanOrEqual(4.5)
    expect(contrast('#ffffff', seed.actionHover)).toBeGreaterThanOrEqual(4.5)
  })

  it('accentInk on accent ≥ 4.5:1', () => {
    expect(contrast(seed.accentInk, seed.accent)).toBeGreaterThanOrEqual(4.5)
    expect(contrast(seed.accentInk, seed.accentHover)).toBeGreaterThanOrEqual(4.5)
  })
})

describe('theme ids', () => {
  it('round-trip', () => {
    expect(parseThemeId(themeId('hoian', 'dark'))).toEqual({ palette: 'hoian', scheme: 'dark' })
    expect(parseThemeId('dark')).toBeUndefined()
  })
})

// Text over the backdrop: the photo is covered by the palette base at the
// combined coverage of scrim + page surface (both base-coloured, mixed in
// sRGB like color-mix). Sweep every grey a photo pixel could be.
describe('text over the photo', () => {
  const rgb = (hex: string) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16))
  const hex = (c: number[]) => `#${c.map((v) => Math.round(v).toString(16).padStart(2, '0')).join('')}`
  const coverageAt = (visibility: number) => 1 - (1 - SCRIM_ALPHA) * (1 - surfaceAlpha(baseCoverage(visibility)))
  const worstOverPhoto = (fg: string, base: string, coverage: number) => {
    let worst = Infinity
    for (let grey = 0; grey <= 255; grey++) {
      const bg = rgb(base).map((b) => coverage * b + (1 - coverage) * grey)
      worst = Math.min(worst, contrast(fg, hex(bg)))
    }
    return worst
  }
  const seeds = PALETTES.flatMap((p) => (['light', 'dark'] as const).map((s) => [themeId(p.id, s), p[s]] as const))

  it.each(seeds)('%s: primary and secondary text stay AA at visibility 40', (_id, seed) => {
    const coverage = coverageAt(40)
    expect(worstOverPhoto(seed.ink, seed.base, coverage)).toBeGreaterThanOrEqual(4.5)
    expect(worstOverPhoto(seed.ink2, seed.base, coverage)).toBeGreaterThanOrEqual(4.5)
  })

  it.each(seeds)('%s: primary text stays AA at the default visibility', (_id, seed) => {
    expect(worstOverPhoto(seed.ink, seed.base, coverageAt(DEFAULT_SETTINGS.visibility))).toBeGreaterThanOrEqual(4.5)
  })

  it.each(seeds)('%s: primary text stays AA at maximum visibility', (_id, seed) => {
    expect(worstOverPhoto(seed.ink, seed.base, coverageAt(100))).toBeGreaterThanOrEqual(4.5)
  })
})
