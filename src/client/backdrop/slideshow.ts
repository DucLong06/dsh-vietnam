/**
 * The backdrop element: a fixed layer behind the DSH app holding two photo
 * layers that crossfade, a scrim, and a palette gradient underneath for when
 * no photo is available. Owns no policy — the controller tells it what to show.
 */
import { SCRIM_ALPHA } from './glass.ts'

const STYLE = `
#dsh-vietnam-backdrop{position:fixed;inset:0;z-index:-1;pointer-events:none;overflow:hidden;background:var(--dshvn-gradient)}
#dsh-vietnam-backdrop .dshvn-photo{position:absolute;inset:-24px;background-size:cover;background-position:center;opacity:0;transition:opacity 1.2s ease;filter:blur(var(--dshvn-blur,0px))}
#dsh-vietnam-backdrop .dshvn-photo.dshvn-on{opacity:1}
#dsh-vietnam-backdrop.dshvn-kb .dshvn-photo.dshvn-on{animation:dshvn-kenburns var(--dshvn-kb-duration,300s) ease-in-out forwards}
#dsh-vietnam-backdrop .dshvn-scrim{position:absolute;inset:0;background:var(--dshvn-scrim)}
@keyframes dshvn-kenburns{from{transform:scale(1) translate3d(0,0,0)}to{transform:scale(1.08) translate3d(-1.5%,-1%,0)}}
/* The glass layer makes --dsw-alias-bg-base translucent so the page shows the
   photo, but DSH also paints overlays, menus, sticky headers and docks with that
   token as a solid mask. Re-declare it solid inside them, via semantic hooks
   (ARIA roles, data attributes) rather than hashed class names. Re-declaring a
   variable only changes elements that actually paint with it. */
[role=dialog],[role=presentation],[role=menu],[role=listbox],[aria-expanded],[data-disclosure-row],[data-queue-dock]{--dsw-alias-bg-base:var(--dshvn-solid-base)}
@media (prefers-reduced-motion:reduce){#dsh-vietnam-backdrop .dshvn-photo{transition:none}#dsh-vietnam-backdrop.dshvn-kb .dshvn-photo.dshvn-on{animation:none}}
`

export interface Look {
  /** CSS gradient painted when no photo is shown. */
  gradient: string
  /** Base colour of the active palette (scrim tint). */
  base: string
  blur: number
  kenBurns: boolean
  /** Seconds per photo — paces the Ken Burns drift. */
  seconds: number
}

export class Slideshow {
  private readonly root: HTMLDivElement
  private readonly style: HTMLStyleElement
  private readonly layers: [HTMLDivElement, HTMLDivElement]
  private front = 0
  private objectUrl: string | undefined
  private disposed = false

  constructor() {
    this.style = document.createElement('style')
    this.style.dataset.plugin = 'dsh-vietnam'
    this.style.textContent = STYLE
    this.root = document.createElement('div')
    this.root.id = 'dsh-vietnam-backdrop'
    this.root.setAttribute('aria-hidden', 'true')
    const layer = () => Object.assign(document.createElement('div'), { className: 'dshvn-photo' })
    this.layers = [layer(), layer()]
    const scrim = Object.assign(document.createElement('div'), { className: 'dshvn-scrim' })
    this.root.append(...this.layers, scrim)
    document.head.append(this.style)
    document.body.prepend(this.root)
  }

  setLook(look: Look): void {
    const s = this.root.style
    s.setProperty('--dshvn-gradient', look.gradient)
    s.setProperty('--dshvn-scrim', `color-mix(in srgb, ${look.base} ${Math.round(SCRIM_ALPHA * 100)}%, transparent)`)
    s.setProperty('--dshvn-blur', `${look.blur}px`)
    s.setProperty('--dshvn-kb-duration', `${look.seconds}s`)
    this.root.classList.toggle('dshvn-kb', look.kenBurns)
  }

  /** Solid base colour of the active scheme, used to re-solidify masks (see STYLE). */
  setSolidBase(color: string): void {
    document.documentElement.style.setProperty('--dshvn-solid-base', color)
  }

  /**
   * Crossfade to an image: a blob (fetched, cacheable) or a URL loaded
   * directly. Resolves false when the slideshow was disposed meanwhile.
   */
  async show(source: Blob | string): Promise<boolean> {
    const owned = typeof source !== 'string'
    const url = owned ? URL.createObjectURL(source) : source
    const img = new Image()
    img.src = url
    try {
      await img.decode()
    } catch {
      if (owned) URL.revokeObjectURL(url)
      throw new Error('image decode failed')
    }
    if (this.disposed) {
      if (owned) URL.revokeObjectURL(url)
      return false
    }
    const next = this.layers[1 - this.front]
    const prev = this.layers[this.front]
    // User URLs may contain quotes/backslashes; keep them from breaking out of url("…").
    next.style.backgroundImage = `url("${url.replace(/["\\\n]/g, encodeURIComponent)}")`
    // Restart the Ken Burns animation on the incoming layer.
    next.classList.remove('dshvn-on')
    void next.offsetWidth
    next.classList.add('dshvn-on')
    prev.classList.remove('dshvn-on')
    const stale = this.objectUrl
    this.objectUrl = owned ? url : undefined
    this.front = 1 - this.front
    if (stale !== undefined) setTimeout(() => URL.revokeObjectURL(stale), 1500)
    return true
  }

  /** Drop the photo, leaving the gradient. */
  clear(): void {
    for (const layer of this.layers) layer.classList.remove('dshvn-on')
  }

  dispose(): void {
    this.disposed = true
    document.documentElement.style.removeProperty('--dshvn-solid-base')
    this.root.remove()
    this.style.remove()
    if (this.objectUrl !== undefined) URL.revokeObjectURL(this.objectUrl)
  }
}
