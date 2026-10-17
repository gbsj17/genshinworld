import type { CharacterSummary } from './types'

// Importação pelo UID usando o Enka.Network (público, sem senha): traz os personagens da vitrine do perfil no jogo.
// O Enka não libera CORS para sites: a consulta passa por um Worker da Cloudflare (worker/enka-proxy.js).
const ENKA_URL = 'https://enka-proxy.genivalbsj17.workers.dev/?uid='

export const validUid = (uid: string) => /^\d{9,10}$/.test(uid)

export interface EnkaChar {
  avatarId: number
  level: number | null
  c: number | null // null = o Enka não mostrou (detalhes ocultos no jogo)
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
      return [{ avatarId, level: num(prop?.val ?? prop?.ival), c: Math.min(6, talents) }]
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
  const found: { char: CharacterSummary; level: number | null; c: number | null }[] = []
  let skipped = 0
  for (const e of list) {
    const char = byDb.get(e.avatarId)
    if (char) found.push({ char, level: e.level, c: e.c })
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
