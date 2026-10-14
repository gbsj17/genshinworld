import type { Character, CharacterSummary, Constellation, Talent } from './types'
import { apiLang, isPt, t } from './i18n'

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
// Os nomes internos (ids, builds) são sempre em inglês: a busca aceita inglês e devolve no idioma escolhido.
const LQ = `queryLanguages=English&resultLanguage=${apiLang}`
const LIST_Q = 'query=names&matchCategories=true&verboseCategories=true'

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
  version?: string
  description?: string
  id?: number
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
  // A lista em inglês dá os ids e chaves; no português, os textos vêm de uma segunda lista (casada pelo id numérico).
  const [dbResponse, devResponse, localResponse] = await Promise.all([
    fetch(`${DB_URL}/characters?${LIST_Q}&resultLanguage=English`),
    fetch(`${BASE_URL}/characters`),
    isPt ? fetch(`${DB_URL}/characters?${LIST_Q}&resultLanguage=${apiLang}`) : Promise.resolve(null),
  ])
  if (!dbResponse.ok) throw new Error(`genshin-db: erro ${dbResponse.status}`)
  const list: DbCharacter[] = await dbResponse.json()
  const devIds = new Set<string>(devResponse.ok ? await devResponse.json() : [])
  const local = new Map<number, DbCharacter>()
  if (localResponse?.ok) {
    for (const c of (await localResponse.json()) as DbCharacter[]) {
      if (typeof c.id === 'number') local.set(c.id, c)
    }
  }

  const result = list
    .filter((c) => ELEMENTS[c.elementType])
    .map((c) => {
      const l = (typeof c.id === 'number' ? local.get(c.id) : undefined) ?? c
      return {
        id: slug(c.name),
        name: l.name,
        enName: c.name,
        vision: ELEMENTS[c.elementType],
        weapon: WEAPONS[c.weaponType] ?? c.weaponText ?? '',
        nation: l.region ?? '',
        rarity: c.rarity,
        devId: findDevId(c.name, devIds),
        icons: iconOptions(c.images),
        portrait: c.images?.portrait,
        splash: splashOptions(c.images),
        version: c.version,
        description: l.description,
        dbId: typeof c.id === 'number' ? c.id : undefined,
      }
    })
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
    enName: name,
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
  label?: string // nome no idioma escolhido (o nome em inglês é a chave)
  type?: string
  typeKey?: string // tipo de arma em inglês (usado nos filtros)
  baseAtk?: string
  stat?: string
  effectName?: string
  effect?: string
  set2?: string
  set4?: string
  version?: string
  id?: number
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
function toInfo(kind: 'weapons' | 'artifacts' | 'materials', d: any): ItemInfo {
  const im = d?.images ?? {}
  const file = kind === 'artifacts' ? im.filename_flower : im.filename_icon
  const direct = kind === 'artifacts' ? im.mihoyo_flower : im.mihoyo_icon
  return {
    // Enka primeiro: é o mesmo CDN que já carrega os ícones dos personagens
    urls: [file ? enka(file) : undefined, direct].filter((u): u is string => Boolean(u)),
    label: typeof d?.name === 'string' ? d.name : undefined,
    rarity: d?.rarity ?? Math.max(...(d?.rarityList ?? [4])),
    type: d?.weaponText ?? d?.typeText,
    baseAtk: d?.baseAtkValue ? String(Math.round(d.baseAtkValue)) : undefined,
    stat: d?.mainStatText ? `${d.mainStatText} ${d.baseStatText ?? ''}`.trim() : undefined,
    effectName: d?.effectName,
    effect: kind === 'weapons' ? weaponEffect(d) : undefined,
    set2: d?.effect2Pc,
    set4: d?.effect4Pc,
    id: typeof d?.id === 'number' ? d.id : undefined,
    version: typeof d?.version === 'string' || typeof d?.version === 'number' ? String(d.version) : undefined,
  }
}

