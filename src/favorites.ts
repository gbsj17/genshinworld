import { useCallback, useState } from 'react'

const KEY = 'genshinworld:favorites'

function load(): string[] {
  try {
    const raw = localStorage.getItem(KEY)
    const value: unknown = raw ? JSON.parse(raw) : []
    return Array.isArray(value)
      ? value.filter((x): x is string => typeof x === 'string')
      : []
  } catch {
    return []
  }
}

export function useFavorites() {
  const [ids, setIds] = useState<string[]>(load)

  const toggle = useCallback((id: string) => {
    setIds((prev) => {
      const next = prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id]
      try {
        localStorage.setItem(KEY, JSON.stringify(next))
      } catch {
        // sem armazenamento disponível: os favoritos valem só até fechar a página
      }
      return next
    })
  }, [])

  return { ids, isFavorite: (id: string) => ids.includes(id), toggle }
}
