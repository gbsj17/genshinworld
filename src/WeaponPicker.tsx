import { useEffect, useMemo, useState } from 'react'
import type { CSSProperties } from 'react'
import { getAllItems } from './api'
import type { ItemEntry } from './api'
import ErrorMsg from './ErrorMsg'
import { t } from './i18n'
import { ItemIcon } from './ItemIcon'
import { useOwnedWeapons } from './ownedWeapons'
import type { OwnedWeapon } from './ownedWeapons'

type Scope = 'all' | 'yes' | 'no'
const RARITY_COLORS: Record<number, string> = { 5: '#f0b232', 4: '#b58cf2', 3: '#4cc2f1', 2: '#74c2a8', 1: '#aab1c8' }

const normalize = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()

function Row({ w, info, onToggle, onChange }: { w: ItemEntry; info?: OwnedWeapon; onToggle: () => void; onChange: (p: Partial<OwnedWeapon>) => void }) {
  return (
    <li className="own__row" style={{ '--ring': RARITY_COLORS[w.info.rarity] ?? '#d3bc8e' } as CSSProperties}>
      <div className="own__id">
        <ItemIcon kind="weapon" name={w.name} />
        <span className="own__name">
          <strong>{w.label}</strong>
          <small>
            {'★'.repeat(w.info.rarity)}
            {w.info.type ? ` · ${w.info.type}` : ''}
          </small>
        </span>
        <button className="own__have" aria-pressed={Boolean(info)} onClick={onToggle}>
          {info ? `✓ ${t('ownYes')}` : t('ownYes')}
        </button>
      </div>
      {info && (
        <div className="own__edit">
          <div className="own__step" role="group" aria-label={t('ownRefineOf', { n: w.label })}>
            <button aria-label={t('ownLess')} disabled={info.r <= 1} onClick={() => onChange({ r: info.r - 1 })}>
              −
            </button>
            <span>
              {t('ownRefine')} <b>R{info.r}</b>
            </span>
            <button aria-label={t('ownMore')} disabled={info.r >= 5} onClick={() => onChange({ r: info.r + 1 })}>
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
              aria-label={t('ownLevelOf', { n: w.label })}
              onBlur={(e) => onChange({ lv: Number(e.target.value) })}
              onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.blur()}
            />
          </label>
        </div>
      )}
    </li>
  )
}

// Janela "Adicionar arma": marca as armas que a pessoa tem, com refinamento e nível.
export default function WeaponPicker() {
  const own = useOwnedWeapons()
  const [items, setItems] = useState<ItemEntry[] | null>(null)
  const [fail, setFail] = useState(false)
  const [query, setQuery] = useState('')
  const [scope, setScope] = useState<Scope>('all')

  useEffect(() => {
    let active = true
    getAllItems('weapons')
      .then((l) => active && setItems([...l].sort((a, b) => b.info.rarity - a.info.rarity || a.label.localeCompare(b.label))))
      .catch(() => active && setFail(true))
    return () => {
      active = false
    }
  }, [])

  const list = useMemo(() => {
    const q = normalize(query.trim())
    return (items ?? []).filter(
      (w) => (scope === 'all' || (scope === 'yes') === own.has(w.name)) && normalize(`${w.label} ${w.name}`).includes(q),
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, query, scope, own.owned])

  const have = (items ?? []).filter((w) => own.has(w.name)).length

  return (
    <section className="own">
      <p className="tool__muted">{t('ownWeaponIntro')}</p>

      {fail && <ErrorMsg text={t('loadDetailsFail')} />}
      {!fail && !items && <p className="empty">{t('loading')}</p>}
      {items && (
        <>
          <div className="own__tools">
            <input
              className="own__input"
              type="search"
              placeholder={t('ownWeaponSearch')}
              aria-label={t('ownWeaponSearch')}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="seg" role="tablist" aria-label={t('areaWeapons')}>
              {(['all', 'yes', 'no'] as const).map((k) => (
                <button key={k} role="tab" aria-selected={scope === k} onClick={() => setScope(k)}>
                  {k === 'all' ? t('ownAll') : k === 'yes' ? t('ownYes') : t('ownNo')}
                </button>
              ))}
            </div>
          </div>
          <p className="tool__muted" role="status" aria-live="polite">
            {t('ownWeaponCount', { n: have, total: items.length })}
          </p>
          {list.length === 0 ? (
            <p className="empty">{t('ownWeaponNone')}</p>
          ) : (
            <ul className="own__list">
              {list.map((w) => (
                <Row key={w.name} w={w} info={own.owned[w.name]} onToggle={() => own.toggle(w.name)} onChange={(p) => own.update(w.name, p)} />
              ))}
            </ul>
          )}
        </>
      )}
    </section>
  )
}
