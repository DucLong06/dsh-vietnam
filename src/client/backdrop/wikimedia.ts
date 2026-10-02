/**
 * Fetch backdrop candidates from Wikimedia Commons. No API key; requests send
 * `Api-User-Agent` as Wikimedia's API etiquette asks of browser clients.
 */

export interface Candidate {
  /** Scaled JPEG URL (upload.wikimedia.org thumbnail). */
  url: string
  title: string
  author: string
  license: string
  /** Commons file page — the attribution link. */
  pageUrl: string
  /** Load `url` straight into an <img> (user URLs) instead of fetching a blob. */
  direct?: boolean
}

export const API_USER_AGENT = 'dsh-vietnam/0.1 (https://github.com/DucLong06/dsh-vietnam)'
const ENDPOINT = 'https://commons.wikimedia.org/w/api.php'
const MIN_WIDTH = 1920
const MIN_ASPECT = 1.3
/** Licences that allow display with attribution. */
const LICENSE = /^(cc0|public domain|pd\b|cc by(-sa)? [0-9.]+)/i
/**
 * Non-photo files that landscape categories still contain (maps, banners…).
 * Unicode-aware word boundaries: `\b` is ASCII-only and misses "bản đồ".
 */
const NOT_A_VIEW = /(?<![\p{L}\p{N}])(maps?|bản đồ|ban do|karte|carte|mapa|plan|diagram|logo|banner|poster|chart|sơ đồ|so do)(?![\p{L}\p{N}])/iu

interface ImageInfo {
  width?: number
  height?: number
  mime?: string
  thumburl?: string
  url?: string
  descriptionurl?: string
  extmetadata?: Record<string, { value?: string } | undefined>
}

export interface CommonsPage {
  title?: string
  imageinfo?: ImageInfo[]
}

export function isHttps(url: string): boolean {
  return /^https:\/\//i.test(url)
}

/** Commons metadata values are HTML fragments (links, spans); keep the text. */
function plainText(html: string | undefined): string {
  if (html === undefined) return ''
  const text = html.replace(/<[^>]*>/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#0?39;/g, "'").replace(/&nbsp;/g, ' ')
  return text.replace(/\s+/g, ' ').trim()
}

/** Accept a Commons file only when it is a wide, large, attributable JPEG. */
export function toCandidate(page: CommonsPage): Candidate | undefined {
  const info = page.imageinfo?.[0]
  if (info === undefined || info.mime !== 'image/jpeg') return undefined
  const width = info.width ?? 0
  const height = info.height ?? 0
  if (width < MIN_WIDTH || height === 0 || width / height < MIN_ASPECT) return undefined
  const meta = info.extmetadata ?? {}
  const license = plainText(meta.LicenseShortName?.value)
  if (!LICENSE.test(license)) return undefined
  const url = info.thumburl ?? info.url
  if (url === undefined || !isHttps(url) || info.descriptionurl === undefined || !isHttps(info.descriptionurl)) return undefined
  const title = plainText(meta.ObjectName?.value) || (page.title ?? '').replace(/^File:/, '').replace(/\.[a-z]+$/i, '')
  if (NOT_A_VIEW.test(title) || NOT_A_VIEW.test(page.title ?? '')) return undefined
  return {
    url,
    title,
    author: plainText(meta.Artist?.value) || 'Wikimedia Commons',
    license,
    pageUrl: info.descriptionurl,
  }
}

/** Thumbnail width matched to the screen, capped at 2560. */
export function targetWidth(): number {
  const screenWidth = typeof screen === 'object' ? screen.width : 1920
  const dpr = typeof devicePixelRatio === 'number' ? devicePixelRatio : 1
  return Math.min(2560, Math.max(1280, Math.round((screenWidth * dpr) / 320) * 320))
}

export async function fetchCategory(category: string, signal?: AbortSignal): Promise<Candidate[]> {
  const params = new URLSearchParams({
    action: 'query',
    generator: 'categorymembers',
    gcmtitle: `Category:${category}`,
    gcmtype: 'file',
    gcmlimit: '100',
    prop: 'imageinfo',
    iiprop: 'url|size|mime|extmetadata',
    iiextmetadatafilter: 'Artist|LicenseShortName|ObjectName',
    iiurlwidth: String(targetWidth()),
    format: 'json',
    origin: '*',
  })
  const response = await fetch(`${ENDPOINT}?${params}`, { headers: { 'Api-User-Agent': API_USER_AGENT }, signal })
  if (!response.ok) throw new Error(`Wikimedia ${response.status}`)
  const body = await response.json() as { query?: { pages?: Record<string, CommonsPage> } }
  return Object.values(body.query?.pages ?? {}).flatMap((page) => toCandidate(page) ?? [])
}
