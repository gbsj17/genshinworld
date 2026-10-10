import type { Character, CharacterSummary } from './types'

const BASE_URL = 'https://genshin.jmp.blue'

export function imageUrl(id: string, asset: string): string {
  return `${BASE_URL}/characters/${id}/${asset}`
}

export const characterIcon = (id: string) => imageUrl(id, 'icon')
const slug = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-')
export const nationIcon = (nation: string) =>
  `${BASE_URL}/nations/${slug(nation)}/icon`
export const elementIcon = (vision: string) =>
  `${BASE_URL}/elements/${slug(vision)}/icon`
export const weaponIcon =(id: string) => `${BASE_URL}/weapons/${id}/icon`
export const artifactFlower = (id: string) =>
  `${BASE_URL}/artifacts/${id}/flower-of-life`

// A lista completa é grande, então é buscada uma vez só e guardada em memória.
let allCache: Promise<CharacterSummary[]> | null = null

export function getAllCharacters(): Promise<CharacterSummary[]> {
  if (!allCache) {
    allCache = fetch(`${BASE_URL}/characters/all`)
      .then((response) => {
        if (!response.ok) throw new Error(`Erro ${response.status}`)
        return response.json()
      })
      .then((list: CharacterSummary[]) =>
        list.map(({ id, name, vision, weapon, nation, rarity }) => ({
          id,
          name,
          vision,
          weapon,
          nation,
          rarity,
        })),
      )
      .catch((error) => {
        allCache = null
        throw error
      })
  }
  return allCache
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
