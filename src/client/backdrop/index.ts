/**
 * Backdrop controller: turns settings + the active theme into a running
 * slideshow, a glass override layer, and a photo credit chip.
 */
import type { Context as ClientContext } from '@deepseek-ai/cordis'
import type { ThemeSnapshot, ThemeTokenOverrides } from '@deepseek-ai/dsh-client-ui-theme/client'
import { PALETTES, parseThemeId, type PaletteSeed, type Scheme } from '../theme/palettes.ts'
import type { SettingsStore } from '../state.ts'
import { COLLECTIONS } from './collections.ts'
import { glassTokens, NEUTRAL_SEEDS } from './glass.ts'
import { Pool } from './pool.ts'
import { Slideshow } from './slideshow.ts'
import { cachedCandidates, candidatesFor, loadImage } from './store.ts'
import type { Candidate } from './wikimedia.ts'

export type BackdropStatus =
  | { kind: 'off' }
  | { kind: 'loading' }
  | { kind: 'ready'; count: number }
  | { kind: 'offline'; count: number }
  | { kind: 'empty' }

export interface BackdropView {
  status: BackdropStatus
  current: Candidate | undefined
}

type SurfaceSeed = Pick<PaletteSeed, 'base' | 'layer1' | 'layer2' | 'layer3'> & Partial<Pick<PaletteSeed, 'accent'>>

/** Seeds of the active theme in both schemes: a Viet palette or DSH's neutrals. */
function activeSeeds(snapshot: ThemeSnapshot): { key: string; light: SurfaceSeed; dark: SurfaceSeed; scheme: Scheme } {
  const parsed = parseThemeId(snapshot.active.id)
  const palette = parsed === undefined ? undefined : PALETTES.find((p) => p.id === parsed.palette)
  return palette === undefined
    ? { key: 'neutral', light: NEUTRAL_SEEDS.light, dark: NEUTRAL_SEEDS.dark, scheme: snapshot.active.colorScheme }
    : { key: palette.id, light: palette.light, dark: palette.dark, scheme: snapshot.active.colorScheme }
}

function gradientOf(seed: SurfaceSeed): string {
  const glow = seed.accent ?? seed.layer3
  return `radial-gradient(120% 90% at 85% 10%, color-mix(in srgb, ${glow} 28%, transparent), transparent 60%), linear-gradient(160deg, ${seed.layer3}, ${seed.base})`
}

/**
 * Custom URLs as candidates credited to their host. They load directly as
 * images (no fetch), so hosts without CORS headers work; they are therefore
 * not cached for offline use.
 */
function customCandidates(urls: readonly string[]): Candidate[] {
  return urls.flatMap((url) => {
    try {
      const host = new URL(url).hostname
      return [{ url, title: decodeURIComponent(url.split('/').pop() ?? '') || host, author: host, license: '—', pageUrl: url, direct: true }]
    } catch {
      return []
    }
  })
}

export class BackdropController {
  private slideshow: Slideshow | undefined
  private readonly pool = new Pool()
  private timer: ReturnType<typeof setTimeout> | undefined
  private abort: AbortController | undefined
  private disposeGlass: (() => void) | undefined
  private glassKey = ''
  private sourcesKey = ''
  private view: BackdropView = { status: { kind: 'off' }, current: undefined }
  private readonly listeners = new Set<() => void>()
  /** Bumped by every reload/teardown; in-flight work from older generations is dropped. */
  private generation = 0
  private advancingGeneration: number | undefined
  private offline = false
  private intervalMinutes = 0

  constructor(private readonly ctx: ClientContext, private readonly settings: SettingsStore) {}

  getView = (): BackdropView => this.view

  subscribe = (listener: () => void): (() => void) => {
    this.listeners.add(listener)
    return () => { this.listeners.delete(listener) }
  }

  /** Start reacting to settings, theme and tab visibility; returns the disposer. */
  start(): () => void {
    const offSettings = this.settings.subscribe(() => this.sync())
    // Never re-layer tokens inside a theme/change dispatch: overrideTokens
    // publishes synchronously, and the presenter would then apply the outer,
    // stale snapshot last. Defer (coalesced) to a microtask instead.
    let lookPending = false
    const offTheme = this.ctx.on('theme/change', () => {
      if (lookPending) return
      lookPending = true
      queueMicrotask(() => {
        lookPending = false
        this.syncLook()
      })
    })
    const onVisibility = () => {
      if (document.hidden) this.stopTimer()
      else if (this.slideshow !== undefined) this.schedule()
    }
    document.addEventListener('visibilitychange', onVisibility)
    // Back online after a fallback to cached photos: rebuild the live rotation.
    const onOnline = () => {
      if (this.offline && this.slideshow !== undefined) void this.reload()
    }
    window.addEventListener('online', onOnline)
    this.sync()
    return () => {
      offSettings()
      offTheme()
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('online', onOnline)
      this.teardown()
    }
  }

  /** Skip to the next photo now. */
  next(): void {
    void this.advance()
  }

  private sync(): void {
    const s = this.settings.get()
    if (!s.enabled) {
      this.teardown()
      return
    }
    this.slideshow ??= new Slideshow()
    this.syncLook()
    const sourcesKey = JSON.stringify([s.collections, s.customUrls])
    if (sourcesKey !== this.sourcesKey) {
      this.sourcesKey = sourcesKey
      this.intervalMinutes = s.intervalMinutes
      void this.reload()
    } else if (s.intervalMinutes !== this.intervalMinutes) {
      // Only an interval change restarts the countdown; sliders must not.
      this.intervalMinutes = s.intervalMinutes
      this.schedule()
    }
  }

