import type { CharacterSummary } from './types'

// Importação pelo UID usando o Enka.Network (público, sem senha): traz os personagens da vitrine do perfil no jogo.
// O Enka não libera CORS para sites: a consulta passa por um Worker da Cloudflare (worker/enka-proxy.js).
const ENKA_URL = 'https://enka-proxy.genivalbsj17.workers.dev/?uid='

export const validUid = (uid: string) => /^\d{9,10}$/.test(uid)

// Equipamento do personagem como o Enka mostra (só vem com os detalhes liberados no jogo)
export interface EnkaBuild {
  weapon?: { icon: string; lv: number | null; r: number | null }
  sets: Record<string, number> // prefixo do ícone do conjunto (ex.: UI_RelicIcon_15020) → peças equipadas
  sands: string
  goblet: string
  circlet: string
  subs: string[] // na ordem de prioridade
}

export interface EnkaChar {
  avatarId: number
  level: number | null
  c: number | null // null = o Enka não mostrou (detalhes ocultos no jogo)
  build?: EnkaBuild
}

// Atributo principal do Enka → nome usado na "Minha build"
const MAIN: Record<string, string> = {
  FIGHT_PROP_ATTACK_PERCENT: 'ATK%',
  FIGHT_PROP_HP_PERCENT: 'HP%',
  FIGHT_PROP_DEFENSE_PERCENT: 'DEF%',
  FIGHT_PROP_CHARGE_EFFICIENCY: 'Energy Recharge',
  FIGHT_PROP_ELEMENT_MASTERY: 'Elemental Mastery',
  FIGHT_PROP_PHYSICAL_ADD_HURT: 'Physical DMG',
  FIGHT_PROP_CRITICAL: 'CRIT Rate',
  FIGHT_PROP_CRITICAL_HURT: 'CRIT DMG',
  FIGHT_PROP_HEAL_ADD: 'Healing Bonus',
}
const ELEMENT_DMG = /^FIGHT_PROP_(FIRE|WATER|ICE|ELEC|WIND|ROCK|GRASS)_ADD_HURT$/
const SUB: Record<string, string> = { ...MAIN, FIGHT_PROP_ATTACK: 'Flat ATK' }
const SUB_ORDER = ['CRIT Rate', 'CRIT DMG', 'ATK%', 'Elemental Mastery', 'Energy Recharge', 'HP%', 'DEF%', 'Flat ATK']

const mainName = (id: unknown) => (typeof id === 'string' ? (ELEMENT_DMG.test(id) ? 'Elemental DMG' : (MAIN[id] ?? '')) : '')

export function parseBuild(a: Record<string, unknown>): EnkaBuild | undefined {
  const list = Array.isArray(a.equipList) ? (a.equipList as Record<string, unknown>[]) : []
  if (list.length === 0) return undefined
  const b: EnkaBuild = { sets: {}, sands: '', goblet: '', circlet: '', subs: [] }
  const score: Record<string, number> = {}
  for (const it of list) {
    const flat = (it.flat ?? {}) as Record<string, unknown>
    if (flat.itemType === 'ITEM_WEAPON') {
      const w = (it.weapon ?? {}) as { level?: unknown; affixMap?: Record<string, unknown> }
      const affix = Object.values(w.affixMap ?? {})[0]
      const icon = typeof flat.icon === 'string' ? flat.icon : ''
      if (icon) b.weapon = { icon, lv: num(w.level), r: num(affix) === null ? null : (num(affix) as number) + 1 }
    } else if (flat.itemType === 'ITEM_RELIQUARY') {
      const icon = typeof flat.icon === 'string' ? flat.icon : ''
      const set = icon.replace(/_\d+$/, '')
      if (set) b.sets[set] = (b.sets[set] ?? 0) + 1
      const main = mainName((flat.reliquaryMainstat as { mainPropId?: unknown } | undefined)?.mainPropId)
      if (flat.equipType === 'EQUIP_SHOES') b.sands = main
      else if (flat.equipType === 'EQUIP_RING') b.goblet = main
      else if (flat.equipType === 'EQUIP_DRESS') b.circlet = main
      const subs = Array.isArray(flat.reliquarySubstats) ? (flat.reliquarySubstats as { appendPropId?: unknown }[]) : []
      for (const s of subs) {
        const k = typeof s.appendPropId === 'string' ? SUB[s.appendPropId] : undefined
        if (k) score[k] = (score[k] ?? 0) + 1
      }
    }
  }
  b.subs = SUB_ORDER.filter((k) => score[k]).sort((x, y) => score[y] - score[x] || SUB_ORDER.indexOf(x) - SUB_ORDER.indexOf(y)).slice(0, 4)
  return b
}

