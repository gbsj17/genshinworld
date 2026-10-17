import { useEffect } from 'react'
import { t } from './i18n'
import type { Key } from './i18n'

export const SITE = 'Genshin World'

// Título da aba do navegador: "Página | Genshin World"
export const setTitle = (page?: string) => {
  document.title = page ? `${page} | ${SITE}` : SITE
}

// Para páginas de detalhe (personagem, arma, conjunto): o nome só chega depois de carregar.
export function usePageTitle(page?: string) {
  useEffect(() => {
    if (page) setTitle(page)
  }, [page])
}

// Páginas sem nome próprio na rota: caminho → texto do menu
export const STATIC_TITLES: Record<string, Key> = {
  '/characters': 'characters',
  '/weapons': 'weapons',
  '/artifacts': 'artifacts',
  '/favorites': 'favorites',
  '/docs': 'docs',
  '/compare': 'compare',
  '/teams': 'teamBuilder',
  '/materials': 'materials',
  '/farm': 'farm',
  '/wishlist': 'wishlist',
  '/pity': 'pity',
  '/exp': 'exp',
  '/codes': 'codes',
  '/data': 'area',
}

export function staticTitle(pathname: string): string | undefined | null {
  const clean = pathname.replace(/\/+$/, '') || '/'
  if (clean === '/') return undefined // início: só o nome do site
  const key = STATIC_TITLES[clean]
  return key ? t(key) : null // null = página de detalhe (define o próprio título)
}
