import { isPt } from './i18n'
import type { MyBuildData } from './myBuildStore'

// [PT, EN]; a chave salva é sempre o texto em inglês
const L: Record<string, [string, string]> = {
  'ATK%': ['ATQ%', 'ATK%'],
  'HP%': ['HP%', 'HP%'],
  'DEF%': ['DEF%', 'DEF%'],
  'Energy Recharge': ['Recarga de Energia', 'Energy Recharge'],
  'Elemental Mastery': ['Proficiência Elemental', 'Elemental Mastery'],
  'Elemental DMG': ['Dano do elemento', 'Elemental DMG'],
  'Physical DMG': ['Dano Físico', 'Physical DMG'],
  'CRIT Rate': ['Taxa CRIT', 'CRIT Rate'],
  'CRIT DMG': ['Dano CRIT', 'CRIT DMG'],
  'Healing Bonus': ['Bônus de Cura', 'Healing Bonus'],
  'Flat ATK': ['ATQ fixo', 'Flat ATK'],
}
export const label = (k: string) => (L[k] ? L[k][isPt ? 0 : 1] : k)

// Nome curto, só para o resumo do cartão (Vida, Ataque, Recarga…)
const SHORT: Record<string, [string, string]> = {
  'ATK%': ['Ataque', 'Attack'],
  'HP%': ['Vida', 'HP'],
  'DEF%': ['Defesa', 'DEF'],
  'Energy Recharge': ['Recarga', 'Recharge'],
  'Elemental Mastery': ['Proficiência', 'Mastery'],
  'Elemental DMG': ['Dano elemental', 'Elemental DMG'],
  'Physical DMG': ['Dano Físico', 'Physical DMG'],
  'CRIT Rate': ['CRIT', 'CRIT'],
  'CRIT DMG': ['CRIT', 'CRIT'],
  'Healing Bonus': ['Cura', 'Healing'],
}

export const SANDS = ['ATK%', 'HP%', 'DEF%', 'Energy Recharge', 'Elemental Mastery']
export const GOBLET = ['HP%', 'ATK%', 'DEF%', 'Elemental DMG', 'Physical DMG', 'Elemental Mastery']
export const CIRCLET = ['CRIT Rate', 'CRIT DMG', 'HP%', 'ATK%', 'DEF%', 'Healing Bonus', 'Elemental Mastery']
export const SUBS = ['CRIT Rate', 'CRIT DMG', 'ATK%', 'Elemental Mastery', 'Energy Recharge', 'HP%', 'DEF%', 'Flat ATK']

// Resumo dos atributos principais (areia, cálice e tiara), sem repetir: "Vida · Dano elemental · CRIT"
export function predominant(b: Pick<MyBuildData, 'sands' | 'goblet' | 'circlet'>, pt = isPt): string[] {
  const out: string[] = []
  for (const k of [b.sands, b.goblet, b.circlet]) {
    if (!k) continue
    const s = (SHORT[k] ?? [k, k])[pt ? 0 : 1]
    if (!out.includes(s)) out.push(s)
  }
  return out
}
