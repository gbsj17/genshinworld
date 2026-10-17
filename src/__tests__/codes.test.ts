import { describe, expect, it } from 'vitest'
import { redeemUrl } from '../codes'

describe('códigos de resgate', () => {
  it('o link oficial leva o código já preenchido e escapado', () => {
    expect(redeemUrl('ABC123')).toBe('https://genshin.hoyoverse.com/en/gift?code=ABC123')
    expect(redeemUrl('A B&C')).toContain('code=A%20B%26C')
  })
})
