import { useSyncExternalStore } from 'react'

// Marca quando a base principal (genshin-db) falhou e o site passou a usar a lista reserva.
let degraded = false
const listeners = new Set<() => void>()

export function markDegraded() {
  if (degraded) return
  degraded = true
  listeners.forEach((l) => l())
}

const subscribe = (l: () => void) => {
  listeners.add(l)
  return () => listeners.delete(l)
}

export const useApiDegraded = () => useSyncExternalStore(subscribe, () => degraded)
