import { describe, expect, it } from 'vitest'
import { baseCoverage, glassTokens, MIN_COVERAGE, SCRIM_ALPHA, surfaceAlpha } from '../src/client/backdrop/glass.ts'
import { Pool, shuffle } from '../src/client/backdrop/pool.ts'
import { toCandidate, type CommonsPage } from '../src/client/backdrop/wikimedia.ts'
import { DEFAULT_SETTINGS, sanitize } from '../src/client/state.ts'

const page = (over: Partial<NonNullable<CommonsPage['imageinfo']>[number]> = {}, license = 'CC BY-SA 4.0'): CommonsPage => ({
  title: 'File:Vịnh Hạ Long lúc bình minh.jpg',
  imageinfo: [{
    width: 4000, height: 2600, mime: 'image/jpeg',
    thumburl: 'https://upload.wikimedia.org/thumb/x/2560px-a.jpg',
    descriptionurl: 'https://commons.wikimedia.org/wiki/File:a.jpg',
    extmetadata: { Artist: { value: '<a href="//commons.wikimedia.org/wiki/User:X">Nguyễn &amp; Co</a>' }, LicenseShortName: { value: license } },
    ...over,
  }],
})

describe('toCandidate', () => {
  it('accepts a wide, large, attributable JPEG and strips HTML from the author', () => {
    expect(toCandidate(page())).toEqual({
      url: 'https://upload.wikimedia.org/thumb/x/2560px-a.jpg',
      title: 'Vịnh Hạ Long lúc bình minh',
      author: 'Nguyễn & Co',
      license: 'CC BY-SA 4.0',
      pageUrl: 'https://commons.wikimedia.org/wiki/File:a.jpg',
    })
  })

  it.each([
    ['portrait', page({ width: 2000, height: 3000 })],
    ['too small', page({ width: 1600, height: 900 })],
    ['not a jpeg', page({ mime: 'image/png' })],
    ['no attribution page', page({ descriptionurl: undefined })],
    ['non-free licence', page({}, 'Copyrighted free use')],
  ])('rejects %s', (_label, input) => {
    expect(toCandidate(input)).toBeUndefined()
  })

  it.each(['File:Ban do Phong Nha-Ke Bang.jpg', 'File:Parco nazionale Phong Nha banner.jpg', 'File:Bản đồ Hạ Long.jpg'])('rejects non-photo file %s', (title) => {
    expect(toCandidate({ ...page(), title })).toBeUndefined()
  })

  it.each(['CC0', 'Public domain', 'CC BY 2.0', 'CC BY-SA 3.0'])('accepts licence %s', (license) => {
    expect(toCandidate(page({}, license))).toBeDefined()
  })
})

describe('Pool', () => {
  const c = (n: number) => ({ url: `u${n}`, title: '', author: '', license: '', pageUrl: '' })

  it('shows every candidate once per cycle and never repeats back-to-back', () => {
    const pool = new Pool()
    pool.reset([c(1), c(2), c(3), c(3)])
    expect(pool.size).toBe(3)
    let prev: string | undefined
    for (let cycle = 0; cycle < 20; cycle++) {
      const seen = new Set<string>()
      for (let i = 0; i < 3; i++) {
        const next = pool.next()!.url
        expect(next).not.toBe(prev)
        seen.add(next)
        prev = next
      }
      expect(seen.size).toBe(3)
    }
  })

  it('is empty-safe', () => {
    expect(new Pool().next()).toBeUndefined()
  })

  it('shuffle keeps every item', () => {
    expect(shuffle([1, 2, 3, 4]).sort()).toEqual([1, 2, 3, 4])
  })
})

describe('glass legibility floor', () => {
  it('never lets combined photo coverage drop below the AA floor', () => {
    for (let v = -20; v <= 120; v += 5) {
      const coverage = 1 - (1 - SCRIM_ALPHA) * (1 - surfaceAlpha(baseCoverage(v)))
      expect(coverage).toBeGreaterThanOrEqual(MIN_COVERAGE - 1e-9)
    }
  })

  it('touches only the page and sidebar, sidebar more opaque than the page', () => {
    const tokens = glassTokens({ base: '#000000', layer1: '#111111', layer2: '#222222', layer3: '#333333' }, 100)
    expect(Object.keys(tokens).sort()).toEqual(['--dsw-alias-bg-base', '--dsw-specific-sidebar-fill'])
    const pct = (v: string) => Number(/ (\d+)%/.exec(v)![1])
    expect(pct(tokens['--dsw-specific-sidebar-fill'])).toBeGreaterThan(pct(tokens['--dsw-alias-bg-base']))
  })
})

describe('settings sanitize', () => {
  it('keeps an explicit empty selection but replaces one made only of retired ids', () => {
    expect(sanitize({ collections: [] }).collections).toEqual([])
    expect(sanitize({ collections: ['hoian'] }).collections).toEqual(DEFAULT_SETTINGS.collections)
  })

  it('falls back field by field', () => {
    expect(sanitize(null)).toEqual(DEFAULT_SETTINGS)
    const s = sanitize({ enabled: false, collections: ['halong', 'nope'], intervalMinutes: 7, visibility: 999, customUrls: ['javascript:alert(1)', 'https://x/y.jpg'] })
    expect(s).toMatchObject({ enabled: false, collections: ['halong'], intervalMinutes: 5, visibility: 100, customUrls: ['https://x/y.jpg'] })
  })
})
