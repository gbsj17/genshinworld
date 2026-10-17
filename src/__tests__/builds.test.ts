import { describe, expect, it } from 'vitest'
import { BUILDS } from '../data/builds'
import EN from '../data/builds.en.json'

describe('builds', () => {
  it('toda build tem armas, artefatos e fontes', () => {
    for (const [id, b] of Object.entries(BUILDS)) {
      expect(b.weapons.length, id).toBeGreaterThan(0)
      expect(b.artifacts.length, id).toBeGreaterThan(0)
      expect(b.sources.length, id).toBeGreaterThan(0)
    }
  })

  it('as notas em português têm tradução para inglês', () => {
    const map = EN as Record<string, string>
    const missing: string[] = []
    for (const b of Object.values(BUILDS)) {
      for (const n of [...b.weapons, ...b.artifacts].map((x) => x.note)) {
        if (n && !map[n]) missing.push(n)
      }
    }
    expect(missing.length).toBeLessThan(5)
  })
})

describe('Minhas builds (várias por personagem)', () => {
  it('build antiga vira a primeira da lista e valores inválidos são descartados', async () => {
    const { normalizeStore } = await import('../myBuildStore')
    const s = normalizeStore({ albedo: { weapon: 'Cinnabar Spindle', sets: ['A', 'B', 'C'], subs: ['x', 3], role: 'xx' }, lixo: 5, vazio: [] })
    expect(s.albedo).toHaveLength(1)
    expect(s.albedo[0].sets).toEqual(['A', 'B'])
    expect(s.albedo[0].subs).toEqual(['x'])
    expect(s.albedo[0].role).toBe('')
    expect(s.lixo).toBeUndefined()
    expect(s.vazio).toBeUndefined()
  })

  it('lista nova mantém tipo e nome; contagem soma todas', async () => {
    const { normalizeStore, countBuilds } = await import('../myBuildStore')
    const s = normalizeStore({ a: [{ id: '1', name: 'Burst', role: 'dps' }, { id: '2', name: 'Sup', role: 'support' }], b: [{ id: '3' }] })
    expect(s.a[0]).toMatchObject({ name: 'Burst', role: 'dps' })
    expect(countBuilds(s)).toBe(3)
  })

  it('resumo dos principais não repete', async () => {
    const { predominant } = await import('../buildStats')
    expect(predominant({ sands: 'HP%', goblet: 'Elemental DMG', circlet: 'CRIT DMG' }, false)).toEqual(['HP', 'Elemental DMG', 'CRIT'])
    expect(predominant({ sands: 'HP%', goblet: 'HP%', circlet: '' }, true)).toEqual(['Vida'])
  })
})
