import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom'
const CharacterPage = lazy(() => import('./CharacterPage'))
const ArtifactPage = lazy(() => import('./ArtifactPage'))
const ExpPage = lazy(() => import('./ExpPage'))
const CodesPage = lazy(() => import('./CodesPage'))
const AnalyticsPrompt = lazy(() => import('./AnalyticsPrompt'))
const SyncPrompts = lazy(() => import('./SyncPrompts'))
const FavoritesPage = lazy(() => import('./FavoritesPage'))
const HomePage = lazy(() => import('./HomePage'))
const ItemsPage = lazy(() => import('./ItemsPage'))
const DocsPage = lazy(() => import('./DocsPage'))
const ComparePage = lazy(() => import('./ComparePage'))
const TeamsPage = lazy(() => import('./TeamsPage'))
const MaterialsPage = lazy(() => import('./MaterialsPage'))
const FarmPage = lazy(() => import('./FarmPage'))
const WishlistPage = lazy(() => import('./WishlistPage'))
const PityPage = lazy(() => import('./PityPage'))
const DataPage = lazy(() => import('./DataPage'))
const WeaponPage = lazy(() => import('./WeaponPage'))
import NewsPage from './NewsPage'
import ApiNotice from './ApiNotice'
import { useSync } from './sync'
import { trackPage, useConsent } from './analytics'
import { setTitle, staticTitle } from './pageTitle'
import Footer from './Footer'
import Splash from './Splash'
import { MenuProvider } from './MenuProvider'
import './App.css'
import './responsive.css'
import './motion.css'
import './sheetpc.css'

function CharacterRoute() {
  const { id } = useParams()
  if (!id) return <Navigate to="/" replace />
  return <CharacterPage key={id} id={id} />
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Splash />
      <RouteTitle />
      <MenuProvider>
        <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<NewsPage />} />
          <Route path="/characters" element={<HomePage />} />
          <Route path="/character/:id" element={<CharacterRoute />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/materials" element={<MaterialsPage />} />
          <Route path="/farm" element={<FarmPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/pity" element={<PityPage />} />
          <Route path="/data" element={<DataPage />} />
          <Route path="/codes" element={<CodesPage />} />
          <Route path="/exp" element={<ExpPage />} />
          <Route path="/weapon/:name" element={<WeaponPage />} />
          <Route path="/artifact/:name" element={<ArtifactPage />} />
          <Route path="/weapons" element={<ItemsPage key="weapon" kind="weapon" />} />
          <Route path="/artifacts" element={<ItemsPage key="artifact" kind="artifact" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </Suspense>
        <ApiNotice />
        <SyncSlot />
        <AnalyticsSlot />
        <Footer />
      </MenuProvider>
    </BrowserRouter>
  )
}

export default App

// Avisos da sincronização: o componente (e o CSS dele) só é baixado quando há algo para mostrar
function SyncSlot() {
  const { status } = useSync()
  if (status !== 'conflict' && status !== 'update') return null
  return (
    <Suspense fallback={null}>
      <SyncPrompts />
    </Suspense>
  )
}

// Pergunta pelas estatísticas (só se estiverem configuradas) e conta uma visita por página
function AnalyticsSlot() {
  const consent = useConsent()
  const { pathname } = useLocation()
  useEffect(() => {
    void trackPage(pathname, document.title)
  }, [pathname, consent])
  if (consent !== null) return null
  return (
    <Suspense fallback={null}>
      <AnalyticsPrompt />
    </Suspense>
  )
}

// Título da aba em cada página (as de detalhe definem o próprio quando carregam)
function RouteTitle() {
  const { pathname } = useLocation()
  useEffect(() => {
    const title = staticTitle(pathname)
    if (title !== null) setTitle(title)
  }, [pathname])
  return null
}
