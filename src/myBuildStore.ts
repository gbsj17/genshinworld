import { saveLocal } from './store'

// "Minha build" de cada personagem (salva no aparelho). A tela MyBuild.tsx edita; a importação pelo UID preenche.
export interface MyBuildData {
  weapon: string // nome em inglês (chave)
  sets: string[] // até 2 conjuntos de artefatos
  sands: string
  goblet: string
  circlet: string
  subs: string[] // na ordem de prioridade
  note: string
}

export const EMPTY_BUILD: MyBuildData = { weapon: '', sets: [], sands: '', goblet: '', circlet: '', subs: [], note: '' }
export const BUILDS_KEY = 'genshinworld:my-builds'

// Tipo da build, para classificar cada uma (vazio = sem tipo, como as builds antigas)
export const ROLES = ['dps', 'subdps', 'support', 'healer', 'other'] as const
export type BuildRole = (typeof ROLES)[number]

// Uma build salva: os dados + nome e tipo. Cada personagem pode ter várias.
export interface SavedBuild extends MyBuildData {
  id: string
  name: string
  role: BuildRole | ''
}

export type BuildStore = Record<string, SavedBuild[]>

export const newBuildId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6)

const asStrings = (v: unknown) => (Array.isArray(v) ? v.filter((x): x is string => typeof x === 'string') : [])
const text = (v: unknown) => (typeof v === 'string' ? v : '')

// Aceita o formato antigo (uma build por personagem) e o novo (lista) e devolve sempre lista.
export function normalizeStore(v: unknown): BuildStore {
  const out: BuildStore = {}
  if (!v || typeof v !== 'object' || Array.isArray(v)) return out
  for (const [char, val] of Object.entries(v as Record<string, unknown>)) {
    const list = Array.isArray(val) ? val : [val]
    const builds: SavedBuild[] = []
    list.forEach((raw, i) => {
      if (!raw || typeof raw !== 'object') return
      const r = raw as Record<string, unknown>
      builds.push({
        id: text(r.id) || `${char}-${i}`,
        name: text(r.name).slice(0, 40),
        role: (ROLES as readonly string[]).includes(text(r.role)) ? (r.role as BuildRole) : '',
        weapon: text(r.weapon),
        sets: asStrings(r.sets).slice(0, 2),
        sands: text(r.sands),
        goblet: text(r.goblet),
        circlet: text(r.circlet),
        subs: asStrings(r.subs),
        note: text(r.note).slice(0, 300),
      })
    })
    if (builds.length) out[char] = builds
  }
  return out
}

export function loadBuilds(): BuildStore {
  try {
    const raw = localStorage.getItem(BUILDS_KEY)
    return normalizeStore(raw ? JSON.parse(raw) : {})
  } catch {
    return {}
  }
}

export const countBuilds = (s: BuildStore) => Object.values(s).reduce((n, l) => n + l.length, 0)

export function saveBuilds(s: BuildStore) {
  try {
    saveLocal(BUILDS_KEY, JSON.stringify(s))
  } catch {
    // sem armazenamento: vale só até fechar a página
  }
}

// Grava as builds importadas só para quem ainda não tem build própria (nunca sobrescreve o que a pessoa montou).
export function addMissingBuilds(items: Record<string, MyBuildData>, name = ''): number {
  const cur = loadBuilds()
  let n = 0
  for (const [id, b] of Object.entries(items)) {
    if (cur[id]?.length) continue
    cur[id] = [{ ...b, id: newBuildId(), name, role: '' }]
    n++
  }
  if (n > 0) saveBuilds(cur)
  return n
}
