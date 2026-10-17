import { useEffect, useMemo, useState } from 'react'
import { EMPTY_BUILD, ROLES, loadBuilds, newBuildId, saveBuilds } from './myBuildStore'
import type { BuildRole, BuildStore, MyBuildData, SavedBuild } from './myBuildStore'
import { CIRCLET, GOBLET, SANDS, SUBS, label, predominant } from './buildStats'
import { useOwnedWeapons } from './ownedWeapons'
import AreaModal from './AreaModal'
import { useSearchParams } from 'react-router-dom'
import { getAllItems } from './api'
import type { ItemEntry } from './api'
import { t } from './i18n'
import type { Key } from './i18n'
import Picker from './Picker'
import { shareLink } from './share'
import type { PickFilter, PickOption } from './Picker'
import { ItemFrame } from './ItemIcon'
import './tools.css'

type Data = MyBuildData
const EMPTY = EMPTY_BUILD
type Store = BuildStore

const str = (v: unknown, max: number) => (typeof v === 'string' ? v.slice(0, max) : '')
const pickOf = (v: unknown, list: string[]) => (typeof v === 'string' && list.includes(v) ? v : '')

// A build vai inteira dentro do link (nada é enviado a servidor): JSON curto em base64.
function encode(d: Data): string {
  const json = JSON.stringify({ w: d.weapon, s: d.sets, a: d.sands, g: d.goblet, c: d.circlet, u: d.subs, n: d.note })
  return encodeURIComponent(btoa(unescape(encodeURIComponent(json))))
}

// Lê e limpa uma build vinda de um link; qualquer coisa fora do esperado é descartada.
function decode(raw: string): Data | null {
  try {
    const v = JSON.parse(decodeURIComponent(escape(atob(decodeURIComponent(raw))))) as Record<string, unknown>
    if (!v || typeof v !== 'object') return null
    const arr = (x: unknown) => (Array.isArray(x) ? x : [])
    const d: Data = {
      weapon: str(v.w, 80),
      sets: arr(v.s).map((x) => str(x, 80)).filter(Boolean).slice(0, 2),
      sands: pickOf(v.a, SANDS),
      goblet: pickOf(v.g, GOBLET),
      circlet: pickOf(v.c, CIRCLET),
      subs: arr(v.u).filter((x): x is string => typeof x === 'string' && SUBS.includes(x)).slice(0, SUBS.length),
      note: str(v.n, 300),
    }
    return d.weapon || d.sets.length || d.sands || d.goblet || d.circlet || d.subs.length || d.note ? d : null
  } catch {
    return null
  }
}

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

const ROLE_KEY: Record<BuildRole, Key> = { dps: 'roleDps', subdps: 'roleSubdps', support: 'roleSupport', healer: 'roleHealer', other: 'roleOther' }

type Lookup = { weapons: ItemEntry[]; sets: ItemEntry[] }

