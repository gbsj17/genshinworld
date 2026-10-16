// Gravação dos dados do usuário no aparelho. Avisa a sincronização (se estiver ligada) que algo mudou.
export const CHANGED_EVENT = 'genshinworld:changed'

export function saveLocal(key: string, value: string) {
  localStorage.setItem(key, value)
  window.dispatchEvent(new CustomEvent(CHANGED_EVENT, { detail: key }))
}
