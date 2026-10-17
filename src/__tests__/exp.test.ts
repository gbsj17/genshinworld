import { describe, expect, it } from 'vitest'
import { expNeeded, expPlan } from '../expCalc'

describe('calculadora de EXP', () => {
  it('personagem do 1 ao 90 bate com o total do jogo', () => {
    expect(expNeeded('character', 1, 90)).toBe(8_362_650)
  })
  it('um nível só: nível 1 → 2 pede 1000 de EXP', () => {
    expect(expNeeded('character', 1, 2)).toBe(1000)
  })
  it('intervalo vazio ou invertido dá zero', () => {
    expect(expNeeded('character', 50, 50)).toBe(0)
    expect(expNeeded('character', 60, 20)).toBe(0)
  })
  it('arma de 5★ pede mais que a de 3★', () => {
    expect(expNeeded('weapon', 1, 90, 5)).toBeGreaterThan(expNeeded('weapon', 1, 90, 3))
  })
  it('plano de itens cobre a EXP com pouco excesso', () => {
    const need = 1_234_567
    const plan = expPlan('character', need)
    const got = plan.reduce((s, p) => s + p.count * p.exp, 0)
    expect(got).toBeGreaterThanOrEqual(need)
    expect(got - need).toBeLessThan(1000) // menos que o menor item
  })
})
