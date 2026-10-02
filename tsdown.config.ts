import { clientBundle } from './tsdown.client.ts'

export default clientBundle('dsh-vietnam', ['src/index.ts'], {
  lib: {
    // cordis resolves at runtime from the dsh profile tree, never from this repo.
    external: ['@deepseek-ai/cordis'],
    sourcemap: true,
  },
})
