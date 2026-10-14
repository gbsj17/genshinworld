import { useEffect, useMemo, useState } from 'react'
import { getAllItems, getDomains } from './api'
import type { Domain, ItemEntry } from './api'
import ErrorMsg from './ErrorMsg'
import { isPt, t } from './i18n'
import MenuButton from './MenuButton'
import PcNav from './PcNav'
import TabBar from './TabBar'
import { Thumb } from './Thumb'
import './tools.css'

// ordem de segunda a domingo
const WEEK = [1, 2, 3, 4, 5, 6, 0]
const dayName = (d: number, long = false) =>
  // 2024-01-07 foi um domingo
  new Date(2024, 0, 7 + d).toLocaleDateString(isPt ? 'pt-BR' : 'en-US', { weekday: long ? 'long' : 'short' })

// Quais domínios estão abertos em cada dia da semana (materiais de talento e de arma) e onde farmar artefatos.
export default function FarmPage() {
  const [domains, setDomains] = useState<Domain[] | null>(null)
  const [mats, setMats] = useState<ItemEntry[]>([])
  const [error, setError] = useState(false)
  const [today] = useState(() => new Date().getDay())
  const [day, setDay] = useState(today)

  useEffect(() => {
    let active = true
    getDomains().then((l) => active && setDomains(l)).catch(() => active && setError(true))
    getAllItems('materials').then((l) => active && setMats(l)).catch(() => {})
    return () => {
      active = false
    }
  }, [])

  const iconFor = (name: string) => mats.find((m) => m.label === name || m.name === name)?.info.urls ?? []

  const open = useMemo(
    () => (domains ?? []).filter((d) => d.kind !== 'artifact' && (day === 0 || d.days.includes(day))),
    [domains, day],
  )
  const artifacts = useMemo(() => (domains ?? []).filter((d) => d.kind === 'artifact'), [domains])

  const group = (kind: Domain['kind']) => open.filter((d) => d.kind === kind).sort((a, b) => a.name.localeCompare(b.name))

  const card = (d: Domain) => (
    <li key={d.id} className="farm__card">
      <div className="farm__head">
        <strong>{d.name}</strong>
        <small>{d.region}</small>
      </div>
      <ul className="farm__rewards">
        {d.rewards.map((r) => (
          <li key={r.name}>
            {d.kind !== 'artifact' && <Thumb src={iconFor(r.name)} label={r.name} />}
            <span>{r.name}</span>
          </li>
        ))}
      </ul>
    </li>
  )

  const section = (title: string, list: Domain[]) =>
    list.length > 0 && (
      <section className="farm__section">
        <h2>{title}</h2>
        <ul className="farm__grid">{list.map(card)}</ul>
      </section>
    )

  return (
    <>
      <PcNav active={null} />
      <main className="screen home tool">
        <header className="home-top">
          <div>
            <h1 className="home-title">Genshin World</h1>
            <span className="home-cap">{t('capFarm')}</span>
          </div>
          <MenuButton />
        </header>

        <div className="tool__body farm">
          <h1 className="tool__title">{t('farm')}</h1>
          <div className="chips farm__days" role="group" aria-label={t('farmSub')}>
            {WEEK.map((d) => (
              <button key={d} className="pill" aria-pressed={day === d} onClick={() => setDay(d)}>
                {d === today ? t('farmToday') : dayName(d)}
              </button>
            ))}
          </div>
          <p className="tool__muted farm__date">{dayName(day, true)}</p>

          {error && <ErrorMsg text={t('farmFail')} />}
          {!error && !domains && <p className="empty">{t('loading')}</p>}
          {day === 0 && domains && <p className="tool__muted">{t('farmSunday')}</p>}
          {section(t('farmTalent'), group('talent'))}
          {section(t('farmWeapon'), group('weapon'))}
          {section(t('farmArtifact'), artifacts)}
        </div>

        <TabBar active={null} query="" onQuery={() => {}} noSearch />
      </main>
    </>
  )
}
