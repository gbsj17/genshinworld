import { useEffect, useMemo, useState } from 'react'
import type { CSSProperties } from 'react'
import { getAllCharacters, getAllItems, iconChain } from './api'
import { fetchEnka, matchEnka, parseEnka, resolveBuild, validUid } from './enka'
import type { EnkaError } from './enka'
import ErrorMsg from './ErrorMsg'
import { t } from './i18n'
import { addMissingBuilds } from './myBuildStore'
import type { MyBuildData } from './myBuildStore'
import { useOwned } from './owned'
import { useOwnedWeapons } from './ownedWeapons'
import type { OwnedInfo } from './owned'
import { Thumb } from './Thumb'
import type { CharacterSummary } from './types'
import { VISION_COLORS } from './visionColors'

const normalize = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()

type Scope = 'all' | 'yes' | 'no'

// Importação pelo UID (Enka): mostra o que achou e só grava quando a pessoa confirma.
export function EnkaImport({ chars }: { chars: CharacterSummary[] | null }) {
  const own = useOwned()
  const ownW = useOwnedWeapons()
  const [builds, setBuilds] = useState<number | null>(null)
  const [uid, setUid] = useState('')
  const [phase, setPhase] = useState<'idle' | 'wait'>('idle')
  const [error, setError] = useState<EnkaError | 'empty' | null>(null)
  const [result, setResult] = useState<ReturnType<typeof matchEnka> | null>(null)
  const [done, setDone] = useState<number | null>(null)

  const search = async () => {
    if (!chars) return
    setError(null)
    setResult(null)
    setDone(null)
    setBuilds(null)
    if (!validUid(uid)) {
      setError('bad-uid')
      return
    }
    setPhase('wait')
    const r = await fetchEnka(uid)
    setPhase('idle')
    if (!r.ok) {
      setError(r.error)
      return
    }
    const m = matchEnka(parseEnka(r.data), chars)
    if (m.found.length === 0) setError('empty')
    else setResult(m)
  }

  const apply = async () => {
    if (!result) return
    const found = result.found
    own.merge(found.map((f) => ({ id: f.char.id, c: f.c, lv: f.level })))
    setDone(found.length)
    setResult(null)
    // equipamento: marca as armas como suas e preenche a "Minha build" de quem ainda não tem
    if (found.some((f) => f.build)) {
      try {
        const [weapons, sets] = await Promise.all([getAllItems('weapons'), getAllItems('artifacts')])
        const items: Record<string, MyBuildData> = {}
        const ws: { name: string; r: number | null; lv: number | null }[] = []
        for (const f of found) {
          if (!f.build) continue
          const r = resolveBuild(f.build, weapons, sets)
          if (r.weapon) ws.push(r.weapon)
          if (r.build.weapon || r.build.sets.length || r.build.sands || r.build.subs.length) items[f.char.id] = r.build
        }
        ownW.merge(ws)
        setBuilds(addMissingBuilds(items))
      } catch {
        // sem a lista de armas e artefatos: ficam só os personagens
      }
    }
  }

  const errText: Record<EnkaError | 'empty', string> = {
    'bad-uid': t('ownEnkaBad'),
    'not-found': t('ownEnkaNotFound'),
    busy: t('ownEnkaBusy'),
    fail: t('ownEnkaFail'),
    empty: t('ownEnkaEmpty'),
  }

  return (
    <div className="own__enka">
      <p className="tool__muted">{t('ownEnkaHint')}</p>
      <form
        className="own__uid"
        onSubmit={(e) => {
          e.preventDefault()
          void search()
        }}
      >
        <input
          className="own__input"
          inputMode="numeric"
          autoComplete="off"
          maxLength={10}
          placeholder={t('ownEnkaUid')}
          aria-label={t('ownEnkaUid')}
          value={uid}
          onChange={(e) => setUid(e.target.value.replace(/\D/g, ''))}
        />
        <button className="tool-btn" type="submit" disabled={phase === 'wait' || !chars}>
          {phase === 'wait' ? t('ownEnkaWait') : t('ownEnkaGo')}
        </button>
      </form>
      {error && (
        <p className="data__msg data__msg--bad" role="alert">
          {errText[error]}
        </p>
      )}
      {result && (
        <div className="own__found">
          <p>{t('ownEnkaFound', { list: result.found.map((f) => f.char.name).join(', ') })}</p>
          {result.skipped > 0 && <p className="tool__muted">{t('ownEnkaSkipped', { n: result.skipped })}</p>}
          <button className="tool-btn" onClick={() => void apply()}>
            {t('ownEnkaApply')}
          </button>
        </div>
      )}
      {done !== null && (
        <p className="data__msg" role="status">
          {t('ownEnkaDone', { n: done })}
          {builds ? ` ${t('ownEnkaBuilds', { n: builds })}` : ''}
        </p>
      )}
    </div>
  )
}

