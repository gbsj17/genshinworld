import { useSyncExternalStore } from 'react'
import { saveLocal } from './store'

// Armas que a pessoa tem: nome em inglês → refinamento (1 a 5) e nível (1 a 90).
export interface OwnedWeapon {
  r: number
  lv: number
}
export type OwnedWeapons = Record<string, OwnedWeapon>

const KEY = 'genshinworld:owned-weapons'

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, Math.round(n)))
export const clampR = (n: number) => clamp(Number.isFinite(n) ? n : 1, 1, 5)
export const clampWLv = (n: number) => clamp(Number.isFinite(n) ? n : 1, 1, 90)

function load(): OwnedWeapons {
  try {
    const raw = localStorage.getItem(KEY)
    const v: unknown = raw ? JSON.parse(raw) : {}
    if (!v || typeof v !== 'object' || Array.isArray(v)) return {}
    const out: OwnedWeapons = {}
    for (const [name, info] of Object.entries(v as Record<string, unknown>)) {
      const i = info as Partial<OwnedWeapon> | null
      out[name] = { r: clampR(Number(i?.r)), lv: clampWLv(Number(i?.lv)) }
    }
    return out
  } catch {
    return {}
  }
}

let state: OwnedWeapons = load()
const listeners = new Set<() => void>()

function commit(next: OwnedWeapons) {
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

export function useOwnedWeapons() {
  const owned = useSyncExternalStore(subscribe, () => state)
  return {
    owned,
    has: (name: string) => name in owned,
    // ao marcar, começa em R1 e nível 1 (a pessoa ajusta)
    toggle: (name: string) => {
      if (name in state) {
        const { [name]: _removed, ...rest } = state
        void _removed
        commit(rest)
      } else commit({ ...state, [name]: { r: 1, lv: 1 } })
    },
    update: (name: string, patch: Partial<OwnedWeapon>) => {
      const cur = state[name] ?? { r: 1, lv: 1 }
      commit({
        ...state,
        [name]: { r: patch.r === undefined ? cur.r : clampR(patch.r), lv: patch.lv === undefined ? cur.lv : clampWLv(patch.lv) },
      })
    },
  }
}
