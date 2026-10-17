import { useEffect, useMemo, useState } from 'react'
import { getAllItems } from './api'
import type { ItemEntry } from './api'
import ErrorMsg from './ErrorMsg'
import { t } from './i18n'
import { ItemIcon } from './ItemIcon'
import { useOwnedWeapons } from './ownedWeapons'
import type { OwnedWeapon } from './ownedWeapons'

const normalize = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()

function Row({ w, info, onToggle, onChange }: { w: ItemEntry; info?: OwnedWeapon; onToggle: () => void; onChange: (p: Partial<OwnedWeapon>) => void }) {
  return (
    <li className="own__row">
      <div className="own__id">
        <ItemIcon kind="weapon" name={w.name} />
        <span className="own__name">
          <strong>{w.label}</strong>
          <small>{'★'.repeat(w.info.rarity)}</small>
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
    return (items ?? []).filter((w) => normalize(`${w.label} ${w.name}`).includes(q))
  }, [items, query])

  const have = (items ?? []).filter((w) => own.has(w.name)).length

  return (
    <section className="own">
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