function fetchItem(kind: 'weapons' | 'artifacts' | 'materials', name: string): Promise<ItemInfo> {
  const key = `${kind}:${name}`
  let cached = itemCache.get(key)
  if (!cached) {
    cached = fetch(`${DB_URL}/${kind}?query=${encodeURIComponent(name)}&${LQ}`)
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
  name: string // chave (inglês)
  label: string // nome para mostrar no idioma escolhido
  info: ItemInfo
}

const listCache = new Map<string, Promise<ItemEntry[]>>()

const fetchList = (kind: string, language: string): Promise<{ id?: number; name?: string; weaponText?: string }[]> =>
  fetch(`${DB_URL}/${kind}?${LIST_Q}&resultLanguage=${language}`).then((r) =>
    r.ok ? r.json() : Promise.reject(new Error(String(r.status))),
  )

export function getAllItems(kind: 'weapons' | 'artifacts' | 'materials'): Promise<ItemEntry[]> {
  let cached = listCache.get(kind)
  if (!cached) {
    cached = Promise.all([fetchList(kind, 'English'), isPt ? fetchList(kind, apiLang) : Promise.resolve(null)])
      .then(([en, local]) => {
        const byId = new Map<number, { name?: string }>()
        for (const d of local ?? []) if (typeof d.id === 'number') byId.set(d.id, d)
        const entries = en
          .filter((d) => d?.name)
          .map((d) => {
            const l = (typeof d.id === 'number' ? byId.get(d.id) : undefined) ?? d
            const info = toInfo(kind, { ...d, ...l })
            info.typeKey = (d as { weaponText?: string }).weaponText ?? info.type
            return { name: d.name as string, label: (l.name ?? d.name) as string, info }
          })
        if (entries.length === 0) throw new Error('empty list')
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
      fetch(`${DB_URL}/talents?query=${q}&${LQ}`).then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status))))),
      fetch(`${DB_URL}/constellations?query=${q}&${LQ}`).then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status))))),
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
            unlock: t('constellationN', { n }),
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

// Ícones das 3 habilidades ativas (normal, elemental, supremo) de todos os personagens, numa única busca.
// A chave é o nome em inglês do personagem.
let skillCache: Promise<Map<string, string[]>> | null = null

export function getSkillIcons(): Promise<Map<string, string[]>> {
  if (!skillCache) {
    skillCache = fetch(`${DB_URL}/talents?${LIST_Q}`)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((list: { name?: string; images?: Record<string, string> }[]) => {
        const map = new Map<string, string[]>()
        for (const d of list) {
          if (!d?.name || !d.images) continue
          const icons = [1, 2, 3]
            .map((n) => d.images?.[`filename_combat${n}`])
            .filter((f): f is string => Boolean(f))
            .map(enka)
          if (icons.length) map.set(d.name, icons)
        }
        return map
      })
      .catch((e) => {
        skillCache = null
        throw e
      })
  }
  return skillCache
}

// ---- Custos de materiais (ascensão do personagem e talentos) ----
export interface CostItem {
  id: number
  name: string
  count: number
}

export interface Costs {
  ascend: CostItem[][] // 6 fases de ascensão
  talent: CostItem[][] // do nível 2 ao 10 (o mesmo custo vale para os 3 talentos)
}

const costCache = new Map<string, Promise<Costs>>()

const collect = (obj: Record<string, CostItem[]> | undefined, prefix: string, from: number, to: number): CostItem[][] => {
  const out: CostItem[][] = []
  for (let i = from; i <= to; i++) out.push(obj?.[`${prefix}${i}`] ?? [])
  return out
}

export function getCosts(enName: string): Promise<Costs> {
  let cached = costCache.get(enName)
  if (!cached) {
    const q = encodeURIComponent(enName)
    const get = (kind: string) =>
      fetch(`${DB_URL}/${kind}?query=${q}&${LQ}`).then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
    cached = Promise.all([get('characters'), get('talents')])
      .then(([ch, ta]): Costs => {
        const costs: Costs = { ascend: collect(ch?.costs, 'ascend', 1, 6), talent: collect(ta?.costs, 'lvl', 2, 10) }
        if (costs.ascend.every((l) => l.length === 0) && costs.talent.every((l) => l.length === 0)) throw new Error('sem custos')
        return costs
      })
      .catch((e) => {
        costCache.delete(enName)
        throw e
      })
    costCache.set(enName, cached)
  }
  return cached
}

// Compara versões como "6.10" > "6.9" (número a número).
export function compareVersions(a: string, b: string): number {
  const pa = a.split('.').map(Number)
  const pb = b.split('.').map(Number)
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const d = (pa[i] || 0) - (pb[i] || 0)
    if (d) return d
  }
  return 0
}

