import { useEffect, useMemo, useState } from 'react'
import type { CSSProperties } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { getAllCharacters, iconChain } from './api'
import { resonancesFor } from './data/resonances'
import ErrorMsg from './ErrorMsg'
import { t } from './i18n'
import MenuButton from './MenuButton'
import PcNav from './PcNav'
import Picker from './Picker'
import { shareLink } from './share'
import TabBar from './TabBar'
import { Thumb } from './Thumb'
import type { CharacterSummary } from './types'
import { VISION_COLORS } from './visionColors'
import './tools.css'

interface SavedTeam {
  id: string
  name: string
  members: string[]
}

const KEY = 'genshinworld:teams'
const SIZE = 4

function loadTeams(): SavedTeam[] {
  try {
    const raw = localStorage.getItem(KEY)
    const v: unknown = raw ? JSON.parse(raw) : []
    return Array.isArray(v)
      ? v.filter((x): x is SavedTeam => !!x && typeof x.id === 'string' && typeof x.name === 'string' && Array.isArray(x.members))
      : []
  } catch {
    return []
  }
}

function saveTeams(list: SavedTeam[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(list))
  } catch {
    // sem armazenamento: as equipes valem só até fechar a página
  }
}

// Monta uma equipe de até 4 personagens, mostra a ressonância e guarda no aparelho.
// A equipe atual fica na URL (?m=id1,id2,...), então o link já é compartilhável.
export default function TeamsPage() {
  const [params, setParams] = useSearchParams()
  const members = (params.get('m') ?? '').split(',').filter(Boolean).slice(0, SIZE)
  const [name, setName] = useState(params.get('n') ?? '')
  const [chars, setChars] = useState<CharacterSummary[]>([])
  const [error, setError] = useState(false)
  const [picking, setPicking] = useState<number | null>(null)
  const [saved, setSaved] = useState<SavedTeam[]>(loadTeams)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    let active = true
    getAllCharacters().then((l) => active && setChars(l)).catch(() => active && setError(true))
    return () => {
      active = false
    }
  }, [])

  const byId = useMemo(() => new Map(chars.map((c) => [c.id, c])), [chars])
  const team = members.map((id) => byId.get(id)).filter((c): c is CharacterSummary => Boolean(c))

  const setMembers = (next: string[], nextName = name) => {
    const p = new URLSearchParams()
    if (next.length) p.set('m', next.join(','))
    if (nextName) p.set('n', nextName)
    setParams(p, { replace: true })
  }

  const pickFor = (index: number, id: string) => {
    const next = [...members]
    next[index] = id
    setMembers(next.filter(Boolean))
    setPicking(null)
  }
  const removeAt = (index: number) => setMembers(members.filter((_, i) => i !== index))

  const options = chars
    .filter((c) => !members.includes(c.id))
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((c) => ({ key: c.id, label: c.name, search: c.enName, sub: `${c.vision} · ${c.rarity}★`, thumb: iconChain(c), round: true }))

  const resonances = resonancesFor(team.map((c) => c.vision))
  const counts = new Map<string, number>()
  for (const c of team) counts.set(c.vision, (counts.get(c.vision) ?? 0) + 1)

  const save = () => {
    if (members.length === 0) return
    const entry: SavedTeam = { id: String(Math.max(0, ...saved.map((s) => Number(s.id) || 0)) + 1), name: name.trim() || t('teamDefault'), members }
    const next = [entry, ...saved]
    setSaved(next)
    saveTeams(next)
  }
  const remove = (id: string) => {
    const next = saved.filter((s) => s.id !== id)
    setSaved(next)
    saveTeams(next)
  }
  const share = async () => {
    const r = await shareLink(name || 'Genshin World', window.location.href)
    if (r === 'copied') {
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    }
  }

  return (
    <>
      <PcNav active={null} />
      <main className="screen home tool">
        <header className="home-top">
          <div>
            <h1 className="home-title">Genshin World</h1>
            <span className="home-cap">{t('capTeams')}</span>
          </div>
          <MenuButton />
        </header>

        <div className="tool__body">
          <h1 className="tool__title">{t('teamBuilder')}</h1>
          {error && <ErrorMsg text={t('loadCharsFail')} />}

          <div className="team__slots">
            {Array.from({ length: SIZE }, (_, i) => {
              const c = byId.get(members[i] ?? '')
              return (
                <div
                  className={c ? 'team__slot is-filled' : 'team__slot'}
                  key={i}
                  style={{ '--tone': c ? (VISION_COLORS[c.vision] ?? '#d3bc8e') : 'var(--line)' } as CSSProperties}
                >
                  {c ? (
                    <>
                      <Link to={`/character/${c.id}`} className="team__who" aria-label={t('open', { n: c.name })}>
                        <Thumb round src={iconChain(c)} label={c.name} />
                        <strong>{c.name}</strong>
                        <small>{c.vision}</small>
                      </Link>
                      <div className="cmp__slot-actions">
                        <button className="tool-btn" onClick={() => setPicking(i)}>{t('swap')}</button>
                        <button className="tool-btn tool-btn--ghost" onClick={() => removeAt(i)}>{t('remove')}</button>
                      </div>
                    </>
                  ) : (
                    <button className="team__add" onClick={() => setPicking(members.length)} aria-label={t('teamSlot', { n: i + 1 })}>
                      <span className="thumb thumb--empty" aria-hidden="true">+</span>
                      <strong>{t('teamSlot', { n: i + 1 })}</strong>
                      <small>{t('pickChar')}</small>
                    </button>
                  )}
                </div>
              )
            })}
          </div>

          <section className="team__synergy" aria-live="polite">
            <h2>{t('teamSynergy')}</h2>
            {team.length === 0 ? (
              <p className="tool__muted">{t('teamEmpty')}</p>
            ) : (
              <>
                <div className="team__elements">
                  {[...counts].map(([el, n]) => (
                    <span className="pill pill--el" key={el} aria-pressed="true" style={{ '--tone': VISION_COLORS[el] } as CSSProperties}>
                      <span className="pill__dot" style={{ '--dot': VISION_COLORS[el] } as CSSProperties} />
                      {el} × {n}
                    </span>
                  ))}
                </div>
                {resonances.length === 0 ? (
                  <p className="tool__muted">{t('resonanceNone')}</p>
                ) : (
                  <ul className="team__res">
                    {resonances.map((r) => (
                      <li key={r.key} style={{ '--tone': r.element ? VISION_COLORS[r.element] : 'var(--gold)' } as CSSProperties}>
                        <strong>{r.name}</strong>
                        <span>{r.effect}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </section>

          <div className="team__actions">
            <input
              id="team-name"
              className="tool-input"
              aria-label={t('teamName')}
              placeholder={t('teamName')}
              value={name}
              maxLength={40}
              onChange={(e) => {
                setName(e.target.value)
                setMembers(members, e.target.value)
              }}
            />
            <button className="tool-btn" onClick={save} disabled={members.length === 0}>{t('teamSave')}</button>
            <button className="tool-btn" onClick={share} disabled={members.length === 0}>{copied ? t('linkCopied') : t('shareLink')}</button>
            <button className="tool-btn tool-btn--ghost" onClick={() => { setName(''); setMembers([], '') }} disabled={members.length === 0}>{t('teamClear')}</button>
          </div>

          <section className="team__saved">
            <h2>{t('teamSaved')}</h2>
            {saved.length === 0 && <p className="tool__muted">{t('teamNone')}</p>}
            {saved.map((s) => (
              <div className="team__saved-item" key={s.id}>
                <div className="team__saved-icons">
                  {s.members.map((id) => {
                    const c = byId.get(id)
                    return c ? <Thumb key={id} round src={iconChain(c)} label={c.name} /> : null
                  })}
                </div>
                <strong>{s.name}</strong>
                <div className="cmp__slot-actions">
                  <button
                    className="tool-btn"
                    onClick={() => {
                      setName(s.name)
                      setMembers(s.members, s.name)
                    }}
                  >
                    {t('teamLoad')}
                  </button>
                  <button className="tool-btn tool-btn--ghost" onClick={() => remove(s.id)}>{t('teamDelete')}</button>
                </div>
              </div>
            ))}
          </section>
        </div>

        {picking !== null && (
          <Picker title={t('pickChar')} options={options} onClose={() => setPicking(null)} onPick={(id) => pickFor(picking, id)} />
        )}

        <TabBar active={null} query="" onQuery={() => {}} noSearch />
      </main>
    </>
  )
}
