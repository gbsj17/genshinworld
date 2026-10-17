import { beforeEach, describe, expect, it } from 'vitest'
import { loginDismissed, loginLater, loginNever, shouldShowLogin } from '../loginGate'

describe('tela de login: quando aparece', () => {
  it('aparece para quem não entrou e some quando entra', () => {
    expect(shouldShowLogin('signed-out', false, false)).toBe(true)
    expect(shouldShowLogin('synced', false, false)).toBe(false)
    expect(shouldShowLogin('off', false, false)).toBe(false)
  })

  it('não aparece enquanto confere a sessão salva', () => {
    expect(shouldShowLogin('loading', false, false)).toBe(false)
  })

  it('continua aberta durante o login e mostra o erro, se der', () => {
    expect(shouldShowLogin('loading', false, true)).toBe(true)
    expect(shouldShowLogin('error', false, true)).toBe(true)
    expect(shouldShowLogin('error', false, false)).toBe(false)
  })

  it('não aparece depois de "talvez depois" ou "não quero"', () => {
    expect(shouldShowLogin('signed-out', true, false)).toBe(false)
  })
})

describe('tela de login: escolhas guardadas', () => {
  beforeEach(() => {
    localStorage.clear()
    sessionStorage.clear()
  })

  it('"talvez depois" vale só nesta visita', () => {
    expect(loginDismissed()).toBe(false)
    loginLater()
    expect(loginDismissed()).toBe(true)
    sessionStorage.clear() // nova visita
    expect(loginDismissed()).toBe(false)
  })

  it('"não quero me logar" fica guardado', () => {
    loginNever()
    sessionStorage.clear()
    expect(loginDismissed()).toBe(true)
  })
})
