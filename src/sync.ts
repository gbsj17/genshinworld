// Sincronização entre aparelhos: login com Google (Firebase Auth) e um documento por usuário
// no Firestore (users/{uid}) com os mesmos dados do backup. O Firebase só é baixado quando
// a pessoa entra na conta (ou já tinha entrado antes), para não pesar o site para quem não usa.
import { useSyncExternalStore } from 'react'
import { isEmptyData, readAll, replaceAll } from './backup'
import { firebaseConfig, syncAvailable } from './firebaseConfig'
import { CHANGED_EVENT } from './store'
import { decide, stable } from './syncLogic'

export type SyncStatus = 'off' | 'signed-out' | 'loading' | 'synced' | 'saving' | 'conflict' | 'update' | 'error'

export interface SyncState {
  status: SyncStatus
  user?: { name: string; email: string; photo?: string }
  lastSync?: number
  error?: string
}

const META_KEY = 'genshinworld:sync'
const REDIRECT_KEY = 'genshinworld:sync-redirect' // login por redirecionamento em andamento
interface Meta {
  uid?: string
  syncedAt?: number | null
  dirty?: boolean
}

const readMeta = (): Meta => {
  try {
    const v: unknown = JSON.parse(localStorage.getItem(META_KEY) ?? '{}')
    return v && typeof v === 'object' ? (v as Meta) : {}
  } catch {
    return {}
  }
}
const writeMeta = (m: Meta) => {
  try {
    localStorage.setItem(META_KEY, JSON.stringify(m))
  } catch {
    // sem armazenamento: a sincronização recomeça na próxima visita
  }
}

// ---- estado compartilhado com as telas ----
let state: SyncState = { status: syncAvailable ? 'signed-out' : 'off' }
const listeners = new Set<() => void>()
const set = (patch: Partial<SyncState>) => {
  state = { ...state, ...patch }
  listeners.forEach((l) => l())
}
export const useSync = () =>
  useSyncExternalStore(
    (l) => {
      listeners.add(l)
      return () => listeners.delete(l)
    },
    () => state,
  )

// ---- Firebase (carregado sob demanda) ----
type Fb = {
  auth: import('firebase/auth').Auth
  authMod: typeof import('firebase/auth')
  db: import('firebase/firestore/lite').Firestore
  fs: typeof import('firebase/firestore/lite')
}
let fbPromise: Promise<Fb> | null = null
function loadFirebase(): Promise<Fb> {
  if (!fbPromise) {
    fbPromise = Promise.all([import('firebase/app'), import('firebase/auth'), import('firebase/firestore/lite')]).then(
      ([app, authMod, fs]) => {
        const a = app.initializeApp(firebaseConfig)
        const auth = authMod.getAuth(a)
        const fb: Fb = { auth, authMod, db: fs.getFirestore(a), fs }
        authMod.onAuthStateChanged(auth, (u) => void onUser(u))
        return fb
      },
    )
  }
  return fbPromise
}

let uid: string | null = null
let remote: { data: unknown; at: number } | null = null // última leitura da nuvem
let busy = false
let timer = 0

const errText = (e: unknown) => (e instanceof Error ? e.message : String(e))

async function onUser(u: import('firebase/auth').User | null) {
  if (!u) {
    uid = null
    set({ status: 'signed-out', user: undefined })
    return
  }
  const meta = readMeta()
  // outra conta neste aparelho: trata como primeira vez
  if (meta.uid !== u.uid) writeMeta({ uid: u.uid, syncedAt: null, dirty: true })
  uid = u.uid
  set({ user: { name: u.displayName ?? u.email ?? '', email: u.email ?? '', photo: u.photoURL ?? undefined } })
  await check('start')
}

async function readRemote(): Promise<{ data: unknown; at: number } | null> {
  const { db, fs } = await loadFirebase()
  const snap = await fs.getDoc(fs.doc(db, 'users', uid as string))
  if (!snap.exists()) return null
  const d = snap.data() as { json?: unknown; updatedAt?: unknown }
  if (typeof d.json !== 'string' || typeof d.updatedAt !== 'number') return null
  return { data: JSON.parse(d.json), at: d.updatedAt }
}

async function upload() {
  const { db, fs } = await loadFirebase()
  set({ status: 'saving' })
  const at = Date.now()
  await fs.setDoc(fs.doc(db, 'users', uid as string), { json: JSON.stringify(readAll()), updatedAt: at })
  remote = null
  writeMeta({ uid: uid as string, syncedAt: at, dirty: false })
  set({ status: 'synced', lastSync: at, error: undefined })
}

