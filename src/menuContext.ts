import { createContext, useContext } from 'react'
import type { Theme } from './theme'

export interface MenuState {
  open: boolean
  openMenu: () => void
  closeMenu: () => void
  theme: Theme
  toggleTheme: () => void
}

export const MenuContext = createContext<MenuState | null>(null)

export function useMenu(): MenuState {
  const value = useContext(MenuContext)
  if (!value) throw new Error('useMenu precisa estar dentro do MenuProvider')
  return value
}
