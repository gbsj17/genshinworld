import { useCallback, useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'

const KEY = 'genshinworld:theme'
const BROWSER_BAR: Record<Theme, string> = { dark: '#12151f', light: '#f6efe3' }

// O tema inicial já foi aplicado pelo script do index.html (antes da página
// aparecer), então aqui só lemos o que está na página.
function current(): Theme {
  return document.documentElement.getAttribute('data-theme') === 'light'
    ? 'light'
    : 'dark'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(current)

  // Cor da barra do navegador no celular acompanha o tema.
  useEffect(() => {
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', BROWSER_BAR[theme])
  }, [theme])

  const toggle = useCallback(() => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    const root = document.documentElement
    // Esta classe liga a transição suave de cores só durante a troca.
    root.classList.add('theme-transition')
    root.setAttribute('data-theme', next)
    window.setTimeout(() => root.classList.remove('theme-transition'), 450)
    try {
      localStorage.setItem(KEY, next)
    } catch {
      // sem armazenamento: o tema vale só até fechar a página
    }
    setTheme(next)
  }, [theme])

  return { theme, toggle }
}
