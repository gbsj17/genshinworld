import { useSyncExternalStore } from 'react'

// Evento do navegador (Chrome/Edge/Android) que permite abrir o "Instalar app" por um botão nosso.
interface InstallPrompt extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

let deferred: InstallPrompt | null = null
const listeners = new Set<() => void>()
const notify = () => listeners.forEach((l) => l())

if (typeof window !== 'undefined') {
  // o evento vem logo no início, por isso o ouvinte é ligado aqui (importado em main.tsx)
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault()
    deferred = e as InstallPrompt
    notify()
  })
  window.addEventListener('appinstalled', () => {
    deferred = null
    notify()
  })
}

const subscribe = (l: () => void) => {
  listeners.add(l)
  return () => listeners.delete(l)
}

// Só existe botão quando o navegador oferece a instalação e o app ainda não está instalado.
export function useInstall() {
  const available = useSyncExternalStore(subscribe, () => deferred !== null)
  return {
    available,
    install: async () => {
      const e = deferred
      if (!e) return
      await e.prompt()
      await e.userChoice
      deferred = null
      notify()
    },
  }
}
