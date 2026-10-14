import type { PickFilter, PickOption } from './Picker'
import { t, weaponLabel } from './i18n'
import type { CharacterSummary } from './types'
import type { ItemEntry } from './api'

// Monta os chips a partir dos valores que existem nas opções (ordem fixa ou alfabética).
function build(options: PickOption[], id: string, label: string, show: (v: string) => string, order?: (a: string, b: string) => number): PickFilter {
  const values = [...new Set(options.map((o) => o.facets?.[id]).filter((v): v is string => Boolean(v)))]
  values.sort(order ?? ((a, b) => show(a).localeCompare(show(b))))
  return { id, label, values: values.map((value) => ({ value, label: show(value) })) }
}

const stars = (v: string) => `${v}★`
const high = (a: string, b: string) => Number(b) - Number(a)

export const charFacets = (c: CharacterSummary) => ({ element: c.vision, weapon: c.weapon, rarity: String(c.rarity) })

export const charFilters = (options: PickOption[]): PickFilter[] => [
  build(options, 'element', t('filterElement'), (v) => v),
  build(options, 'weapon', t('filterWeapon'), weaponLabel),
  build(options, 'rarity', t('filterRarity'), stars, high),
]

// "Crit DMG 44.1%" → "Crit DMG" (o número varia por arma e não serve como filtro)
const statName = (s?: string) => s?.replace(/\s*[\d.,]+%?\s*$/, '').trim() || ''

export const weaponFacets = (w: ItemEntry) => ({
  weapon: w.info.typeKey ?? '',
  rarity: String(w.info.rarity),
  stat: statName(w.info.stat),
})

export const weaponFilters = (options: PickOption[]): PickFilter[] => [
  build(options, 'weapon', t('filterWeapon'), weaponLabel),
  build(options, 'rarity', t('filterRarity'), stars, high),
  build(options, 'stat', t('filterStat'), (v) => v),
]