  /** Re-derive gradient, scrim and glass from the active theme + settings. */
  private syncLook(): void {
    if (this.slideshow === undefined) return
    const s = this.settings.get()
    const seeds = activeSeeds(this.ctx.theme.getTheme())
    const seed = seeds[seeds.scheme]
    this.slideshow.setLook({
      gradient: gradientOf(seed),
      base: seed.base,
      blur: s.blur,
      kenBurns: s.kenBurns,
      seconds: s.intervalMinutes * 60,
    })
    this.slideshow.setSolidBase(seed.base)
    // overrideTokens emits theme/change; only re-layer when the inputs differ.
    const glassKey = `${seeds.key}:${s.visibility}`
    if (glassKey === this.glassKey) return
    this.glassKey = glassKey
    const light = glassTokens(seeds.light, s.visibility)
    const dark = glassTokens(seeds.dark, s.visibility)
    const tokens: ThemeTokenOverrides = Object.fromEntries(Object.keys(light).map((name) => [name, { light: light[name], dark: dark[name] }]))
    this.disposeGlass?.()
    this.disposeGlass = this.ctx.theme.overrideTokens('dsh-vietnam:glass', tokens)
  }

  /** Rebuild the rotation from the selected sources, then show the first photo. */
  private async reload(): Promise<void> {
    const generation = ++this.generation
    this.abort?.abort()
    const abort = (this.abort = new AbortController())
    const s = this.settings.get()
    this.offline = false
    this.setView({ status: { kind: 'loading' } })
    const categories = COLLECTIONS.filter((c) => s.collections.includes(c.id)).flatMap((c) => c.categories)
    const results = await Promise.allSettled(categories.map((c) => candidatesFor(c, abort.signal)))
    if (generation !== this.generation) return
    const fetched = results.flatMap((r) => (r.status === 'fulfilled' ? r.value : []))
    const online = [...fetched, ...customCandidates(s.customUrls)]
    // Lists come from a 24h cache, so a list can exist while the network is
    // down; offline is decided per photo in advance(). Here only "every list
    // request failed and nothing is cached" counts.
    const unreachable = online.length === 0 && results.length > 0 && results.every((r) => r.status === 'rejected')
    if (unreachable) this.goOffline()
    else this.pool.reset(online)
    if (this.pool.size === 0) {
      this.slideshow?.clear()
      this.setView({ status: { kind: 'empty' }, current: undefined })
      return
    }
    if (!this.offline) this.setView({ status: { kind: 'ready', count: this.pool.size } })
    await this.advance(generation)
  }

  /** Rotate through the images cached for offline use instead. */
  private goOffline(): void {
    this.offline = true
    this.pool.reset(cachedCandidates())
    this.setView({ status: this.pool.size === 0 ? { kind: 'empty' } : { kind: 'offline', count: this.pool.size } })
  }

  /**
   * Show the next loadable photo (tries a few), then schedule the following
   * one. A reload or teardown bumps the generation: an advance from an older
   * generation stops at its next await and touches nothing.
   */
  private async advance(generation = this.generation): Promise<void> {
    if (this.advancingGeneration === generation || this.slideshow === undefined) return
    this.advancingGeneration = generation
    this.stopTimer()
    const signal = this.abort?.signal
    let shown = false
    try {
      for (let attempt = 0; attempt < 4 && !shown; attempt++) {
        const candidate = this.pool.next()
        if (candidate === undefined) break
        const source = candidate.direct === true ? candidate.url : await loadImage(candidate, signal)
        if (generation !== this.generation) return
        if (source === undefined || this.slideshow === undefined) continue
        try {
          shown = await this.slideshow.show(source)
        } catch {
          continue
        }
        if (generation !== this.generation) return
        if (shown) this.setView({ current: candidate })
      }
      // Nothing loadable from the live rotation: the network is likely down.
      if (!shown && !this.offline && cachedCandidates().length > 0) {
        this.goOffline()
        this.advancingGeneration = undefined
        await this.advance(generation)
        return
      }
    } finally {
      if (this.advancingGeneration === generation) this.advancingGeneration = undefined
      if (generation === this.generation) this.schedule()
    }
  }

  private schedule(): void {
    this.stopTimer()
    if (this.slideshow === undefined || this.pool.size === 0 || document.hidden) return
    this.timer = setTimeout(() => void this.advance(), this.settings.get().intervalMinutes * 60_000)
  }

  private stopTimer(): void {
    if (this.timer !== undefined) clearTimeout(this.timer)
    this.timer = undefined
  }

  private teardown(): void {
    this.generation++
    this.stopTimer()
    this.abort?.abort()
    this.abort = undefined
    this.disposeGlass?.()
    this.disposeGlass = undefined
    this.glassKey = ''
    this.sourcesKey = ''
    this.offline = false
    this.slideshow?.dispose()
    this.slideshow = undefined
    this.setView({ status: { kind: 'off' }, current: undefined })
  }

  private setView(patch: Partial<BackdropView>): void {
    this.view = { ...this.view, ...patch }
    for (const listener of this.listeners) listener()
  }
}
