import { useSyncExternalStore } from 'react'

export type FavKind = 'characters' | 'weapons' | 'artifacts' | 'wishlist' | 'wishweapons'

// "characters" mantém a chave antiga para não perder os favoritos já salvos.
const KEYS: Record<FavKind, string> = {
  characters: 'genshinworld:favorites',
  weapons: 'genshinworld:fav-weapons',
  artifacts: 'genshinworld:fav-artifacts',
  wishlist: 'genshinworld:wishlist',
  wishweapons: 'genshinworld:wish-weapons',
}

function load(kind: FavKind): string[] {
  try {
    const raw = localStorage.getItem(KEYS[kind])
    const value: unknown = raw ? JSON.parse(raw) : []
    return Array.isArray(value) ? value.filter((x): x is string => typeof x === 'string') : []
  } catch {
    return []
  }
}

// Um estado compartilhado por tipo: todas as telas e botões enxergam a mesma lista na hora.
const state: Record<FavKind, string[]> = {
  characters: load('characters'),
  weapons: load('weapons'),
  artifacts: load('artifacts'),
  wishlist: load('wishlist'),
  wishweapons: load('wishweapons'),
}
const listeners = new Set<() => void>()

function toggleFav(kind: FavKind, id: string) {
  const prev = state[kind]
  const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
  state[kind] = next
  try {
    localStorage.setItem(KEYS[kind], JSON.stringify(next))
  } catch {
    // sem armazenamento disponível: os favoritos valem só até fechar a página
  }
  listeners.forEach((l) => l())
}

const subscribe = (l: () => void) => {
  listeners.add(l)
  return () => listeners.delete(l)
}

export function useFavorites(kind: FavKind = 'characters') {
  const ids = useSyncExternalStore(subscribe, () => state[kind])
  return {
    ids,
    isFavorite: (id: string) => ids.includes(id),
    toggle: (id: string) => toggleFav(kind, id),
  }
}
