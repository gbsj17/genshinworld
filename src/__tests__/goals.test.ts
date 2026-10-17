import { describe, expect, it } from 'vitest'
import type { Domain } from '../api'
import { artifactDomains, daysUntilOpen, domainFor } from '../goals'

const dom = (kind: Domain['kind'], days: number[], rewards: string[], id = 'x'): Domain => ({
  id,
  kind,
  name: id,
  region: 'R',
  days,
  rewards: rewards.map((name) => ({ name })),
})

describe('dias até o domínio abrir', () => {
  it('hoje é 0 quando o dia está na lista', () => {
    expect(daysUntilOpen([2, 5, 0], 5)).toBe(0)
  })

  it('conta até o próximo dia, passando da semana', () => {
    expect(daysUntilOpen([2, 5, 0], 3)).toBe(2) // quarta → sexta
    expect(daysUntilOpen([1, 4, 0], 6)).toBe(1) // sábado → domingo
    expect(daysUntilOpen([2], 3)).toBe(6) // quarta → terça seguinte
  })

  it('domínio sem dias abre todo dia', () => {
    expect(daysUntilOpen([], 4)).toBe(0)
  })
})

describe('domínio de cada meta', () => {
  const list = [
    dom('talent', [1, 4, 0], ['Teachings of Freedom'], 'a'),
    dom('weapon', [1, 4, 0], ['Decarabian'], 'b'),
    dom('artifact', [], ['Gladiator'], 'c'),
  ]

  it('acha pelo material e pelo tipo', () => {
    expect(domainFor(list, 'talent', ['Mora', 'Teachings of Freedom'])?.id).toBe('a')
    expect(domainFor(list, 'weapon', ['Teachings of Freedom'])).toBeUndefined()
  })

  it('acha o domínio do conjunto de artefato', () => {
    expect(artifactDomains(list, 'Gladiator').map((d) => d.id)).toEqual(['c'])
    expect(artifactDomains(list, 'Outro')).toEqual([])
  })
})
