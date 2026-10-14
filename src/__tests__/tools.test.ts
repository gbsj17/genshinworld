import { afterEach, describe, expect, it, vi } from 'vitest'
import { getDomains } from '../api'
import { sum } from '../costs'
import { resonancesFor } from '../data/resonances'

describe('ressonância elemental', () => {
  it('2 do mesmo elemento ativam a ressonância dele', () => {
    expect(resonancesFor(['Pyro', 'Pyro', 'Hydro']).map((r) => r.key)).toEqual(['Pyro'])
  })

  it('4 elementos diferentes ativam o Dossel Protetor', () => {
    expect(resonancesFor(['Pyro', 'Hydro', 'Cryo', 'Geo']).map((r) => r.key)).toEqual(['canopy'])
  })

  it('2+2 ativa as duas e 3 elementos não ativam nada', () => {
    expect(resonancesFor(['Pyro', 'Pyro', 'Geo', 'Geo']).map((r) => r.key)).toEqual(['Pyro', 'Geo'])
    expect(resonancesFor(['Pyro', 'Hydro', 'Cryo']).length).toBe(0)
  })
})

describe('soma de materiais', () => {
  const levels = [
    [{ id: 202, name: 'Mora', count: 100 }],
    [{ id: 202, name: 'Mora', count: 200 }, { id: 1, name: 'Livro', count: 3 }],
    [{ id: 202, name: 'Mora', count: 400 }],
  ]

  it('soma do nível seguinte ao atual até a meta', () => {
    const total = sum(levels, 2, { from: 2, to: 4 }) // níveis 3 e 4
    expect(total.get(202)?.count).toBe(600)
    expect(total.get(1)?.count).toBe(3)
  })

  it('intervalo vazio não soma nada', () => {
    expect(sum(levels, 2, { from: 4, to: 4 }).size).toBe(0)
  })
})

describe('farm: domínios', () => {
  afterEach(() => vi.unstubAllGlobals())

  const dom = (id: number, name: string, level: number, days: string[], type = 'UI_ABYSSUS_AVATAR_PROUD') => ({
    id,
    name,
    entranceId: 10,
    entranceName: 'Entrada',
    regionName: 'Região',
    domainType: type,
    recommendedLevel: level,
    daysOfWeek: days,
    rewardPreview: [
      { id: 102, name: 'Adventure EXP' },
      { id: 202, name: 'Mora' },
      { id: 900 + id, name: `Material ${id}` },
    ],
  })

  it('mantém um domínio por grupo de dias (o mais difícil) e tira EXP e Mora', async () => {
    const list = [
      dom(1, 'Domain of Mastery: A I', 20, ['Monday', 'Thursday', 'Sunday']),
      dom(2, 'Domain of Mastery: A IV', 90, ['Monday', 'Thursday', 'Sunday']),
      dom(3, 'Domain of Mastery: B IV', 90, ['Tuesday', 'Friday', 'Sunday']), // mesma entrada, outros dias
    ]
    vi.stubGlobal('fetch', vi.fn(async () => ({ ok: true, json: async () => list })))
    const out = await getDomains()
    expect(out.map((d) => d.id).sort()).toEqual(['2', '3'])
    expect(out.find((d) => d.id === '2')?.days).toEqual([1, 4, 0])
    expect(out.find((d) => d.id === '2')?.rewards.map((r) => r.name)).toEqual(['Material 2'])
  })
})
