/**
 * Backdrop preferences, persisted per browser in localStorage and observable
 * by the settings row and the slideshow. Unknown or corrupt stored values fall
 * back to defaults field by field.
 */
import { COLLECTIONS, DEFAULT_COLLECTIONS } from './backdrop/collections.ts'

export const INTERVAL_CHOICES = [1, 5, 15, 30, 60] as const
export type IntervalMinutes = (typeof INTERVAL_CHOICES)[number]

export interface BackdropSettings {
  enabled: boolean
  /** Collection ids (see backdrop/collections.ts). */
  collections: string[]
  intervalMinutes: IntervalMinutes
  /** Slow zoom/pan on each photo (off under prefers-reduced-motion regardless). */
  kenBurns: boolean
  /** 0 = mostly surface, 100 = photo as visible as legibility allows. */
  visibility: number
  /** Blur applied to the photo, px. */
  blur: number
  /** Extra http(s) image URLs mixed into the rotation. */
  customUrls: string[]
}

export const DEFAULT_SETTINGS: BackdropSettings = {
  enabled: true,
  collections: [...DEFAULT_COLLECTIONS],
  intervalMinutes: 5,
  kenBurns: true,
  visibility: 100,
  blur: 0,
  customUrls: [],
}

const STORAGE_KEY = 'dsh-vietnam.backdrop'

export function sanitize(raw: unknown): BackdropSettings {
  const r = (raw !== null && typeof raw === 'object' ? raw : {}) as Partial<Record<keyof BackdropSettings, unknown>>
  const known = new Set(COLLECTIONS.map((c) => c.id))
  const num = (v: unknown, lo: number, hi: number, fallback: number) =>
    typeof v === 'number' && Number.isFinite(v) ? Math.min(hi, Math.max(lo, Math.round(v))) : fallback
  const collections = Array.isArray(r.collections) ? r.collections.filter((c): c is string => typeof c === 'string' && known.has(c)) : undefined
  return {
    enabled: typeof r.enabled === 'boolean' ? r.enabled : DEFAULT_SETTINGS.enabled,
    // Ids that no longer exist (renamed collections) must not leave the rotation empty.
    collections: collections !== undefined && (collections.length > 0 || (r.collections as unknown[]).length === 0) ? collections : [...DEFAULT_SETTINGS.collections],
    intervalMinutes: (INTERVAL_CHOICES as readonly number[]).includes(r.intervalMinutes as number) ? r.intervalMinutes as IntervalMinutes : DEFAULT_SETTINGS.intervalMinutes,
    kenBurns: typeof r.kenBurns === 'boolean' ? r.kenBurns : DEFAULT_SETTINGS.kenBurns,
    visibility: num(r.visibility, 0, 100, DEFAULT_SETTINGS.visibility),
    blur: num(r.blur, 0, 24, DEFAULT_SETTINGS.blur),
    customUrls: Array.isArray(r.customUrls) ? r.customUrls.filter((u): u is string => typeof u === 'string' && /^https?:\/\//i.test(u)) : [],
  }
}

export class SettingsStore {
  private value: BackdropSettings
  private readonly listeners = new Set<() => void>()

  constructor() {
    let raw: unknown
    try {
      raw = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null')
    } catch {}
    this.value = sanitize(raw)
  }

  get = (): BackdropSettings => this.value

  subscribe = (listener: () => void): (() => void) => {
    this.listeners.add(listener)
    return () => { this.listeners.delete(listener) }
  }

  update(patch: Partial<BackdropSettings>): void {
    this.value = sanitize({ ...this.value, ...patch })
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.value))
    } catch {}
    for (const listener of this.listeners) listener()
  }
}
