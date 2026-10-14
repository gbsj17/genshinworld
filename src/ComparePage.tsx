import { useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getAllCharacters, getAllItems, getDetails, iconChain } from './api'
import type { Details, ItemEntry } from './api'
import { BUILDS } from './data/builds'
import ErrorMsg from './ErrorMsg'
import { t, weaponLabel } from './i18n'
import { ItemName } from './ItemIcon'
import MenuButton from './MenuButton'
import PcNav from './PcNav'
import Picker from './Picker'
import type { PickOption } from './Picker'
import { shareLink } from './share'
import TabBar from './TabBar'
import { Thumb } from './Thumb'
import type { CharacterSummary } from './types'
import './tools.css'

type Kind = 'characters' | 'weapons'
type Slot = 'a' | 'b'

interface Row {
  label: string
  a: ReactNode
  b: ReactNode
  // número usado para destacar o maior valor
  na?: number
  nb?: number
}

const num = (v?: string) => {
  const n = parseFloat((v ?? '').replace(',', '.'))
  return Number.isFinite(n) ? n : undefined
}

// Compara dois personagens ou duas armas lado a lado. O estado fica na URL (dá para compartilhar).
export default function ComparePage() {
  const [params, setParams] = useSearchParams()
  const kind: Kind = params.get('k') === 'weapons' ? 'weapons' : 'characters'
  const keyA = params.get('a') ?? ''
  const keyB = params.get('b') ?? ''

  const [chars, setChars] = useState<CharacterSummary[]>([])
  const [weapons, setWeapons] = useState<ItemEntry[]>([])
  const [error, setError] = useState(false)
  const [picking, setPicking] = useState<Slot | null>(null)
  const [details, setDetails] = useState<Record<string, Details | null>>({})
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    let active = true
    getAllCharacters().then((l) => active && setChars(l)).catch(() => active && setError(true))
    getAllItems('weapons').then((l) => active && setWeapons(l)).catch(() => {})
    return () => {
      active = false
    }
  }, [])

  const update = (patch: Record<string, string | null>) => {
    const next = new URLSearchParams(params)
    for (const [k, v] of Object.entries(patch)) {
      if (v) next.set(k, v)
      else next.delete(k)
    }
    setParams(next, { replace: true })
  }

  const charA = chars.find((c) => c.id === keyA)
  const charB = chars.find((c) => c.id === keyB)
  const wpnA = weapons.find((w) => w.name === keyA)
  const wpnB = weapons.find((w) => w.name === keyB)

  // talentos dos personagens escolhidos
  useEffect(() => {
    if (kind !== 'characters') return
    let active = true
    for (const c of [charA, charB]) {
      if (!c || c.id in details) continue
      getDetails(c.enName)
        .then((d) => active && setDetails((m) => ({ ...m, [c.id]: d })))
        .catch(() => active && setDetails((m) => ({ ...m, [c.id]: null })))
    }
    return () => {
      active = false
    }
  }, [kind, charA, charB, details])

  const options = useMemo<PickOption[]>(
    () =>
      kind === 'characters'
        ? [...chars]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((c) => ({ key: c.id, label: c.name, search: c.enName, sub: `${c.vision} · ${c.rarity}★`, thumb: iconChain(c), round: true }))
        : [...weapons]
            .sort((a, b) => b.info.rarity - a.info.rarity || a.label.localeCompare(b.label))
            .map((w) => ({ key: w.name, label: w.label, search: w.name, sub: `${w.info.type ?? ''} · ${w.info.rarity}★`, thumb: w.info.urls })),
    [kind, chars, weapons],
  )

  const rows = useMemo<Row[]>(() => {
    if (kind === 'characters') {
      const talent = (c: CharacterSummary | undefined, i: number) => {
        if (!c) return '—'
        const d = details[c.id]
        if (d === undefined) return t('loading')
        return d?.skillTalents[i]?.name ?? '—'
      }
      const best = (c: CharacterSummary | undefined) => {
        const n = c ? BUILDS[c.id]?.weapons[0]?.name : undefined
        return n ? <ItemName kind="weapon" name={n} /> : '—'
      }
      return [
        { label: t('rowElement'), a: charA?.vision ?? '—', b: charB?.vision ?? '—' },
        { label: t('rowWeaponType'), a: charA ? weaponLabel(charA.weapon) : '—', b: charB ? weaponLabel(charB.weapon) : '—' },
        { label: t('rowNation'), a: charA?.nation || '—', b: charB?.nation || '—' },
        { label: t('rowRarity'), a: charA ? `${charA.rarity}★` : '—', b: charB ? `${charB.rarity}★` : '—', na: charA?.rarity, nb: charB?.rarity },
        { label: t('rowVersion'), a: charA?.version ?? '—', b: charB?.version ?? '—' },
        { label: t('rowBestWeapon'), a: best(charA), b: best(charB) },
        { label: t('rowNormal'), a: talent(charA, 0), b: talent(charB, 0) },
        { label: t('rowSkill'), a: talent(charA, 1), b: talent(charB, 1) },
        { label: t('rowBurst'), a: talent(charA, 2), b: talent(charB, 2) },
      ]
    }
    const f = (v?: string) => v || '—'
    const eff = (w?: ItemEntry) => (w ? (w.info.effectName ? `${w.info.effectName}: ${w.info.effect ?? ''}` : (w.info.effect ?? '—')) : '—')
    return [
      { label: t('rowType'), a: f(wpnA?.info.type), b: f(wpnB?.info.type) },
      { label: t('rowRarity'), a: wpnA ? `${wpnA.info.rarity}★` : '—', b: wpnB ? `${wpnB.info.rarity}★` : '—', na: wpnA?.info.rarity, nb: wpnB?.info.rarity },
      { label: t('rowBaseAtk'), a: f(wpnA?.info.baseAtk), b: f(wpnB?.info.baseAtk), na: num(wpnA?.info.baseAtk), nb: num(wpnB?.info.baseAtk) },
      { label: t('rowSubStat'), a: f(wpnA?.info.stat), b: f(wpnB?.info.stat) },
      { label: t('rowVersion'), a: f(wpnA?.info.version), b: f(wpnB?.info.version) },
      { label: t('rowEffect'), a: eff(wpnA), b: eff(wpnB) },
    ]
  }, [kind, charA, charB, wpnA, wpnB, details])

  const share = async () => {
    const r = await shareLink('Genshin World', window.location.href)
    if (r === 'copied') {
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    }
  }

  const slot = (which: Slot) => {
    const c = which === 'a' ? charA : charB
    const w = which === 'a' ? wpnA : wpnB
    const has = kind === 'characters' ? c : w
    const name = kind === 'characters' ? c?.name : w?.label
    const sub = kind === 'characters' ? (c ? `${c.vision} · ${c.rarity}★` : '') : w ? `${w.info.type ?? ''} · ${w.info.rarity}★` : ''
    const thumb = kind === 'characters' ? (c ? iconChain(c) : []) : (w?.info.urls ?? [])
    return (
      <div className="cmp__slot">
        {has ? (
          <>
            <Thumb round={kind === 'characters'} src={thumb} label={name ?? ''} />
            <strong>{name}</strong>
            <small>{sub}</small>
          </>
        ) : (
          <>
            <div className="thumb thumb--empty cmp__plus" aria-hidden="true">+</div>
            <strong>{t('pickEmpty')}</strong>
          </>
        )}
        <div className="cmp__slot-actions">
          <button className="tool-btn" onClick={() => setPicking(which)}>
            {has ? t('swap') : kind === 'characters' ? t('pickChar') : t('pickWeapon')}
          </button>
          {has && (
            <button className="tool-btn tool-btn--ghost" onClick={() => update({ [which]: null })}>
              {t('remove')}
            </button>
          )}
        </div>
      </div>
    )
  }

  return (
    <>
      <PcNav active={null} />
      <main className="screen home tool">
        <header className="home-top">
          <div>
            <h1 className="home-title">Genshin World</h1>
            <span className="home-cap">{t('capCompare')}</span>
          </div>
          <MenuButton />
        </header>

        <div className="tool__body">
          <h1 className="tool__title">{t('compare')}</h1>
          <div className="tool__bar">
            <div className="tool__pills" role="group" aria-label={t('compare')}>
              <button className="pill" aria-pressed={kind === 'characters'} onClick={() => update({ k: null, a: null, b: null })}>
                {t('characters')}
              </button>
              <button className="pill" aria-pressed={kind === 'weapons'} onClick={() => update({ k: 'weapons', a: null, b: null })}>
                {t('weapons')}
              </button>
            </div>
            <button className="tool-btn" onClick={share} disabled={!keyA && !keyB}>
              {copied ? t('linkCopied') : t('shareLink')}
            </button>
          </div>

          {error && <ErrorMsg text={t('loadCharsFail')} />}

          <div className="cmp">
            <div className="cmp__head">
              <span />
              {slot('a')}
              {slot('b')}
            </div>
            {rows.map((r) => (
              <div className="cmp__row" key={r.label}>
                <span className="cmp__label">{r.label}</span>
                <span className={r.na !== undefined && r.nb !== undefined && r.na > r.nb ? 'cmp__cell is-win' : 'cmp__cell'}>{r.a}</span>
                <span className={r.na !== undefined && r.nb !== undefined && r.nb > r.na ? 'cmp__cell is-win' : 'cmp__cell'}>{r.b}</span>
              </div>
            ))}
          </div>
        </div>

        {picking && (
          <Picker
            title={kind === 'characters' ? t('pickChar') : t('pickWeapon')}
            options={options}
            onClose={() => setPicking(null)}
            onPick={(key) => {
              update({ [picking]: key, ...(kind === 'weapons' ? { k: 'weapons' } : {}) })
              setPicking(null)
            }}
          />
        )}

        <TabBar active={null} query="" onQuery={() => {}} noSearch />
      </main>
    </>
  )
}
