/**
 * Host half of DSH Việt Nam. Everything the plugin does lives in the browser
 * (`./client`); the bundle shape still requires a host entry so the plugin row
 * resolves and the client half is served.
 */
import type { Context } from '@deepseek-ai/cordis'

export const name = 'dsh-vietnam'

export function apply(_ctx: Context): void {}
