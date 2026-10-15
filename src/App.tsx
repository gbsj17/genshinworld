import { lazy, Suspense } from 'react'
import { HashRouter, Navigate, Route, Routes, useParams } from 'react-router-dom'
const CharacterPage = lazy(() => import('./CharacterPage'))
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
    <HashRouter>
      <Splash />
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
          <Route path="/weapon/:name" element={<WeaponPage />} />
          <Route path="/weapons" element={<ItemsPage key="weapon" kind="weapon" />} />
          <Route path="/artifacts" element={<ItemsPage key="artifact" kind="artifact" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </Suspense>
        <ApiNotice />
        <Footer />
      </MenuProvider>
    </HashRouter>
  )
}

export default App