// Importar pelo UID sozinho (janela da Minha área): busca a lista de personagens e abre o importador.
export function UidImport() {
  const [chars, setChars] = useState<CharacterSummary[] | null>(null)
  useEffect(() => {
    let active = true
    getAllCharacters().then((l) => active && setChars(l)).catch(() => undefined)
    return () => {
      active = false
    }
  }, [])
  return <EnkaImport chars={chars} />
}

function Row({ c, info, onToggle, onChange }: { c: CharacterSummary; info?: OwnedInfo; onToggle: () => void; onChange: (p: Partial<OwnedInfo>) => void }) {
  return (
    <li className="own__row" style={{ '--ring': VISION_COLORS[c.vision] ?? '#d3bc8e' } as CSSProperties}>
      <div className="own__id">
        <Thumb round src={iconChain(c)} label={c.name} />
        <span className="own__name">
          <strong>{c.name}</strong>
          <small>
            {'★'.repeat(c.rarity)} · {c.vision}
          </small>
        </span>
        <button className="own__have" aria-pressed={Boolean(info)} onClick={onToggle}>
          {info ? `✓ ${t('ownYes')}` : t('ownYes')}
        </button>
      </div>
      {info && (
        <div className="own__edit">
          <div className="own__step" role="group" aria-label={t('ownConsOf', { n: c.name })}>
            <button aria-label={t('ownLess')} disabled={info.c <= 0} onClick={() => onChange({ c: info.c - 1 })}>
              −
            </button>
            <span>
              {t('ownCons')} <b>C{info.c}</b>
            </span>
            <button aria-label={t('ownMore')} disabled={info.c >= 6} onClick={() => onChange({ c: info.c + 1 })}>
              +
            </button>
          </div>
          <label className="own__lv">
            {t('ownLevel')}
            <input
              key={info.lv}
              type="number"
              inputMode="numeric"
              min={1}
              max={90}
              defaultValue={info.lv}
              aria-label={t('ownLevelOf', { n: c.name })}
              onBlur={(e) => onChange({ lv: Number(e.target.value) })}
              onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.blur()}
            />
          </label>
        </div>
      )}
    </li>
  )
}

// Janela "Adicionar personagem" da Minha área: quais a pessoa tem, com constelação e nível.
export default function OwnedPanel() {
  const own = useOwned()
  const [chars, setChars] = useState<CharacterSummary[] | null>(null)
  const [fail, setFail] = useState(false)
  const [query, setQuery] = useState('')
  const [scope, setScope] = useState<Scope>('all')

  useEffect(() => {
    let active = true
    getAllCharacters()
      .then((l) => active && setChars([...l].sort((a, b) => a.name.localeCompare(b.name))))
      .catch(() => active && setFail(true))
    return () => {
      active = false
    }
  }, [])

  const list = useMemo(() => {
    const q = normalize(query.trim())
    return (chars ?? []).filter(
      (c) =>
        (scope === 'all' || (scope === 'yes') === own.has(c.id)) && normalize(`${c.name} ${c.enName}`).includes(q),
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chars, query, scope, own.owned])

  const have = (chars ?? []).filter((c) => own.has(c.id)).length

  return (
    <section className="own">
      <p className="tool__muted">{t('ownIntro')}</p>

      {fail && <ErrorMsg text={t('loadCharsFail')} />}
      {!fail && !chars && <p className="empty">{t('loading')}</p>}

      {chars && (
        <>
          <div className="own__tools">
            <input
              className="own__input"
              type="search"
              placeholder={t('ownSearch')}
              aria-label={t('ownSearch')}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="seg" role="tablist" aria-label={t('ownTitle')}>
              {(['all', 'yes', 'no'] as const).map((k) => (
                <button key={k} role="tab" aria-selected={scope === k} onClick={() => setScope(k)}>
                  {k === 'all' ? t('ownAll') : k === 'yes' ? t('ownYes') : t('ownNo')}
                </button>
              ))}
            </div>
          </div>
          <p className="tool__muted" role="status" aria-live="polite">
            {t('ownCount', { n: have, total: chars.length })}
          </p>
          {list.length === 0 ? (
            <p className="empty">{t('ownNone')}</p>
          ) : (
            <ul className="own__list">
              {list.map((c) => (
                <Row key={c.id} c={c} info={own.owned[c.id]} onToggle={() => own.toggle(c.id)} onChange={(p) => own.update(c.id, p)} />
              ))}
            </ul>
          )}
        </>
      )}
    </section>
  )
}
