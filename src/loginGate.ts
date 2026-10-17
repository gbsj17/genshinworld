import type { SyncStatus } from './sync'

// "Não quero me logar": não mostra mais. "Talvez depois": some só até fechar o site (volta na próxima visita).
const NEVER_KEY = 'genshinworld:login-never'
const LATER_KEY = 'genshinworld:login-later'

const read = (s: Storage, key: string) => {
  try {
    return s.getItem(key) === '1'
  } catch {
    return false
  }
}
const write = (s: Storage, key: string) => {
  try {
    s.setItem(key, '1')
  } catch {
    // sem armazenamento: a tela volta na próxima página
  }
}

export const loginDismissed = () => read(localStorage, NEVER_KEY) || read(sessionStorage, LATER_KEY)
export const loginLater = () => write(sessionStorage, LATER_KEY)
export const loginNever = () => write(localStorage, NEVER_KEY)

// Buscadores e ferramentas de teste não fazem login: não cobrimos o conteúdo para eles.
export const isCrawler = () => /bot|crawl|spider|slurp|lighthouse|headless/i.test(navigator.userAgent)

// A tela aparece para quem não entrou, depois que o Firebase terminou de conferir a sessão.
// Durante o login (busy) continua aberta, para a pessoa ver o andamento ou o erro.
export function shouldShowLogin(status: SyncStatus, dismissed: boolean, busy: boolean): boolean {
  if (dismissed) return false
  if (status === 'signed-out') return true
  return busy && (status === 'loading' || status === 'error')
}