interface Named {
  name: string
  info: { urls: string[] }
}

// Liga o equipamento do Enka às armas e conjuntos do site (pelo nome do arquivo do ícone)
export function resolveBuild(b: EnkaBuild, weapons: Named[], sets: Named[]) {
  const weapon = b.weapon ? weapons.find((w) => w.info.urls.some((u) => u.includes(`/${b.weapon!.icon}.png`))) : undefined
  const setNames = Object.entries(b.sets)
    .filter(([, n]) => n >= 2)
    .sort((x, y) => y[1] - x[1])
    .slice(0, 2)
    .flatMap(([prefix]) => {
      const s = sets.find((e) => e.info.urls.some((u) => u.includes(`/${prefix}_`)))
      return s ? [s.name] : []
    })
  return {
    weapon: weapon && b.weapon ? { name: weapon.name, r: b.weapon.r, lv: b.weapon.lv } : undefined,
    build: { weapon: weapon?.name ?? '', sets: setNames, sands: b.sands, goblet: b.goblet, circlet: b.circlet, subs: b.subs, note: '' },
  }
}

const num = (v: unknown): number | null => {
  const n = typeof v === 'string' || typeof v === 'number' ? Number(v) : NaN
  return Number.isFinite(n) ? n : null
}

// Lê a resposta do Enka. Com os detalhes liberados vem avatarInfoList (nível e constelações);
// sem eles, só a lista da vitrine (avatarId e nível).
export function parseEnka(json: unknown): EnkaChar[] {
  const root = (json && typeof json === 'object' ? json : {}) as Record<string, unknown>
  const detailed = Array.isArray(root.avatarInfoList) ? (root.avatarInfoList as Record<string, unknown>[]) : []
  if (detailed.length > 0) {
    return detailed.flatMap((a) => {
      const avatarId = num(a.avatarId)
      if (avatarId === null) return []
      const prop = (a.propMap as Record<string, { val?: unknown; ival?: unknown }> | undefined)?.['4001']
      const talents = Array.isArray(a.talentIdList) ? a.talentIdList.length : 0
      return [{ avatarId, level: num(prop?.val ?? prop?.ival), c: Math.min(6, talents), build: parseBuild(a) }]
    })
  }
  const info = root.playerInfo as { showAvatarInfoList?: Record<string, unknown>[] } | undefined
  return (info?.showAvatarInfoList ?? []).flatMap((a) => {
    const avatarId = num(a.avatarId)
    return avatarId === null ? [] : [{ avatarId, level: num(a.level), c: null }]
  })
}

// Liga cada personagem do Enka ao do site pelo id numérico da genshin-db (é o mesmo avatarId do jogo).
export function matchEnka(list: EnkaChar[], chars: CharacterSummary[]) {
  const byDb = new Map<number, CharacterSummary>()
  for (const c of chars) if (c.dbId !== undefined) byDb.set(c.dbId, c)
  const found: { char: CharacterSummary; level: number | null; c: number | null; build?: EnkaBuild }[] = []
  let skipped = 0
  for (const e of list) {
    const char = byDb.get(e.avatarId)
    if (char) found.push({ char, level: e.level, c: e.c, build: e.build })
    else skipped++
  }
  return { found, skipped }
}

export type EnkaError = 'bad-uid' | 'not-found' | 'busy' | 'fail'

export async function fetchEnka(uid: string): Promise<{ ok: true; data: unknown } | { ok: false; error: EnkaError }> {
  if (!validUid(uid)) return { ok: false, error: 'bad-uid' }
  try {
    const r = await fetch(`${ENKA_URL}${uid}`)
    if (r.ok) return { ok: true, data: await r.json() }
    if (r.status === 400) return { ok: false, error: 'bad-uid' }
    if (r.status === 404) return { ok: false, error: 'not-found' }
    if (r.status === 424 || r.status === 429 || r.status === 503) return { ok: false, error: 'busy' }
    return { ok: false, error: 'fail' }
  } catch {
    return { ok: false, error: 'fail' } // sem internet ou bloqueio do navegador (CORS)
  }
}
