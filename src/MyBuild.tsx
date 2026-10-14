import { useEffect, useMemo, useState } from 'react'
import { getAllItems } from './api'
import type { ItemEntry } from './api'
import { isPt, t } from './i18n'
import Picker from './Picker'
import type { PickFilter, PickOption } from './Picker'
import { Thumb } from './Thumb'
import './tools.css'

interface Data {
  weapon: string // nome em inglês (chave)
  sets: string[] // até 2 conjuntos de artefatos
  sands: string
  goblet: string
  circlet: string
  subs: string[] // na ordem de prioridade
  note: string
}

const EMPTY: Data = { weapon: '', sets: [], sands: '', goblet: '', circlet: '', subs: [], note: '' }
const KEY = 'genshinworld:my-builds'

type Store = Record<string, Data>

function loadAll(): Store {
  try {
    const raw = localStorage.getItem(KEY)
    const v: unknown = raw ? JSON.parse(raw) : {}
    return v && typeof v === 'object' && !Array.isArray(v) ? (v as Store) : {}
  } catch {
    return {}
  }
}

function saveAll(s: Store) {
  try {
    localStorage.setItem(KEY, JSON.stringify(s))
  } catch {
    // sem armazenamento: vale só até fechar a página
  }
}

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
const label = (k: string) => (L[k] ? L[k][isPt ? 0 : 1] : k)

const SANDS = ['ATK%', 'HP%', 'DEF%', 'Energy Recharge', 'Elemental Mastery']
const GOBLET = ['HP%', 'ATK%', 'DEF%', 'Elemental DMG', 'Physical DMG', 'Elemental Mastery']
const CIRCLET = ['CRIT Rate', 'CRIT DMG', 'HP%', 'ATK%', 'DEF%', 'Healing Bonus', 'Elemental Mastery']
const SUBS = ['CRIT Rate', 'CRIT DMG', 'ATK%', 'Elemental Mastery', 'Energy Recharge', 'HP%', 'DEF%', 'Flat ATK']

function StatSelect({ id, name, value, list, onChange }: { id: string; name: string; value: string; list: string[]; onChange: (v: string) => void }) {
  return (
    <label className="mat__field" htmlFor={id}>
      <span>{name}</span>
      <select id={id} className="tool-input" value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">—</option>
        {list.map((k) => (
          <option key={k} value={k}>{label(k)}</option>
        ))}
      </select>
    </label>
  )
}

