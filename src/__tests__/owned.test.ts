import { describe, expect, it } from 'vitest'
import { clampC, clampLv } from '../owned'
import { matchEnka, parseEnka, validUid } from '../enka'
import type { CharacterSummary } from '../types'

const ch = (id: string, dbId?: number) => ({ id, name: id, enName: id, vision: 'Pyro', weapon: '', nation: '', rarity: 5, dbId }) as CharacterSummary

describe('limites de constelação e nível', () => {
  it('constelação vai de 0 a 6', () => {
    expect(clampC(-2)).toBe(0)
    expect(clampC(9)).toBe(6)
    expect(clampC(3.4)).toBe(3)
    expect(clampC(NaN)).toBe(0)
  })

  it('nível vai de 1 a 90', () => {
    expect(clampLv(0)).toBe(1)
    expect(clampLv(120)).toBe(90)
    expect(clampLv(NaN)).toBe(1)
  })
})

describe('importação pelo UID (Enka)', () => {
  it('UID tem 9 ou 10 números', () => {
    expect(validUid('800123456')).toBe(true)
    expect(validUid('80012345')).toBe(false)
    expect(validUid('80012a456')).toBe(false)
  })

  it('lê nível e constelações quando os detalhes estão liberados', () => {
    const json = {
      avatarInfoList: [
        { avatarId: 10000016, propMap: { '4001': { val: '90' } }, talentIdList: [1, 2, 3] },
        { avatarId: 10000002, propMap: { '4001': { ival: '80' } } },
      ],
    }
    expect(parseEnka(json)).toEqual([
      { avatarId: 10000016, level: 90, c: 3 },
      { avatarId: 10000002, level: 80, c: 0 },
    ])
  })

  it('sem detalhes, usa a vitrine e deixa a constelação em branco', () => {
    const json = { playerInfo: { showAvatarInfoList: [{ avatarId: 10000016, level: 70 }] } }
    expect(parseEnka(json)).toEqual([{ avatarId: 10000016, level: 70, c: null }])
  })

  it('resposta estranha não quebra', () => {
    expect(parseEnka(null)).toEqual([])
    expect(parseEnka({ avatarInfoList: [{ nome: 1 }] })).toEqual([])
  })

  it('liga ao personagem do site pelo id numérico e conta os que não achou', () => {
    const r = matchEnka(
      [
        { avatarId: 10000016, level: 90, c: 1 },
        { avatarId: 99999999, level: 10, c: 0 },
      ],
      [ch('diluc', 10000016), ch('amber', 10000021)],
    )
    expect(r.found.map((f) => f.char.id)).toEqual(['diluc'])
    expect(r.skipped).toBe(1)
  })
})
