import data from './data/exp.json'

export type ExpKind = 'character' | 'weapon'
export const MAX_LEVEL = 90

// EXP para ir do nível "from" ao nível "to". Tabelas e valores dos itens: scripts/build-exp.mjs
export function expNeeded(kind: ExpKind, from: number, to: number, rarity = 5): number {
  const table = kind === 'character' ? data.character : (data.weapons as Record<string, number[]>)[String(rarity)]
  if (!table || to <= from) return 0
  let total = 0
  for (let l = Math.max(1, from); l < Math.min(MAX_LEVEL, to); l++) total += table[l - 1]
  return total
}

export const expItems = (kind: ExpKind) => data.items[kind]

// Menor quantidade de itens que cobre a EXP: do maior para o menor, e o que sobrar vira 1 item do menor
// (o excesso é no máximo o valor do menor item).
export function expPlan(kind: ExpKind, need: number): { id: number; exp: number; count: number }[] {
  const items = [...expItems(kind)].sort((a, b) => b.exp - a.exp)
  const small = items[items.length - 1]
  let left = need
  return items
    .map((it) => {
      const isSmall = it === small
      const count = isSmall ? Math.ceil(left / it.exp) : Math.floor(left / it.exp)
      left -= count * it.exp
      return { ...it, count }
    })
    .filter((x) => x.count > 0)
}
