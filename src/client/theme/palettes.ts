/**
 * Semantic seeds for the three Viet palettes. Every colour the plugin paints
 * comes from here; tokens.ts maps these seeds onto DSH alias tokens.
 */

export type PaletteId = 'sonmai' | 'halong' | 'hoian'
export type Scheme = 'light' | 'dark'

export interface PaletteSeed {
  /** Page background. */
  base: string
  /** Raised surfaces: sidebar, cards, composer — increasing elevation. */
  layer1: string
  layer2: string
  layer3: string
  /** Menus, popovers, dialogs. */
  overlay: string
  /** Text: primary, secondary, tertiary, caption. */
  ink: string
  ink2: string
  ink3: string
  caption: string
  /** Accent (buttons, focus, brand) and the text drawn on it. */
  accent: string
  accentInk: string
  accentHover: string
  link: string
  /**
   * Fill of DSH's send button, which hard-codes white text — so it must be a
   * deep colour in both schemes — and its hover state.
   */
  action: string
  actionHover: string
  /** Code block background. */
  code: string
  /** `r, g, b` of the hover/active tint (used with alpha). */
  tint: string
  success: string
  warn: string
  error: string
}

export interface Palette {
  id: PaletteId
  light: PaletteSeed
  dark: PaletteSeed
}

export const PALETTES: readonly Palette[] = [
  {
    // Sơn mài: đen sơn, đỏ son, vàng dát, ngà.
    id: 'sonmai',
    light: {
      base: '#f7efe2', layer1: '#fbf5ea', layer2: '#f3e8d6', layer3: '#ecdfc8', overlay: '#fffaf1',
      ink: '#2a120c', ink2: '#5c3a2c', ink3: '#7a5644', caption: '#8c6c58',
      accent: '#9e1b1b', accentInk: '#fbf3e6', accentHover: '#b52a22', link: '#9e1b1b',
      action: '#9e1b1b', actionHover: '#b52a22',
      code: '#efe3cf', tint: '158, 27, 27', success: '#4a7330', warn: '#975a0a', error: '#b3261e',
    },
    dark: {
      base: '#120c0a', layer1: '#1a1210', layer2: '#221714', layer3: '#2b1d19', overlay: '#241815',
      ink: '#f3e6d0', ink2: '#d2bc9f', ink3: '#ac9478', caption: '#957e66',
      accent: '#c9a14a', accentInk: '#1a1210', accentHover: '#d9b35e', link: '#e2b75c',
      action: '#9e1b1b', actionHover: '#b52a22',
      code: '#1e1512', tint: '201, 161, 74', success: '#8fb573', warn: '#e0a43a', error: '#ec6a55',
    },
  },
  {
    // Hạ Long sương: xanh ngọc, xám đá vôi, trắng sương.
    id: 'halong',
    light: {
      base: '#eef3f2', layer1: '#f6f9f8', layer2: '#e6eeec', layer3: '#dce7e4', overlay: '#ffffff',
      ink: '#14282a', ink2: '#3c5457', ink3: '#55696c', caption: '#687b7e',
      accent: '#2a7370', accentInk: '#f4fbfa', accentHover: '#22625f', link: '#1f6b68',
      action: '#2a7370', actionHover: '#22625f',
      code: '#e3ecea', tint: '47, 125, 122', success: '#2a7348', warn: '#8a5f0e', error: '#ae3535',
    },
    dark: {
      base: '#0d1617', layer1: '#122022', layer2: '#172a2c', layer3: '#1d3336', overlay: '#162629',
      ink: '#e4efed', ink2: '#b2c6c3', ink3: '#8ea5a2', caption: '#7a928f',
      accent: '#5fb3ad', accentInk: '#0b1a1b', accentHover: '#74c4be', link: '#79c9c2',
      action: '#2a7370', actionHover: '#22625f',
      code: '#132326', tint: '95, 179, 173', success: '#6cc08f', warn: '#e0b45a', error: '#ec7a72',
    },
  },
  {
    // Lụa Hội An: lụa vàng nhạt, lục bảo, vàng nghệ, đỏ đèn lồng.
    id: 'hoian',
    light: {
      base: '#fbf4e2', layer1: '#fffaee', layer2: '#f6ebd0', layer3: '#efe0bd', overlay: '#fffcf3',
      ink: '#2b1f0e', ink2: '#5a4524', ink3: '#735c3a', caption: '#85704e',
      accent: '#1f6f5c', accentInk: '#fdf8ea', accentHover: '#185a4b', link: '#1b6b58',
      action: '#1f6f5c', actionHover: '#185a4b',
      code: '#f3e7c8', tint: '31, 111, 92', success: '#2c723b', warn: '#975b00', error: '#b8322a',
    },
    dark: {
      base: '#16120b', layer1: '#1e180e', layer2: '#262012', layer3: '#2f2716', overlay: '#272013',
      ink: '#f6ead0', ink2: '#d8c59c', ink3: '#b5a37c', caption: '#9a8a68',
      accent: '#e0a526', accentInk: '#1a1408', accentHover: '#ecb648', link: '#f0bc4a',
      action: '#1f6f5c', actionHover: '#185a4b',
      code: '#201a0f', tint: '224, 165, 38', success: '#7fc28a', warn: '#f0b53e', error: '#ec6a5c',
    },
  },
]

export const PALETTE_IDS: readonly PaletteId[] = PALETTES.map((p) => p.id)

/** DSH theme id for one palette + scheme, e.g. `viet-sonmai-dark`. */
export function themeId(palette: PaletteId, scheme: Scheme): string {
  return `viet-${palette}-${scheme}`
}

/** Inverse of themeId; undefined for themes this plugin does not own. */
export function parseThemeId(id: string): { palette: PaletteId; scheme: Scheme } | undefined {
  const match = /^viet-(sonmai|halong|hoian)-(light|dark)$/.exec(id)
  return match === null ? undefined : { palette: match[1] as PaletteId, scheme: match[2] as Scheme }
}