// Build montada pela própria pessoa para este personagem; fica salva no aparelho.
export default function MyBuild({ charId, weaponType }: { charId: string; weaponType: string }) {
  const [store, setStore] = useState<Store>(loadAll)
  const [weapons, setWeapons] = useState<ItemEntry[]>([])
  const [sets, setSets] = useState<ItemEntry[]>([])
  const [picking, setPicking] = useState<'weapon' | 'set' | null>(null)
  const d = store[charId] ?? EMPTY

  useEffect(() => {
    let active = true
    getAllItems('weapons').then((l) => active && setWeapons(l)).catch(() => {})
    getAllItems('artifacts').then((l) => active && setSets(l)).catch(() => {})
    return () => {
      active = false
    }
  }, [])

  const update = (patch: Partial<Data>) =>
    setStore((s) => {
      const next = { ...s, [charId]: { ...(s[charId] ?? EMPTY), ...patch } }
      saveAll(next)
      return next
    })
  const clear = () => {
    if (!window.confirm(t('myBuildClearAsk'))) return
    setStore((s) => {
      const next = { ...s }
      delete next[charId]
      saveAll(next)
      return next
    })
  }

  const weapon = weapons.find((w) => w.name === d.weapon)
  const setEntries = d.sets.map((n) => sets.find((s) => s.name === n)).filter((e): e is ItemEntry => Boolean(e))
  const stars = (v: string) => `${v}★`

  const options = useMemo<PickOption[]>(() => {
    if (picking === 'weapon') {
      return weapons
        .filter((w) => w.info.typeKey === weaponType)
        .sort((a, b) => b.info.rarity - a.info.rarity || a.label.localeCompare(b.label))
        .map((w) => ({ key: w.name, label: w.label, search: w.name, sub: `${w.info.rarity}★${w.info.stat ? ` · ${w.info.stat}` : ''}`, thumb: w.info.urls, facets: { rarity: String(w.info.rarity) } }))
    }
    return sets
      .filter((s) => !d.sets.includes(s.name))
      .sort((a, b) => b.info.rarity - a.info.rarity || a.label.localeCompare(b.label))
      .map((s) => ({ key: s.name, label: s.label, search: s.name, sub: `${s.info.rarity}★`, thumb: s.info.urls, facets: { rarity: String(s.info.rarity) } }))
  }, [picking, weapons, sets, weaponType, d.sets])

  const rarities = [...new Set(options.map((o) => o.facets?.rarity).filter((v): v is string => Boolean(v)))].sort((a, b) => Number(b) - Number(a))
  const filters: PickFilter[] = [{ id: 'rarity', label: t('filterRarity'), values: rarities.map((v) => ({ value: v, label: stars(v) })) }]

  const toggleSub = (k: string) => update({ subs: d.subs.includes(k) ? d.subs.filter((x) => x !== k) : [...d.subs, k] })

  return (
    <section className="mine">
      <div className="mine__head">
        <h2 className="section-title">{t('myBuild')}</h2>
        <button className="tool-btn tool-btn--ghost" onClick={clear} disabled={!store[charId]}>{t('myBuildClear')}</button>
      </div>
      <p className="tool__muted">{t('myBuildHint')}</p>

      <div className="mine__row">
        <Thumb src={weapon?.info.urls ?? []} label={weapon?.label ?? '?'} />
        <div>
          <small>{t('weapons')}</small>
          <strong>{weapon ? weapon.label : d.weapon || '—'}</strong>
        </div>
        <button className="tool-btn" onClick={() => setPicking('weapon')}>{d.weapon ? t('swap') : t('pickWeapon')}</button>
      </div>

      <div className="mine__sets">
        <small>{t('artifacts')}</small>
        {setEntries.map((s) => (
          <div className="mine__row" key={s.name}>
            <Thumb src={s.info.urls} label={s.label} />
            <div><strong>{s.label}</strong></div>
            <button className="tool-btn tool-btn--ghost" onClick={() => update({ sets: d.sets.filter((n) => n !== s.name) })}>{t('remove')}</button>
          </div>
        ))}
        {d.sets.length < 2 && <button className="tool-btn" onClick={() => setPicking('set')}>{t('myBuildAddSet')}</button>}
      </div>

      <div className="mat__grid">
        <StatSelect id="mb-sands" name={t('slotSands')} value={d.sands} list={SANDS} onChange={(v) => update({ sands: v })} />
        <StatSelect id="mb-goblet" name={t('slotGoblet')} value={d.goblet} list={GOBLET} onChange={(v) => update({ goblet: v })} />
        <StatSelect id="mb-circlet" name={t('slotCirclet')} value={d.circlet} list={CIRCLET} onChange={(v) => update({ circlet: v })} />
      </div>

      <small className="mine__label">{t('myBuildSubs')}</small>
      <div className="chips mine__chips" role="group" aria-label={t('myBuildSubs')}>
        {SUBS.map((k) => {
          const pos = d.subs.indexOf(k)
          return (
            <button key={k} className="pill" aria-pressed={pos >= 0} onClick={() => toggleSub(k)}>
              {pos >= 0 ? `${pos + 1}º ` : ''}{label(k)}
            </button>
          )
        })}
      </div>

      <label className="mat__field" htmlFor="mb-note">
        <span>{t('myBuildNote')}</span>
        <textarea id="mb-note" className="tool-input mine__note" rows={3} maxLength={300} value={d.note} onChange={(e) => update({ note: e.target.value })} />
      </label>

      {picking && (
        <Picker
          title={picking === 'weapon' ? t('pickWeapon') : t('myBuildPickSet')}
          options={options}
          filters={filters}
          onClose={() => setPicking(null)}
          onPick={(key) => {
            if (picking === 'weapon') update({ weapon: key })
            else update({ sets: [...d.sets, key].slice(0, 2) })
            setPicking(null)
          }}
        />
      )}
    </section>
  )
}
