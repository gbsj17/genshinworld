import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { getArtifactSet, getCosts, getDomains, getWeaponCosts, iconChain } from './api'
import type { Domain } from './api'
import { useFavorites } from './favorites'
import { artifactDomains, daysUntilOpen, domainFor } from './goals'
import { isPt, t } from './i18n'
import { ItemIcon, ItemName } from './ItemIcon'
import { Thumb } from './Thumb'
import type { CharacterSummary } from './types'
import { VISION_COLORS } from './visionColors'

const dayShort = (d: number) => new Date(2024, 0, 7 + d).toLocaleDateString(isPt ? 'pt-BR' : 'en-US', { weekday: 'short' })

interface Line {
  label: string
  domains: Domain[] // vazio = não achou o domínio
}

// Procura onde farmar o que a meta precisa. Retorna null enquanto carrega.
function useLines(kind: 'char' | 'weapon' | 'artifact', name: string, domains: Domain[] | null): Line[] | null {
  const [res, setRes] = useState<{ k: string; lines: Line[] } | null>(null)
  const k = `${kind}:${name}`
  useEffect(() => {
    if (!domains) return
    let active = true
    const done = (lines: Line[]) => active && setRes({ k, lines })
    if (kind === 'char') {
      getCosts(name)
        .then((c) => {
          const d = domainFor(domains, 'talent', c.talent.flat().map((i) => i.name))
          done([{ label: t('goalTalent'), domains: d ? [d] : [] }])
        })
        .catch(() => done([{ label: t('goalTalent'), domains: [] }]))
    } else if (kind === 'weapon') {
      getWeaponCosts(name)
        .then((c) => {
          const d = domainFor(domains, 'weapon', c.flat().map((i) => i.name))
          done([{ label: t('goalWeapon'), domains: d ? [d] : [] }])
        })
        .catch(() => done([{ label: t('goalWeapon'), domains: [] }]))
    } else {
      getArtifactSet(name)
        .then((s) => done([{ label: t('goalArtifact'), domains: artifactDomains(domains, s.name) }]))
        .catch(() => done([{ label: t('goalArtifact'), domains: [] }]))
    }
    return () => {
      active = false
    }
  }, [kind, name, domains, k])
  return res?.k === k ? res.lines : null
}

function When({ domain, today }: { domain: Domain; today: number }) {
  if (domain.days.length === 0) return <b className="goal__when">{t('goalEvery')}</b>
  const n = daysUntilOpen(domain.days, today)
  const text = n === 0 ? t('farmToday') : n === 1 ? t('goalTomorrow') : t('goalIn', { n })
  return (
    <b className={n === 0 ? 'goal__when goal__when--now' : 'goal__when'}>
      {text}
      {n > 0 && ` · ${dayShort((today + n) % 7)}`}
    </b>
  )
}

function Row({
  kind,
  name,
  label,
  to,
  icon,
  tone,
  domains,
  today,
  onRemove,
}: {
  kind: 'char' | 'weapon' | 'artifact'
  name: string // personagem: nome em inglês; arma e artefato: nome em inglês
  label: React.ReactNode
  to: string
  icon: React.ReactNode
  tone?: string
  domains: Domain[] | null
  today: number
  onRemove: () => void
}) {
  const lines = useLines(kind, name, domains)
  return (
    <li className="goal" style={tone ? ({ '--ring': tone } as CSSProperties) : undefined}>
      <Link to={to} className="goal__id">
        {icon}
        <strong>{label}</strong>
      </Link>
      <ul className="goal__lines">
        {!lines && <li className="tool__muted">{t('loading')}</li>}
        {lines?.map((l) =>
          l.domains.length === 0 ? (
            <li key={l.label}>
              <small>{l.label}</small>
              <span className="tool__muted">{t('goalNoDomain')}</span>
            </li>
          ) : (
            l.domains.map((d) => (
              <li key={`${l.label}${d.id}`}>
                <small>{l.label}</small>
                <span>{d.name}</span>
                <When domain={d} today={today} />
              </li>
            ))
          ),
        )}
      </ul>
      <button className="goal__x" aria-label={t('goalRemove')} title={t('goalRemove')} onClick={onRemove}>
        ×
      </button>
    </li>
  )
}

// Card da tela inicial: para cada meta "Evoluindo", em quantos dias abre o domínio do material.
export default function Goals({ chars }: { chars: CharacterSummary[] }) {
  const gc = useFavorites('goalchars')
  const gw = useFavorites('goalweapons')
  const ga = useFavorites('goalartifacts')
  const [domains, setDomains] = useState<Domain[] | null>(null)
  const [today] = useState(() => new Date().getDay())
  const has = gc.ids.length + gw.ids.length + ga.ids.length > 0

  useEffect(() => {
    if (!has) return
    let active = true
    getDomains().then((l) => active && setDomains(l)).catch(() => active && setDomains([]))
    return () => {
      active = false
    }
  }, [has])

  if (!has) return null
  return (
    <section className="news-sec goals">
      <div className="news-head">
        <h2 className="news-title">{t('goalTitle')}</h2>
      </div>
      <ul className="goals__list">
        {gc.ids.map((id) => {
          const c = chars.find((x) => x.id === id)
          if (!c) return null
          return (
            <Row
              key={`c${id}`}
              kind="char"
              name={c.enName}
              label={c.name}
              to={`/character/${c.id}`}
              icon={<Thumb round src={iconChain(c)} label={c.name} />}
              tone={VISION_COLORS[c.vision]}
              domains={domains}
              today={today}
              onRemove={() => gc.toggle(id)}
            />
          )
        })}
        {gw.ids.map((n) => (
          <Row
            key={`w${n}`}
            kind="weapon"
            name={n}
            label={<ItemName kind="weapon" name={n} />}
            to={`/weapon/${encodeURIComponent(n)}`}
            icon={<ItemIcon kind="weapon" name={n} />}
            domains={domains}
            today={today}
            onRemove={() => gw.toggle(n)}
          />
        ))}
        {ga.ids.map((n) => (
          <Row
            key={`a${n}`}
            kind="artifact"
            name={n}
            label={<ItemName kind="artifact" name={n} />}
            to={`/artifact/${encodeURIComponent(n)}`}
            icon={<ItemIcon kind="artifact" name={n} />}
            domains={domains}
            today={today}
            onRemove={() => ga.toggle(n)}
          />
        ))}
      </ul>
      <p className="tool__muted goals__note">{t('goalNote')}</p>
    </section>
  )
}
