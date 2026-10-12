import { describe, expect, it } from 'vitest'
import { dateShort, t, weaponLabel } from '../i18n'

// No ambiente de teste o idioma do navegador é inglês.
describe('i18n', () => {
  it('troca variáveis no texto', () => {
    expect(t('goTo', { n: 'Albedo' })).toContain('Albedo')
    expect(t('countChars', { n: 3 })).toContain('3')
  })

  it('nomes de arma ficam em inglês no modo inglês', () => {
    expect(weaponLabel('Sword')).toBe('Sword')
  })

  it('data curta e nula', () => {
    expect(dateShort(null)).toBeNull()
    expect(dateShort('2026-11-03T12:00:00Z')).toMatch(/\d{2}\/\d{2}/)
  })
})
