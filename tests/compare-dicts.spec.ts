import { describe, expect, it } from 'vitest'
// @ts-expect-error -- plain .mjs helper without type declarations
import { compareDicts, placeholders } from '../scripts/lib/compare-dicts.mjs'

const en = { chat: { send: 'Send', count: '{n} messages in {name}' } }

describe('compareDicts', () => {
  it('passes a complete translation', () => {
    const r = compareDicts(en, { chat: { send: 'Gửi', count: '{n} tin nhắn trong {name}' } })
    expect(r).toMatchObject({ missing: [], extra: [], placeholder: [], empty: [], total: 2, translated: 2 })
  })

  it('reports missing, empty and extra keys', () => {
    const r = compareDicts(en, { chat: { send: ' ', stale: 'Cũ' } })
    expect(r.missing).toEqual(['chat:count'])
    expect(r.empty).toEqual(['chat:send'])
    expect(r.extra).toEqual(['chat:stale'])
    expect(r.translated).toBe(0)
  })

  it('accepts whitespace-only values whose English is whitespace-only', () => {
    const r = compareDicts({ x: { sep: ' ' } }, { x: { sep: ' ' } })
    expect(r).toMatchObject({ empty: [], translated: 1 })
  })

  it('treats an absent namespace as all-missing', () => {
    expect(compareDicts(en, {}).missing).toHaveLength(2)
  })

  it('flags renamed or dropped placeholders but accepts reordering', () => {
    const r = compareDicts(en, { chat: { send: 'Gửi', count: 'Trong {name} có {count} tin' } })
    expect(r.placeholder).toEqual(['chat:count'])
    expect(compareDicts(en, { chat: { send: 'Gửi', count: 'Trong {name} có {n} tin' } }).placeholder).toEqual([])
  })
})

describe('placeholders', () => {
  it('extracts sorted names', () => {
    expect(placeholders('{b} and {a}')).toEqual(['a', 'b'])
  })
})