export const isVersion = (v?: string): v is string => Boolean(v && /^\d+(\.\d+)*$/.test(v))

// Ordena do lançamento mais recente para o mais antigo: versão (sem versão = ainda não marcado,
// tratado como o mais novo) e, em empate, o id numérico da genshin-db.
export function newestFirst<T>(list: T[], get: (x: T) => { version?: string; id?: number }): T[] {
  const key = (x: T) => {
    const { version, id } = get(x)
    return { v: isVersion(version) ? version : null, id: id ?? 0 }
  }
  return [...list].sort((a, b) => {
    const ka = key(a)
    const kb = key(b)
    if (ka.v === null && kb.v !== null) return -1
    if (kb.v === null && ka.v !== null) return 1
    if (ka.v && kb.v) {
      const d = compareVersions(kb.v, ka.v)
      if (d) return d
    }
    return kb.id - ka.id
  })
}

// ---- Domínios (farm do dia): materiais de talento/arma por dia da semana e artefatos ----
export interface DomainReward {
  name: string
  rarity?: number
}

export interface Domain {
  id: string
  kind: 'talent' | 'weapon' | 'artifact'
  name: string // nome do domínio
  region: string
  days: number[] // 0 = domingo ... 6 = sábado; vazio = todos os dias
  rewards: DomainReward[]
}

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const DOMAIN_KIND: Record<string, Domain['kind']> = {
  UI_ABYSSUS_AVATAR_PROUD: 'talent',
  UI_ABYSSUS_WEAPON_PROMOTE: 'weapon',
  UI_ABYSSUS_RELIC: 'artifact',
}

interface DbDomain {
  id?: number
  entranceId?: number
  entranceName?: string
  regionName?: string
  domainType?: string
  recommendedLevel?: number
  daysOfWeek?: string[]
  rewardPreview?: { id?: number; name?: string; rarity?: number }[]
}

let domainCache: Promise<Domain[]> | undefined

export function getDomains(): Promise<Domain[]> {
  if (!domainCache) {
    const get = (language: string): Promise<DbDomain[]> =>
      fetch(`${DB_URL}/domains?${LIST_Q}&resultLanguage=${language}`).then((r) =>
        r.ok ? r.json() : Promise.reject(new Error(String(r.status))),
      )
    domainCache = Promise.all([get('English'), isPt ? get(apiLang) : Promise.resolve(null)])
      .then(([en, local]) => {
        const byId = new Map<number, DbDomain>()
        for (const d of local ?? []) if (typeof d.id === 'number') byId.set(d.id, d)
        // cada domínio existe em vários níveis (I, II, III...); fica o mais difícil, que tem as melhores recompensas
        const best = new Map<number, { en: DbDomain; l: DbDomain }>()
        for (const d of en) {
          if (typeof d.entranceId !== 'number' || !d.domainType || !DOMAIN_KIND[d.domainType]) continue
          const cur = best.get(d.entranceId)
          if (!cur || (d.recommendedLevel ?? 0) > (cur.en.recommendedLevel ?? 0)) {
            best.set(d.entranceId, { en: d, l: (typeof d.id === 'number' ? byId.get(d.id) : undefined) ?? d })
          }
        }
        const list = [...best.values()].map(({ en: e, l }) => {
          const kind = DOMAIN_KIND[e.domainType as string]
          const rewards = (l.rewardPreview ?? [])
            // EXP e Mora são iguais em todo domínio; o que interessa é o material
            .filter((r) => r.name && ![102, 105, 202].includes(r.id ?? 0))
            .filter((r) => kind !== 'artifact' || r.rarity === 5)
            .map((r) => ({ name: r.name as string, rarity: r.rarity }))
          return {
            id: String(e.entranceId),
            kind,
            name: l.entranceName ?? e.entranceName ?? '',
            region: l.regionName ?? e.regionName ?? '',
            days: (e.daysOfWeek ?? []).map((n) => DAY_NAMES.indexOf(n)).filter((n) => n >= 0),
            rewards,
          } satisfies Domain
        })
        if (list.length === 0) throw new Error('domains: lista vazia')
        return list
      })
      .catch((e) => {
        domainCache = undefined
        throw e
      })
  }
  return domainCache
}
