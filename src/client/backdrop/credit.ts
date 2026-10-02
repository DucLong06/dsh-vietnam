/**
 * Photo credit chip (bottom-right): title, author and licence of the photo on
 * screen, linking to its Commons page. CC BY / BY-SA require this attribution
 * whenever the photo is visible, so the chip only hides with the photo.
 */
import type { BackdropController } from './index.ts'

const STYLE = `
.dshvn-credit{position:fixed;right:10px;bottom:6px;z-index:40;max-width:min(46vw,520px);padding:2px 10px;border-radius:999px;
  font:11px/18px system-ui,sans-serif;color:var(--dsw-alias-label-secondary);text-decoration:none;
  background:color-mix(in srgb,var(--dsw-alias-bg-layer-1) 82%,transparent);backdrop-filter:blur(6px);
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;opacity:.6;transition:opacity .2s}
.dshvn-credit:hover,.dshvn-credit:focus-visible{opacity:1;color:var(--dsw-alias-label-primary)}
`

export function mountCredit(controller: BackdropController, t: (key: string, params?: Record<string, unknown>) => string, onLocale: (cb: () => void) => () => void): () => void {
  const style = Object.assign(document.createElement('style'), { textContent: STYLE })
  style.dataset.plugin = 'dsh-vietnam'
  const link = document.createElement('a')
  link.className = 'dshvn-credit'
  link.target = '_blank'
  link.rel = 'noopener noreferrer'
  document.head.append(style)
  document.body.append(link)

  const render = () => {
    const { current, status } = controller.getView()
    const visible = current !== undefined && status.kind !== 'off'
    link.hidden = !visible
    if (!visible) return
    // Commons pages are https; a user URL may be http. Never link anything else.
    if (/^https?:\/\//i.test(current.pageUrl)) link.href = current.pageUrl
    else link.removeAttribute('href')
    link.textContent = t('credit.label', { title: current.title, author: current.author, license: current.license })
    link.title = `${link.textContent}\n${t('credit.open')}`
  }
  const offView = controller.subscribe(render)
  const offLocale = onLocale(render)
  render()
  return () => {
    offView()
    offLocale()
    link.remove()
    style.remove()
  }
}