function applyRemote() {
  if (!remote) return
  if (!replaceAll(remote.data)) {
    set({ status: 'error', error: 'invalid cloud data' })
    return
  }
  writeMeta({ uid: uid as string, syncedAt: remote.at, dirty: false })
  // as listas ficam em memória nas telas; recarregar mostra tudo já atualizado
  window.location.reload()
}

// start: ao entrar/abrir · focus: ao voltar para a aba · change: depois de mudar algo · manual: botão
async function check(kind: 'start' | 'focus' | 'change' | 'manual') {
  if (!uid || busy) return
  busy = true
  if (kind !== 'focus' && kind !== 'change') set({ status: 'loading' })
  try {
    const r = await readRemote()
    const meta = readMeta()
    const local = readAll()
    const action = decide({
      remoteAt: r?.at ?? null,
      syncedAt: meta.syncedAt ?? null,
      dirty: Boolean(meta.dirty),
      localEmpty: isEmptyData(local),
      same: r ? stable(r.data) === stable(local) : false,
    })
    remote = r
    if (action === 'upload') await upload()
    else if (action === 'download') {
      // ao voltar para a aba, só avisa (não recarrega a página no meio do uso)
      if (kind === 'focus') set({ status: 'update' })
      else applyRemote()
    } else if (action === 'conflict') set({ status: 'conflict' })
    else {
      writeMeta({ uid, syncedAt: r?.at ?? meta.syncedAt ?? null, dirty: false })
      set({ status: 'synced', lastSync: Date.now(), error: undefined })
    }
  } catch (e) {
    set({ status: 'error', error: errText(e) })
  } finally {
    busy = false
  }
}

// ---- ações das telas ----
export async function signIn() {
  if (!syncAvailable) return
  set({ status: 'loading', error: undefined })
  try {
    const { auth, authMod } = await loadFirebase()
    const provider = new authMod.GoogleAuthProvider()
    try {
      await authMod.signInWithPopup(auth, provider)
    } catch (e) {
      const code = (e as { code?: string }).code
      if (code === 'auth/popup-blocked' || code === 'auth/operation-not-supported-in-this-environment') {
        try {
          sessionStorage.setItem(REDIRECT_KEY, '1')
        } catch {
          // sem armazenamento: o login ainda funciona, só a volta demora um pouco mais
        }
        await authMod.signInWithRedirect(auth, provider)
        return
      }
      throw e
    }
  } catch (e) {
    const code = (e as { code?: string }).code
    if (code === 'auth/popup-closed-by-user' || code === 'auth/cancelled-popup-request') set({ status: 'signed-out' })
    else set({ status: 'error', error: errText(e) })
  }
}

export async function signOutSync() {
  const { auth, authMod } = await loadFirebase()
  await authMod.signOut(auth)
  writeMeta({})
  remote = null
}

export const syncNow = () => check('manual')
export const applyUpdate = () => applyRemote()
// conflito: "cloud" usa os dados da nuvem, "device" manda os deste aparelho
export async function resolveConflict(choice: 'cloud' | 'device') {
  if (choice === 'cloud') return applyRemote()
  try {
    await upload()
  } catch (e) {
    set({ status: 'error', error: errText(e) })
  }
}
export const dismissPrompt = () => set({ status: 'synced' })

// Liga tudo ao abrir o site
export function initSync() {
  if (!syncAvailable) return
  window.addEventListener(CHANGED_EVENT, () => {
    const meta = readMeta()
    writeMeta({ ...meta, dirty: true })
    if (!uid) return
    window.clearTimeout(timer)
    timer = window.setTimeout(() => void check('change'), 2000)
  })
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && uid && state.status === 'synced') void check('focus')
  })
  // já tinha entrado antes: carrega o Firebase para restaurar a sessão
  let redirecting = false
  try {
    redirecting = sessionStorage.getItem(REDIRECT_KEY) === '1'
    sessionStorage.removeItem(REDIRECT_KEY)
  } catch {
    // sem armazenamento
  }
  if (readMeta().uid || redirecting) {
    set({ status: 'loading' })
    void loadFirebase()
      .then(({ auth, authMod }) => authMod.getRedirectResult(auth))
      .catch((e) => set({ status: 'error', error: errText(e) }))
  }
}
