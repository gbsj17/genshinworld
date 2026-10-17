// Estatísticas de acesso (Firebase / Google Analytics). Só liga se houver measurementId na configuração
// E a pessoa tiver aceitado. Sem aceite (ou com "não rastrear" no navegador) nada é carregado nem enviado.
import { useSyncExternalStore } from 'react'
import { analyticsAvailable, firebaseConfig } from './firebaseConfig'

export type Consent = 'yes' | 'no' | null
const KEY = 'genshinworld:analytics'

const dnt = () => typeof navigator !== 'undefined' && (navigator.doNotTrack === '1' || (window as { doNotTrack?: string }).doNotTrack === '1')

function read(): Consent {
  if (!analyticsAvailable || dnt()) return 'no'
  try {
    const v = localStorage.getItem(KEY)
    return v === 'yes' || v === 'no' ? v : null
  } catch {
    return null
  }
}

let consent: Consent = read()
const listeners = new Set<() => void>()

export const useConsent = () =>
  useSyncExternalStore(
    (l) => {
      listeners.add(l)
      return () => listeners.delete(l)
    },
    () => consent,
  )

export function setConsent(next: 'yes' | 'no') {
  consent = next
  try {
    localStorage.setItem(KEY, next)
  } catch {
    // sem armazenamento: a escolha vale só até fechar a página
  }
  listeners.forEach((l) => l())
  if (next === 'no') void setCollection(false)
}

type Mod = { fn: typeof import('firebase/analytics'); a: import('firebase/analytics').Analytics }
let modPromise: Promise<Mod> | null = null
function load(): Promise<Mod> {
  if (!modPromise) {
    modPromise = Promise.all([import('firebase/app'), import('firebase/analytics')]).then(async ([app, fn]) => {
      const a = app.getApps()[0] ?? app.initializeApp(firebaseConfig)
      return { fn, a: fn.getAnalytics(a) }
    })
  }
  return modPromise
}

async function setCollection(on: boolean) {
  if (!analyticsAvailable || (!on && !modPromise)) return
  try {
    const { fn, a } = await load()
    fn.setAnalyticsCollectionEnabled(a, on)
  } catch {
    // sem rede ou bloqueado por extensão: o site funciona igual
  }
}

// Uma visualização de página por troca de rota (o Analytics não vê rotas de app sozinho)
export async function trackPage(path: string, title: string) {
  if (consent !== 'yes') return
  try {
    const { fn, a } = await load()
    fn.setAnalyticsCollectionEnabled(a, true)
    fn.logEvent(a, 'page_view', { page_path: path, page_title: title })
  } catch {
    // ignorado de propósito
  }
}
