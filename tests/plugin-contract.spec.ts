import { readFileSync } from 'node:fs'
import { describe, expect, it, vi } from 'vitest'

// Served by the DSH page's module table at runtime, not resolvable under Node.
vi.mock('@deepseek-ai/dsh-client-ui-primitives', () => ({}))
import * as client from '../src/client/index.ts'
import * as host from '../src/index.ts'

const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'))
const patch = readFileSync(new URL('../cordis.patch.yml', import.meta.url), 'utf8')

describe('plugin contract', () => {
  it('host and client share the package name as plugin name', () => {
    expect(host.name).toBe(pkg.name)
    expect(client.name).toBe(pkg.name)
  })

  it('cordis patch inserts a row named after the package', () => {
    expect(patch).toContain(`name: ${pkg.name}`)
  })

  it('client entry exposes apply and injects locale, theme and slots', () => {
    expect(typeof client.apply).toBe('function')
    expect(client.inject).toEqual(expect.arrayContaining(['locale', 'theme', 'slots']))
  })

  it('declares the dsh 0.2 floor needed for addLanguage', () => {
    expect(pkg.dsh.compatibility.dsh).toBe('>=0.2.0-rc.1')
  })
})
