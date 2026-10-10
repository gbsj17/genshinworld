import { useCallback, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import Drawer from './Drawer'
import { MenuContext } from './menuContext'
import { useTheme } from './theme'

export function MenuProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()

  const openMenu = useCallback(() => setOpen(true), [])
  const closeMenu = useCallback(() => setOpen(false), [])

  const value = useMemo(
    () => ({ open, openMenu, closeMenu, theme, toggleTheme: toggle }),
    [open, openMenu, closeMenu, theme, toggle],
  )

  return (
    <MenuContext.Provider value={value}>
      {children}
      <Drawer />
    </MenuContext.Provider>
  )
}
