/**
 * Caches for the backdrop: candidate lists per category in localStorage
 * (24h, so Commons is queried at most daily per category) and recently shown
 * images in the Cache API (bounded LRU) so the backdrop survives offline.
 * Every storage access is best-effort — blocked storage just means no cache.
 */
import { fetchCategory, isHttps, type Candidate } from './wikimedia.ts'

// Bump the version whenever candidate filtering changes, so stale lists are refetched.
const LIST_PREFIX = 'dsh-vietnam.bg.list.v2.'
const LIST_TTL_MS = 24 * 60 * 60 * 1000
const IMAGE_CACHE = 'dsh-vietnam-bg'
const IMAGE_CACHE_LIMIT = 30
const SHOWN_KEY = 'dsh-vietnam.bg.shown'

interface StoredList {
  at: number
  candidates: Candidate[]
}

function readList(category: string): StoredList | undefined {
  try {
    const raw = localStorage.getItem(LIST_PREFIX + category)
    return raw === null ? undefined : JSON.parse(raw) as StoredList
  } catch {
    return undefined
  }
}

/** Candidates for one category: fresh cache, else network, else stale cache. */
export async function candidatesFor(category: string, signal?: AbortSignal): Promise<Candidate[]> {
  const cached = readList(category)
  if (cached !== undefined && Date.now() - cached.at < LIST_TTL_MS) return cached.candidates
  try {
    const candidates = await fetchCategory(category, signal)
    try {
      localStorage.setItem(LIST_PREFIX + category, JSON.stringify({ at: Date.now(), candidates }))
    } catch {}
    return candidates
  } catch (error) {
    if (cached !== undefined) return cached.candidates
    throw error
  }
}

async function openCache(): Promise<Cache | undefined> {
  try {
    return typeof caches === 'object' ? await caches.open(IMAGE_CACHE) : undefined
  } catch {
    return undefined
  }
}

/**
 * Load an image as a blob: network first (and remember it), cache on failure.
 * Returns undefined when neither source has it.
 */
export async function loadImage(candidate: Candidate, signal?: AbortSignal): Promise<Blob | undefined> {
  const cache = await openCache()
  try {
    const response = await fetch(candidate.url, { mode: 'cors', signal })
    if (!response.ok) throw new Error(String(response.status))
    const blob = await response.blob()
    if (cache !== undefined) void remember(cache, candidate, blob)
    return blob
  } catch {
    if (signal?.aborted === true) return undefined
    const hit = await cache?.match(candidate.url)
    return hit === undefined ? undefined : await hit.blob()
  }
}

/** Images cached for offline use (with their credits), most recent last. */
export function cachedCandidates(): Candidate[] {
  try {
    const raw = JSON.parse(localStorage.getItem(SHOWN_KEY) ?? '[]') as unknown
    return Array.isArray(raw) ? raw.filter((c): c is Candidate => typeof c?.url === 'string' && isHttps(c.url) && typeof c.pageUrl === 'string') : []
  } catch {
    return []
  }
}

async function remember(cache: Cache, candidate: Candidate, blob: Blob): Promise<void> {
  try {
    await cache.put(candidate.url, new Response(blob, { headers: { 'content-type': blob.type } }))
    const shown = [...cachedCandidates().filter((c) => c.url !== candidate.url), candidate]
    for (const evicted of shown.splice(0, Math.max(0, shown.length - IMAGE_CACHE_LIMIT))) await cache.delete(evicted.url)
    localStorage.setItem(SHOWN_KEY, JSON.stringify(shown))
  } catch {}
}