// Cartão de uma build salva: arma, conjuntos, atributos principais e substats
function BuildCard({ b, n, lk, onEdit, onDup, onShare, onDelete, shared }: { b: SavedBuild; n: number; lk: Lookup; onEdit: () => void; onDup: () => void; onShare: () => void; onDelete: () => void; shared: boolean }) {
  const { owned } = useOwnedWeapons()
  const [menu, setMenu] = useState(false)
  const weapon = lk.weapons.find((w) => w.name === b.weapon)
  const own = b.weapon ? owned[b.weapon] : undefined
  const setEntries = b.sets.map((k) => ({ key: k, e: lk.sets.find((s) => s.name === k) }))
  const pred = predominant(b)
  const name = b.name || t('buildDefault', { n })
  const mains: [Key, string][] = [['slotSands', b.sands], ['slotGoblet', b.goblet], ['slotCirclet', b.circlet]]
  const empty = !b.weapon && !b.sets.length && !b.sands && !b.goblet && !b.circlet && !b.subs.length

  return (
    <article className="bcard">
      <div className="bcard__head">
        <strong>{name}</strong>
        {b.role && <span className={`btag btag--${b.role}`}>{t(ROLE_KEY[b.role])}</span>}
        <span className="bcard__menu">
          <button className="bcard__dots" aria-label={t('buildMore')} aria-expanded={menu} onClick={() => setMenu((v) => !v)}>···</button>
          {menu && (
            <div className="bcard__pop">
              <button onClick={() => { setMenu(false); onDelete() }}>{t('buildDel')}</button>
            </div>
          )}
        </span>
      </div>
      {empty && <p className="tool__muted">{t('buildEmptyBuild')}</p>}
      {b.weapon && (
        <div className="bcard__weapon">
          <ItemFrame urls={weapon?.info.urls ?? []} rarity={weapon?.info.rarity ?? 0} label={weapon?.label ?? '?'} />
          <div>
            <small>{t('weapons')}{own ? ` · R${own.r} · ${`${t('lvShort')} ${own.lv}`}` : ''}</small>
            <strong>{weapon ? weapon.label : b.weapon}</strong>
          </div>
        </div>
      )}
      {setEntries.length > 0 && (
        <div className="bcard__sets">
          <span className="bcard__stack">
            {setEntries.map((s) => <ItemFrame key={s.key} urls={s.e?.info.urls ?? []} rarity={s.e?.info.rarity ?? 0} label={s.e?.label ?? '?'} />)}
          </span>
          <span>{setEntries.map((s) => `${s.e?.label ?? s.key}${setEntries.length > 1 ? ' ×2' : ''}`).join(' + ')}</span>
        </div>
      )}
      {(b.sands || b.goblet || b.circlet) && (
        <div className="bcard__mains">
          {mains.map(([k, v]) => (
            <div key={k}>
              <small>{t(k)}</small>
              <strong>{v ? label(v) : '—'}</strong>
            </div>
          ))}
        </div>
      )}
      {pred.length > 0 && <p className="bcard__pred">{t('buildPred')}: <b>{pred.join(' · ')}</b></p>}
      {b.subs.length > 0 && (
        <div className="bcard__subs">
          {b.subs.map((k) => <span key={k}>{label(k)}</span>)}
        </div>
      )}
      <div className="bcard__foot">
        <button className="tool-btn" onClick={onEdit}>{t('buildEdit')}</button>
        <button className="tool-btn tool-btn--ghost" onClick={onDup}>{t('buildDup')}</button>
        <button className="tool-btn tool-btn--ghost" onClick={onShare}>{shared ? t('linkCopied') : t('myBuildShare')}</button>
      </div>
    </article>
  )
}

// Janela de salvar: nome e tipo da build
function SaveDialog({ initial, fallback, onSave, onClose }: { initial: { name: string; role: BuildRole | '' }; fallback: string; onSave: (name: string, role: BuildRole | '') => void; onClose: () => void }) {
  const [name, setName] = useState(initial.name)
  const [role, setRole] = useState<BuildRole | ''>(initial.role)
  return (
    <AreaModal title={t('buildSaveTitle')} onClose={onClose}>
      <form
        className="bsave"
        onSubmit={(e) => {
          e.preventDefault()
          onSave(name.trim() || fallback, role)
        }}
      >
        <p className="tool__muted">{t('buildSaveHint')}</p>
        <label className="mat__field" htmlFor="mb-name">
          <span>{t('buildName')}</span>
          <input id="mb-name" className="tool-input" value={name} maxLength={40} placeholder={fallback} onChange={(e) => setName(e.target.value)} />
        </label>
        <small className="mine__label">{t('buildRole')}</small>
        <div className="chips mine__chips" role="group" aria-label={t('buildRole')}>
          {ROLES.map((r) => (
            <button key={r} type="button" className="pill" aria-pressed={role === r} onClick={() => setRole(role === r ? '' : r)}>{t(ROLE_KEY[r])}</button>
          ))}
        </div>
        <div className="mine__acts bsave__acts">
          <button type="button" className="tool-btn tool-btn--ghost" onClick={onClose}>{t('buildCancel')}</button>
          <button type="submit" className="tool-btn">{t('buildSave')}</button>
        </div>
      </form>
    </AreaModal>
  )
}

