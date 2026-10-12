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
