import type { Character, CharacterSummary, Constellation, Talent } from './types'

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

// ---- Armas e artefatos: ícone, raridade e detalhes buscados pelo NOME na genshin-db ----
export interface ItemInfo {
  urls: string[]
  rarity: number
  // detalhes (podem faltar se a API mudar o formato; a tela só mostra o que existir)
  type?: string
  baseAtk?: string
  stat?: string
  effectName?: string
  effect?: string
  set2?: string
  set4?: string
}

const itemCache = new Map<string, Promise<ItemInfo>>()

// Texto de efeito vem com "{0}" e tags de cor; troca pelos valores R1 → R5.
function weaponEffect(d: Record<string, unknown>): string | undefined {
  const template = d.effectTemplateRaw
  if (typeof template !== 'string') return undefined
  const values = (r: unknown): string[] => {
    const list = Array.isArray(r) ? r : (r as { values?: unknown })?.values
    return Array.isArray(list) ? list.map(String) : []
  }
  const r1 = values(d.r1)
  const r5 = values(d.r5)
  return template
    .replace(/<[^>]+>/g, '')
    .replace(/\{(\d+)\}/g, (_, i: string) =>
      r1[+i] && r5[+i] && r1[+i] !== r5[+i] ? `${r1[+i]} → ${r5[+i]}` : (r1[+i] ?? '…'),
    )
    .replace(/\\n/g, '\n')
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function toInfo(kind: 'weapons' | 'artifacts', d: any): ItemInfo {
  const im = d?.images ?? {}
  const file = kind === 'weapons' ? im.filename_icon : im.filename_flower
  const direct = kind === 'weapons' ? im.mihoyo_icon : im.mihoyo_flower
  return {
    // Enka primeiro: é o mesmo CDN que já carrega os ícones dos personagens
    urls: [file ? enka(file) : undefined, direct].filter((u): u is string => Boolean(u)),
    rarity: d?.rarity ?? Math.max(...(d?.rarityList ?? [4])),
    type: d?.weaponText,
    baseAtk: d?.baseAtkValue ? String(Math.round(d.baseAtkValue)) : undefined,
    stat: d?.mainStatText ? `${d.mainStatText} ${d.baseStatText ?? ''}`.trim() : undefined,
    effectName: d?.effectName,
    effect: kind === 'weapons' ? weaponEffect(d) : undefined,
    set2: d?.effect2Pc,
    set4: d?.effect4Pc,
  }
}

function fetchItem(kind: 'weapons' | 'artifacts', name: string): Promise<ItemInfo> {
  const key = `${kind}:${name}`
  let cached = itemCache.get(key)
  if (!cached) {
    cached = fetch(`${DB_URL}/${kind}?query=${encodeURIComponent(name)}`)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((d) => toInfo(kind, d))
      .catch(() => ({ urls: [], rarity: 0 }))
    itemCache.set(key, cached)
  }
  return cached
}

// Lista completa de armas ou artefatos do jogo. Também preenche o cache por nome,
// então ícones e detalhes abrem na hora, sem uma busca por item.
export interface ItemEntry {
  name: string
  info: ItemInfo
}

const listCache = new Map<string, Promise<ItemEntry[]>>()

export function getAllItems(kind: 'weapons' | 'artifacts'): Promise<ItemEntry[]> {
  let cached = listCache.get(kind)
  if (!cached) {
    cached = fetch(`${DB_URL}/${kind}?query=names&matchCategories=true&verboseCategories=true`)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((list: { name?: string }[]) => {
        const entries = list
          .filter((d) => d?.name)
          .map((d) => ({ name: d.name as string, info: toInfo(kind, d) }))
        if (entries.length === 0) throw new Error('lista vazia')
        for (const e of entries) itemCache.set(`${kind}:${e.name}`, Promise.resolve(e.info))
        return entries
      })
      .catch((e) => {
        listCache.delete(kind)
        throw e
      })
    listCache.set(kind, cached)
  }
  return cached
}

export const getWeaponInfo = (name: string) => fetchItem('weapons', name)
export const getArtifactInfo = (name: string) => fetchItem('artifacts', name)

// ---- Talentos e constelações pela genshin-db (cobre todos os personagens) ----
const clean = (text: unknown): string =>
  typeof text === 'string' ? text.replace(/\*\*/g, '').replace(/<[^>]+>/g, '').trim() : ''

export interface Details {
  skillTalents: Talent[]
  passiveTalents: Talent[]
  constellations: Constellation[]
}

const detailCache = new Map<string, Promise<Details>>()

export function getDetails(name: string): Promise<Details> {
  let cached = detailCache.get(name)
  if (!cached) {
    const q = encodeURIComponent(name)
    cached = Promise.all([
      fetch(`${DB_URL}/talents?query=${q}`).then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status))))),
      fetch(`${DB_URL}/constellations?query=${q}`).then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status))))),
    ])
      .then(([tal, con]): Details => {
        const kinds = ['NORMAL_ATTACK', 'ELEMENTAL_SKILL', 'ELEMENTAL_BURST']
        const img = (file?: string) => (file ? [enka(file)] : [])
        const skillTalents = [1, 2, 3, 4]
          .map((n, i) => ({ s: tal[`combat${n}`], i }))
          .filter(({ s }) => s?.name)
          .map(({ s, i }): Talent => ({
            name: s.name,
            unlock: '',
            description: clean(s.description),
            type: kinds[i] ?? 'ELEMENTAL_SKILL',
            icons: img(tal.images?.[`filename_combat${i + 1}`]),
          }))
        const passiveTalents = [1, 2, 3, 4, 5, 6]
          .map((n) => ({ s: tal[`passive${n}`], n }))
          .filter(({ s }) => s?.name)
          .map(({ s, n }): Talent => ({
            name: s.name,
            unlock: '',
            description: clean(s.description),
            icons: img(tal.images?.[`filename_passive${n}`]),
          }))
        const constellations = [1, 2, 3, 4, 5, 6]
          .map((n) => ({ c: con[`c${n}`], n }))
          .filter(({ c }) => c?.name)
          .map(({ c, n }): Constellation => ({
            name: c.name,
            unlock: `Constelação ${n}`,
            description: clean(c.description),
            level: n,
            icons: img(con.images?.[`filename_c${n}`]),
          }))
        if (skillTalents.length === 0 && constellations.length === 0) throw new Error('vazio')
        return { skillTalents, passiveTalents, constellations }
      })
      .catch((e) => {
        detailCache.delete(name)
        throw e
      })
    detailCache.set(name, cached)
  }
  return cached
}
