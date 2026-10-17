import { useSyncExternalStore } from 'react'
import { saveLocal } from './store'

// Personagens que a pessoa tem: id do personagem → constelação (0 a 6) e nível (1 a 90).
export interface OwnedInfo {
  c: number
  lv: number
}
export type OwnedMap = Record<string, OwnedInfo>

const KEY = 'genshinworld:owned'

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, Math.round(n)))
export const clampC = (n: number) => clamp(Number.isFinite(n) ? n : 0, 0, 6)
export const clampLv = (n: number) => clamp(Number.isFinite(n) ? n : 1, 1, 90)

function load(): OwnedMap {
  try {
    const raw = localStorage.getItem(KEY)
    const v: unknown = raw ? JSON.parse(raw) : {}
    if (!v || typeof v !== 'object' || Array.isArray(v)) return {}
    const out: OwnedMap = {}
    for (const [id, info] of Object.entries(v as Record<string, unknown>)) {
      const i = info as Partial<OwnedInfo> | null
      out[id] = { c: clampC(Number(i?.c)), lv: clampLv(Number(i?.lv)) }
    }
    return out
  } catch {
    return {}
  }
}

// Um estado só para o site todo: telas e filtros enxergam a mesma lista na hora.
let state: OwnedMap = load()
const listeners = new Set<() => void>()

function commit(next: OwnedMap) {
  state = next
  try {
    saveLocal(KEY, JSON.stringify(next))
  } catch {
    // sem armazenamento: vale só até fechar a página
  }
  listeners.forEach((l) => l())
}

const subscribe = (l: () => void) => {
  listeners.add(l)
  return () => listeners.delete(l)
}

export function useOwned() {
  const owned = useSyncExternalStore(subscribe, () => state)
  return {
    owned,
    has: (id: string) => id in owned,
    // marca ou desmarca; ao marcar, começa em C0 e nível 1 (a pessoa ajusta)
    toggle: (id: string) => {
      if (id in state) {
        const { [id]: _removed, ...rest } = state
        void _removed
        commit(rest)
      } else commit({ ...state, [id]: { c: 0, lv: 1 } })
    },
    update: (id: string, patch: Partial<OwnedInfo>) => {
      const cur = state[id] ?? { c: 0, lv: 1 }
      commit({
        ...state,
        [id]: { c: patch.c === undefined ? cur.c : clampC(patch.c), lv: patch.lv === undefined ? cur.lv : clampLv(patch.lv) },
      })
    },
    // junta vários de uma vez (importação): atualiza os que já estavam e acrescenta os novos
    merge: (items: { id: string; c?: number | null; lv?: number | null }[]) => {
      const next = { ...state }
      for (const it of items) {
        const cur = next[it.id] ?? { c: 0, lv: 1 }
        next[it.id] = { c: it.c == null ? cur.c : clampC(it.c), lv: it.lv == null ? cur.lv : clampLv(it.lv) }
      }
      commit(next)
    },
  }
}
