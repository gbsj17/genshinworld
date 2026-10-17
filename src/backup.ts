// Backup dos dados que ficam só no aparelho: exportar para um arquivo e importar em outro aparelho.
import { CHANGED_EVENT } from './store'

const PREFIX = 'genshinworld:'

// chave → tipo esperado do valor
const KEYS = {
  favorites: 'strings',
  'fav-weapons': 'strings',
  'fav-artifacts': 'strings',
  wishlist: 'strings',
  'wish-weapons': 'strings',
  'goal-chars': 'strings',
  'goal-weapons': 'strings',
  'goal-artifacts': 'strings',
  teams: 'array',
  pity: 'object',
  'my-builds': 'object',
} as const

type Key = keyof typeof KEYS
export type UserData = Partial<Record<Key, unknown>>

export const MAX_BYTES = 2_000_000

export interface BackupFile {
  app: 'genshinworld'
  version: 1
  exportedAt: string
  data: Partial<Record<Key, unknown>>
}

const isObject = (v: unknown): v is Record<string, unknown> => !!v && typeof v === 'object' && !Array.isArray(v)

function valid(kind: (typeof KEYS)[Key], v: unknown): boolean {
  if (kind === 'strings') return Array.isArray(v) && v.every((x) => typeof x === 'string')
  if (kind === 'array') return Array.isArray(v)
  return isObject(v)
}

export function buildBackup(): BackupFile {
  return { app: 'genshinworld', version: 1, exportedAt: new Date().toISOString(), data: readAll() }
}

// Tudo o que é do usuário e está salvo no aparelho (usado no backup e na sincronização)
export function readAll(): UserData {
  const data: UserData = {}
  for (const k of Object.keys(KEYS) as Key[]) {
    try {
      const raw = localStorage.getItem(PREFIX + k)
      if (raw) data[k] = JSON.parse(raw)
    } catch {
      // valor corrompido ou sem armazenamento: fica de fora
    }
  }
  return data
}

export const isEmptyData = (d: UserData) =>
  Object.values(d).every((v) => v == null || (Array.isArray(v) ? v.length === 0 : isObject(v) && Object.keys(v).length === 0))

// Grava os dados vindos da nuvem no lugar dos do aparelho. Confere o formato antes;
// chave que a nuvem não tem é apagada do aparelho (a nuvem vira a versão certa).
export function replaceAll(data: unknown): boolean {
  if (!isObject(data)) return false
  const ok: [Key, unknown][] = []
  for (const k of Object.keys(KEYS) as Key[]) {
    const v = data[k]
    if (v === undefined) continue
    if (!valid(KEYS[k], v)) return false
    ok.push([k, v])
  }
  try {
    for (const k of Object.keys(KEYS) as Key[]) localStorage.removeItem(PREFIX + k)
    for (const [k, v] of ok) localStorage.setItem(PREFIX + k, JSON.stringify(v))
  } catch {
    return false
  }
  return true
}

export type ImportResult = { ok: true; keys: Key[] } | { ok: false }

// Confere o arquivo inteiro antes de gravar qualquer coisa; só chaves conhecidas e com o formato certo entram.
export function restoreBackup(text: string): ImportResult {
  if (text.length > MAX_BYTES) return { ok: false }
  let file: unknown
  try {
    file = JSON.parse(text)
  } catch {
    return { ok: false }
  }
  if (!isObject(file) || file.app !== 'genshinworld' || file.version !== 1 || !isObject(file.data)) return { ok: false }
  const accepted: [Key, unknown][] = []
  for (const [k, v] of Object.entries(file.data)) {
    if (!(k in KEYS)) continue
    if (!valid(KEYS[k as Key], v)) return { ok: false }
    accepted.push([k as Key, v])
  }
  if (accepted.length === 0) return { ok: false }
  try {
    for (const [k, v] of accepted) localStorage.setItem(PREFIX + k, JSON.stringify(v))
  } catch {
    return { ok: false }
  }
  // avisa a sincronização: o que foi importado precisa subir para a conta
  window.dispatchEvent(new CustomEvent(CHANGED_EVENT, { detail: 'import' }))
  return { ok: true, keys: accepted.map(([k]) => k) }
}
