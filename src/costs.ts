import type { CostItem } from './api'

export interface Range {
  from: number
  to: number
}

// soma os custos dos níveis (from, to], ou seja, do nível seguinte ao atual até a meta
export function sum(levels: CostItem[][], firstLevel: number, r: Range): Map<number, CostItem> {
  const total = new Map<number, CostItem>()
  for (let lvl = r.from + 1; lvl <= r.to; lvl++) {
    for (const it of levels[lvl - firstLevel] ?? []) {
      const prev = total.get(it.id)
      total.set(it.id, { ...it, count: (prev?.count ?? 0) + it.count })
    }
  }
  return total
}
