import type { Character, CharacterSummary } from './types'

const BASE_URL = 'https://genshin.jmp.blue'

export function imageUrl(id: string, asset: string): string {
  return `${BASE_URL}/characters/${id}/${asset}`
}

export const characterIcon = (id: string) => imageUrl(id, 'icon')
const slug = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-')
export const elementIcon = (vision: string) =>
  `${BASE_URL}/elements/${slug(vision)}/icon`
export const weaponIcon =(id: string) => `${BASE_URL}/weapons/${id}/icon`
export const artifactFlower = (id: string) =>
  `${BASE_URL}/artifacts/${id}/flower-of-life`

const DB_URL = 'https://genshin-db-api.vercel.app/api/v5'

const ELEMENTS: Record<string, string> = {
  ELEMENT_PYRO: 'Pyro',
  ELEMENT_HYDRO: 'Hydro',
  ELEMENT_ANEMO: 'Anemo',
  ELEMENT_CRYO: 'Cryo',
  ELEMENT_ELECTRO: 'Electro',
  ELEMENT_DENDRO: 'Dendro',
  ELEMENT_GEO: 'Geo',
}

const WEAPONS: Record<string, string> = {
  WEAPON_SWORD_ONE_HAND: 'Sword',
  WEAPON_CLAYMORE: 'Claymore',
  WEAPON_POLE: 'Polearm',
  WEAPON_CATALYST: 'Catalyst',
  WEAPON_BOW: 'Bow',
}

interface DbCharacter {
  name: string
  elementType: string
  weaponType: string
  weaponText?: string
  rarity: number
  region?: string
  images?: {
    mihoyo_icon?: string
    hoyowiki_icon?: string
    filename_icon?: string
    filename_iconCard?: string
    filename_gachaSplash?: string
    portrait?: string
  }
}

const enka = (file: string) => `https://enka.network/ui/${file}.png`

// Artes do jogo para o topo da ficha: splash primeiro, depois o card.
function splashOptions(images: DbCharacter['images']): string[] {
  if (!images) return []
  return [
    images.filename_gachaSplash ? enka(images.filename_gachaSplash) : undefined,
    images.filename_iconCard ? enka(images.filename_iconCard) : undefined,
  ].filter((url): url is string => Boolean(url))
}

// Alternativas de ícone, da mais provável para a menos provável.
// A última usa o nome do arquivo de ícone do jogo no CDN do Enka.Network.
function iconOptions(images: DbCharacter['images']): string[] {
  if (!images) return []
  return [
    images.mihoyo_icon,
    images.hoyowiki_icon,
    images.filename_icon ? enka(images.filename_icon) : undefined,
  ].filter((url): url is string => Boolean(url))
}

// Os nomes da genshin-db nem sempre batem com os ids da genshin.dev
// (ex.: "Kaedehara Kazuha" aqui é "kazuha" lá), então tenta o nome inteiro,
// a última palavra e a primeira.
function findDevId(name: string, devIds: Set<string>): string | undefined {
  const full = slug(name)
  const words = full.split('-')
  return [full, words[words.length - 1], words[0]].find((c) => devIds.has(c))
}

async function fromGenshinDb(): Promise<CharacterSummary[]> {
  const [dbResponse, devResponse] = await Promise.all([
    fetch(`${DB_URL}/characters?query=names&matchCategories=true&verboseCategories=true`),
    fetch(`${BASE_URL}/characters`),
  ])
  if (!dbResponse.ok) throw new Error(`genshin-db: erro ${dbResponse.status}`)
  const list: DbCharacter[] = await dbResponse.json()
  const devIds = new Set<string>(devResponse.ok ? await devResponse.json() : [])

  const result = list
    .filter((c) => ELEMENTS[c.elementType])
    .map((c) => ({
      id: slug(c.name),
      name: c.name,
      vision: ELEMENTS[c.elementType],
      weapon: WEAPONS[c.weaponType] ?? c.weaponText ?? '',
      nation: c.region ?? '',
      rarity: c.rarity,
      devId: findDevId(c.name, devIds),
      icons: iconOptions(c.images),
      portrait: c.images?.portrait,
      splash: splashOptions(c.images),
    }))
  if (result.length === 0) throw new Error('genshin-db: lista vazia')
  return result
}

// Plano B: se a genshin-db falhar, usa a lista da genshin.dev (mais antiga).
async function fromGenshinDev(): Promise<CharacterSummary[]> {
  const response = await fetch(`${BASE_URL}/characters/all`)
  if (!response.ok) throw new Error(`Erro ${response.status}`)
  const list: CharacterSummary[] = await response.json()
  return list.map(({ id, name, vision, weapon, nation, rarity }) => ({
    id,
    name,
    vision,
    weapon,
    nation,
    rarity,
    devId: id,
  }))
}

// Endereços de ícone do personagem, do mais confiável para o menos.
export function iconChain(c: CharacterSummary): string[] {
  return [...(c.devId ? [characterIcon(c.devId)] : []), ...(c.icons ?? [])]
}

// A lista completa é grande, então é buscada uma vez só e guardada em memória.
let allCache: Promise<CharacterSummary[]> | null = null

export function getAllCharacters(): Promise<CharacterSummary[]> {
  if (!allCache) {
    allCache = fromGenshinDb()
      .catch(fromGenshinDev)
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

// ---- Armas e artefatos: ícone + raridade buscados pelo NOME na genshin-db ----
export interface ItemInfo {
  urls: string[]
  rarity: number
}

const itemCache = new Map<string, Promise<ItemInfo>>()

function fetchItem(kind: 'weapons' | 'artifacts', name: string): Promise<ItemInfo> {
  const key = `${kind}:${name}`
  let cached = itemCache.get(key)
  if (!cached) {
    cached = fetch(`${DB_URL}/${kind}?query=${encodeURIComponent(name)}`)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((d): ItemInfo => {
        const im = d?.images ?? {}
        const file = kind === 'weapons' ? im.filename_icon : im.filename_flower
        const direct = kind === 'weapons' ? im.mihoyo_icon : im.mihoyo_flower
        return {
          // Enka primeiro: é o mesmo CDN que já carrega os ícones dos personagens
          urls: [file ? enka(file) : undefined, direct].filter((u): u is string => Boolean(u)),
          rarity: d?.rarity ?? Math.max(...(d?.rarityList ?? [4])),
        }
      })
      .catch(() => ({ urls: [], rarity: 0 }))
    itemCache.set(key, cached)
  }
  return cached
}

export const getWeaponInfo = (name: string) => fetchItem('weapons', name)
export const getArtifactInfo = (name: string) => fetchItem('artifacts', name)
