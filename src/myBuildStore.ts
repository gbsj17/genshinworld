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

export type BuildStore = Record<string, MyBuildData>

export function loadBuilds(): BuildStore {
  try {
    const raw = localStorage.getItem(BUILDS_KEY)
    const v: unknown = raw ? JSON.parse(raw) : {}
    return v && typeof v === 'object' && !Array.isArray(v) ? (v as BuildStore) : {}
  } catch {
    return {}
  }
}

export function saveBuilds(s: BuildStore) {
  try {
    saveLocal(BUILDS_KEY, JSON.stringify(s))
  } catch {
    // sem armazenamento: vale só até fechar a página
  }
}

// Grava as builds importadas só para quem ainda não tem build própria (nunca sobrescreve o que a pessoa montou).
export function addMissingBuilds(items: Record<string, MyBuildData>): number {
  const cur = loadBuilds()
  let n = 0
  for (const [id, b] of Object.entries(items)) {
    if (cur[id]) continue
    cur[id] = b
    n++
  }
  if (n > 0) saveBuilds(cur)
  return n
}
