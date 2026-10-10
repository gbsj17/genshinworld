import type { Character } from './types'

const BASE_URL = 'https://genshin.jmp.blue'

export function imageUrl(id: string, asset: string): string {
  return `${BASE_URL}/characters/${id}/${asset}`
}

export async function getCharacter(
  id: string,
  signal?: AbortSignal,
): Promise<Character> {
  const response = await fetch(`${BASE_URL}/characters/${id}`, { signal })
  if (!response.ok) {
    throw new Error(`Erro ao buscar ${id}: ${response.status}`)
  }
  return response.json()
}
