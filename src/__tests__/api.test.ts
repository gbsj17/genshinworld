import { describe, expect, it } from 'vitest'
import { compareVersions, isVersion, newestFirst } from '../api'

describe('versões', () => {
  it('compara número a número', () => {
    expect(compareVersions('6.10', '6.9')).toBeGreaterThan(0)
    expect(compareVersions('5.0', '5.0')).toBe(0)
    expect(compareVersions('1.0', '1.1')).toBeLessThan(0)
  })

  it('valida o formato', () => {
    expect(isVersion('7.1')).toBe(true)
    expect(isVersion('beta')).toBe(false)
    expect(isVersion(undefined)).toBe(false)
  })

  it('ordena do mais novo para o mais antigo (sem versão = mais novo)', () => {
    const list = [
      { n: 'a', version: '1.0', id: 1 },
      { n: 'b', version: '6.10', id: 2 },
      { n: 'c', version: '6.9', id: 3 },
      { n: 'd', version: undefined, id: 4 },
    ]
    expect(newestFirst(list, (x) => x).map((x) => x.n)).toEqual(['d', 'b', 'c', 'a'])
  })
})
