/**
 * Shuffled rotation over a candidate list: every candidate shows once before
 * any repeats, and a fresh shuffle never starts with the one just shown.
 */
import type { Candidate } from './wikimedia.ts'

export function shuffle<T>(items: readonly T[], random: () => number = Math.random): T[] {
  const out = [...items]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

export class Pool {
  private order: Candidate[] = []
  private cursor = 0
  private last: Candidate | undefined

  constructor(private readonly random: () => number = Math.random) {}

  /** Replace the candidates (dedupe by URL) and start a new cycle. */
  reset(candidates: readonly Candidate[]): void {
    const unique = [...new Map(candidates.map((c) => [c.url, c])).values()]
    this.order = shuffle(unique, this.random)
    this.cursor = 0
    this.avoidImmediateRepeat()
  }

  get size(): number {
    return this.order.length
  }

  next(): Candidate | undefined {
    if (this.order.length === 0) return undefined
    if (this.cursor >= this.order.length) {
      this.order = shuffle(this.order, this.random)
      this.cursor = 0
      this.avoidImmediateRepeat()
    }
    this.last = this.order[this.cursor++]
    return this.last
  }

  private avoidImmediateRepeat(): void {
    if (this.order.length > 1 && this.order[0].url === this.last?.url) {
      ;[this.order[0], this.order[1]] = [this.order[1], this.order[0]]
    }
  }
}
