import { isPt } from '../i18n'

// Ressonâncias elementais do jogo: 2 personagens do mesmo elemento ou 4 elementos diferentes.
interface Resonance {
  name: [string, string]
  effect: [string, string]
}

const BY_ELEMENT: Record<string, Resonance> = {
  Pyro: {
    name: ['Chamas Fervorosas', 'Fervent Flames'],
    effect: ['ATQ +25%.', 'ATK +25%.'],
  },
  Hydro: {
    name: ['Água Calmante', 'Soothing Water'],
    effect: ['Vida Máx. +25%.', 'Max HP +25%.'],
  },
  Cryo: {
    name: ['Gelo Estilhaçante', 'Shattering Ice'],
    effect: ['Taxa CRIT +15% contra inimigos afetados por Cryo ou Congelados.', 'CRIT Rate +15% against enemies affected by Cryo or Frozen.'],
  },
  Electro: {
    name: ['Alta Tensão', 'High Voltage'],
    effect: ['Reações Eletrocarregado, Supercondutor, Sobrecarga, Cristalizar Electro e Florescer Aceso/Eletro têm 100% de chance de gerar uma partícula Electro (recarga de 5 s).', 'Electro-Charged, Superconduct, Overloaded, Quicken, Aggravate and Hyperbloom have a 100% chance to generate an Electro particle (5 s cooldown).'],
  },
  Anemo: {
    name: ['Ventos Impetuosos', 'Impetuous Winds'],
    effect: ['Consumo de Stamina -15%, Velocidade de Movimento +10% e recarga de habilidades -5%.', 'Stamina consumption -15%, Movement SPD +10% and skill CD -5%.'],
  },
  Geo: {
    name: ['Rocha Resistente', 'Enduring Rock'],
    effect: ['Força do Escudo +15%; com escudo, Dano +15% e RES Geo dos inimigos atingidos -20%.', 'Shield Strength +15%; while shielded, DMG +15% and hit enemies\' Geo RES -20%.'],
  },
  Dendro: {
    name: ['Vegetação Exuberante', 'Sprawling Greenery'],
    effect: ['Proficiência Elemental +50; +30 após reações Queimar, Acelerar, Florescer, Hiperflorescer ou Florada; +20 após Espalhar ou Florada (2 s).', 'Elemental Mastery +50; +30 after Burning, Quicken, Bloom, Hyperbloom or Burgeon; +20 after Aggravate or Spread (2 s).'],
  },
}

const CANOPY: Resonance = {
  name: ['Dossel Protetor', 'Protective Canopy'],
  effect: ['RES Elemental e Física +15%.', 'Elemental and Physical RES +15%.'],
}

export interface ActiveResonance {
  key: string
  element?: string
  name: string
  effect: string
}

const pick = (r: Resonance) => ({ name: r.name[isPt ? 0 : 1], effect: r.effect[isPt ? 0 : 1] })

export function resonancesFor(elements: string[]): ActiveResonance[] {
  const count = new Map<string, number>()
  for (const e of elements) count.set(e, (count.get(e) ?? 0) + 1)
  const out: ActiveResonance[] = []
  for (const [element, n] of count) {
    if (n >= 2 && BY_ELEMENT[element]) out.push({ key: element, element, ...pick(BY_ELEMENT[element]) })
  }
  if (elements.length === 4 && count.size === 4) out.push({ key: 'canopy', ...pick(CANOPY) })
  return out
}
