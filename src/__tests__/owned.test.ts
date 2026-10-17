import { describe, expect, it } from 'vitest'
import { clampC, clampLv } from '../owned'
import { clampR, clampWLv } from '../ownedWeapons'
import { matchEnka, parseEnka, resolveBuild, validUid } from '../enka'
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

describe('limites da arma', () => {
  it('refinamento vai de 1 a 5 e nível de 1 a 90', () => {
    expect(clampR(0)).toBe(1)
    expect(clampR(9)).toBe(5)
    expect(clampR(NaN)).toBe(1)
    expect(clampWLv(0)).toBe(1)
    expect(clampWLv(200)).toBe(90)
  })
})

describe('build vinda do Enka', () => {
  const rel = (equipType: string, icon: string, main: string, subs: string[]) => ({
    flat: { itemType: 'ITEM_RELIQUARY', icon, equipType, reliquaryMainstat: { mainPropId: main }, reliquarySubstats: subs.map((s) => ({ appendPropId: s })) },
  })
  const json = {
    avatarInfoList: [
      {
        avatarId: 1,
        propMap: { '4001': { val: '90' } },
        talentIdList: [],
        equipList: [
          rel('EQUIP_BRACER', 'UI_RelicIcon_15020_4', 'FIGHT_PROP_HP', ['FIGHT_PROP_CRITICAL', 'FIGHT_PROP_CRITICAL_HURT']),
          rel('EQUIP_NECKLACE', 'UI_RelicIcon_15020_2', 'FIGHT_PROP_ATTACK', ['FIGHT_PROP_CRITICAL']),
          rel('EQUIP_SHOES', 'UI_RelicIcon_15020_5', 'FIGHT_PROP_CHARGE_EFFICIENCY', ['FIGHT_PROP_CRITICAL']),
          rel('EQUIP_RING', 'UI_RelicIcon_15017_1', 'FIGHT_PROP_ELEC_ADD_HURT', ['FIGHT_PROP_ATTACK_PERCENT']),
          rel('EQUIP_DRESS', 'UI_RelicIcon_15017_3', 'FIGHT_PROP_CRITICAL_HURT', ['FIGHT_PROP_CRITICAL_HURT']),
          { flat: { itemType: 'ITEM_WEAPON', icon: 'UI_EquipIcon_Pole_Mori' }, weapon: { level: 90, affixMap: { '113415': 4 } } },
        ],
      },
    ],
  }
  const item = (name: string, url: string) => ({ name, info: { urls: [`https://enka.network/ui/${url}.png`] } })

  it('lê arma, atributos principais e substats mais frequentes', () => {
    const b = parseEnka(json)[0].build!
    expect(b.weapon).toEqual({ icon: 'UI_EquipIcon_Pole_Mori', lv: 90, r: 5 })
    expect(b.sands).toBe('Energy Recharge')
    expect(b.goblet).toBe('Elemental DMG')
    expect(b.circlet).toBe('CRIT DMG')
    expect(b.subs.slice(0, 2)).toEqual(['CRIT Rate', 'CRIT DMG'])
  })

  it('liga ao conjunto com 2 ou mais peças e à arma pelo ícone', () => {
    const b = parseEnka(json)[0].build!
    const r = resolveBuild(b, [item('The Catch', 'UI_EquipIcon_Pole_Mori')], [item('Set A', 'UI_RelicIcon_15020_4'), item('Set B', 'UI_RelicIcon_15017_4')])
    expect(r.weapon).toEqual({ name: 'The Catch', r: 5, lv: 90 })
    expect(r.build.sets).toEqual(['Set A', 'Set B']) // 3 peças e 2 peças: os dois entram
  })
})