// Builds montadas pela própria pessoa para este personagem; ficam salvas no aparelho.
export default function MyBuild({ charId, weaponType }: { charId: string; weaponType: string }) {
  const [store, setStore] = useState<Store>(loadBuilds)
  const [weapons, setWeapons] = useState<ItemEntry[]>([])
  const [sets, setSets] = useState<ItemEntry[]>([])
  const [picking, setPicking] = useState<'weapon' | 'set' | null>(null)
  // editor: undefined = lista; null = build nova; texto = id da build em edição
  const [editId, setEditId] = useState<string | null | undefined>(undefined)
  const [draft, setDraft] = useState<Data>(EMPTY)
  const [orig, setOrig] = useState('')
  const [saving, setSaving] = useState(false)
  const list = store[charId] ?? []
  const [params, setParams] = useSearchParams()
  const [dismissed, setDismissed] = useState(false)
  const [copied, setCopied] = useState('')
  const incoming = useMemo(() => {
    const raw = params.get('mb')
    return raw && !dismissed ? decode(raw) : null
  }, [params, dismissed])

  useEffect(() => {
    let active = true
    getAllItems('weapons').then((l) => active && setWeapons(l)).catch(() => {})
    getAllItems('artifacts').then((l) => active && setSets(l)).catch(() => {})
    return () => {
      active = false
    }
  }, [])

  const commit = (next: SavedBuild[]) =>
    setStore((s) => {
      const all = { ...s }
      if (next.length) all[charId] = next
      else delete all[charId]
      saveBuilds(all)
      return all
    })
  const plain = (b: Data): Data => ({ weapon: b.weapon, sets: b.sets, sands: b.sands, goblet: b.goblet, circlet: b.circlet, subs: b.subs, note: b.note })

  const openNew = () => {
    setDraft(EMPTY)
    setOrig(JSON.stringify(EMPTY))
    setEditId(null)
  }
  const openEdit = (b: SavedBuild) => {
    const d = plain(b)
    setDraft(d)
    setOrig(JSON.stringify(d))
    setEditId(b.id)
  }
  const leave = () => {
    if (JSON.stringify(draft) !== orig && !window.confirm(t('buildDiscardAsk'))) return
    setEditId(undefined)
  }
  const saveDraft = (name: string, role: BuildRole | '') => {
    const next = editId === null ? [...list, { ...draft, id: newBuildId(), name, role }] : list.map((b) => (b.id === editId ? { ...b, ...draft, name, role } : b))
    commit(next)
    setSaving(false)
    setEditId(undefined)
  }
  const dup = (b: SavedBuild, n: number) => commit([...list, { ...b, id: newBuildId(), name: t('buildCopy', { n: b.name || t('buildDefault', { n }) }).slice(0, 40) }])
  const del = (b: SavedBuild, n: number) => {
    if (window.confirm(t('buildDelAsk', { n: b.name || t('buildDefault', { n }) }))) commit(list.filter((x) => x.id !== b.id))
  }

  const dropIncoming = () => {
    setDismissed(true)
    const next = new URLSearchParams(params)
    next.delete('mb')
    setParams(next, { replace: true })
  }
  const useIncoming = () => {
    if (!incoming) return
    commit([...list, { ...incoming, id: newBuildId(), name: t('buildShared'), role: '' }])
    dropIncoming()
  }
  const share = async (id: string, d: Data) => {
    const base = window.location.href.split('?')[0]
    const r = await shareLink(charId, `${base}?tab=mine&mb=${encode(d)}`)
    if (r === 'copied') {
      setCopied(id)
      window.setTimeout(() => setCopied(''), 1800)
    }
  }

  const update = (patch: Partial<Data>) => setDraft((d) => ({ ...d, ...patch }))
  const d = draft
  const weapon = weapons.find((w) => w.name === d.weapon)
  const setEntries = d.sets.map((n) => sets.find((s) => s.name === n)).filter((e): e is ItemEntry => Boolean(e))
  const stars = (v: string) => `${v}★`

  const options = useMemo<PickOption[]>(() => {
    if (picking === 'weapon') {
      return weapons
        .filter((w) => w.info.typeKey === weaponType)
        .sort((a, b) => b.info.rarity - a.info.rarity || a.label.localeCompare(b.label))
        .map((w) => ({ key: w.name, label: w.label, search: w.name, sub: `${w.info.rarity}★${w.info.stat ? ` · ${w.info.stat}` : ''}`, thumb: w.info.urls, rarity: w.info.rarity, facets: { rarity: String(w.info.rarity) } }))
    }
    return sets
      .filter((s) => !d.sets.includes(s.name))
      .sort((a, b) => b.info.rarity - a.info.rarity || a.label.localeCompare(b.label))
      .map((s) => ({ key: s.name, label: s.label, search: s.name, sub: `${s.info.rarity}★`, thumb: s.info.urls, rarity: s.info.rarity, facets: { rarity: String(s.info.rarity) } }))
  }, [picking, weapons, sets, weaponType, d.sets])

  const rarities = [...new Set(options.map((o) => o.facets?.rarity).filter((v): v is string => Boolean(v)))].sort((a, b) => Number(b) - Number(a))
  const filters: PickFilter[] = [{ id: 'rarity', label: t('filterRarity'), values: rarities.map((v) => ({ value: v, label: stars(v) })) }]

  const toggleSub = (k: string) => update({ subs: d.subs.includes(k) ? d.subs.filter((x) => x !== k) : [...d.subs, k] })

  // ===== Lista de builds salvas =====
  if (editId === undefined) {
    return (
      <section className="mine mine--list">
        <div className="mine__head">
          <h2 className="section-title">{t('myBuildsTitle')}</h2>
          <span className="tool__muted">{list.length === 1 ? t('buildCount1') : t('buildCount', { n: list.length })}</span>
        </div>
        <p className="tool__muted">{t('myBuildHint')}</p>
        {incoming && (
          <div className="mine__incoming" role="status">
            <strong>{t('myBuildShared')}</strong>
            <p>
              {[
                weapons.find((w) => w.name === incoming.weapon)?.label ?? incoming.weapon,
                ...incoming.sets.map((n) => sets.find((x) => x.name === n)?.label ?? n),
                incoming.sands && `${t('slotSands')}: ${label(incoming.sands)}`,
                incoming.goblet && `${t('slotGoblet')}: ${label(incoming.goblet)}`,
                incoming.circlet && `${t('slotCirclet')}: ${label(incoming.circlet)}`,
              ].filter(Boolean).join(' · ')}
            </p>
            <div className="mine__acts">
              <button className="tool-btn" onClick={useIncoming}>{t('myBuildUse')}</button>
              <button className="tool-btn tool-btn--ghost" onClick={dropIncoming}>{t('myBuildIgnore')}</button>
            </div>
          </div>
        )}
        <div className="bgrid">
          <button className="bnew" onClick={openNew}>
            <span className="bnew__plus" aria-hidden="true">+</span>
            {t('buildNew')}
          </button>
          {list.map((b, i) => (
            <BuildCard key={b.id} b={b} n={i + 1} lk={{ weapons, sets }} shared={copied === b.id} onEdit={() => openEdit(b)} onDup={() => dup(b, i + 1)} onShare={() => share(b.id, plain(b))} onDelete={() => del(b, i + 1)} />
          ))}
        </div>
      </section>
    )
  }

  // ===== Editor (build nova ou existente) =====
  return (
    <section className="mine">
      <div className="mine__head">
        <h2 className="section-title">{editId === null ? t('buildNewTitle') : t('buildEditTitle')}</h2>
        <div className="mine__acts">
          <button className="tool-btn tool-btn--ghost" onClick={() => share('draft', d)}>{copied === 'draft' ? t('linkCopied') : t('myBuildShare')}</button>
          <button className="tool-btn tool-btn--ghost" onClick={leave}>{t('back')}</button>
          <button className="tool-btn" onClick={() => setSaving(true)}>{t('buildSave')}</button>
        </div>
      </div>

      <div className="mine__row">
        <ItemFrame urls={weapon?.info.urls ?? []} rarity={weapon?.info.rarity ?? 0} label={weapon?.label ?? '?'} />
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
            <ItemFrame urls={s.info.urls} rarity={s.info.rarity} label={s.label} />
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
      {saving && (
        <SaveDialog
          initial={{ name: editId === null ? '' : list.find((b) => b.id === editId)?.name ?? '', role: editId === null ? '' : list.find((b) => b.id === editId)?.role ?? '' }}
          fallback={t('buildDefault', { n: editId === null ? list.length + 1 : list.findIndex((b) => b.id === editId) + 1 })}
          onSave={saveDraft}
          onClose={() => setSaving(false)}
        />
      )}
    </section>
  )
}
