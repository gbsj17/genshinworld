import { useCallback, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import Drawer from './Drawer'
import GlobalSearch from './GlobalSearch'
import { MenuContext } from './menuContext'
import { useTheme } from './theme'

export function MenuProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()

  const openMenu = useCallback(() => setOpen(true), [])
  const closeMenu = useCallback(() => setOpen(false), [])
  const [searchOpen, setSearchOpen] = useState(false)
  const openSearch = useCallback(() => setSearchOpen(true), [])
  const closeSearch = useCallback(() => setSearchOpen(false), [])

  // Atalho Ctrl+K (ou Cmd+K) abre a busca global em qualquer tela
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setSearchOpen((v) => !v)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const value = useMemo(
    () => ({ open, openMenu, closeMenu, searchOpen, openSearch, closeSearch, theme, toggleTheme: toggle }),
    [open, openMenu, closeMenu, searchOpen, openSearch, closeSearch, theme, toggle],
  )

  return (
    <MenuContext.Provider value={value}>
      {children}
      <Drawer />
      <GlobalSearch />
    </MenuContext.Provider>
  )
}
