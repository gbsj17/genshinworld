import { lazy, Suspense } from 'react'
import { HashRouter, Navigate, Route, Routes, useParams } from 'react-router-dom'
const CharacterPage = lazy(() => import('./CharacterPage'))
const FavoritesPage = lazy(() => import('./FavoritesPage'))
const HomePage = lazy(() => import('./HomePage'))
const ItemsPage = lazy(() => import('./ItemsPage'))
import NewsPage from './NewsPage'
import Footer from './Footer'
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
      <MenuProvider>
        <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<NewsPage />} />
          <Route path="/characters" element={<HomePage />} />
          <Route path="/character/:id" element={<CharacterRoute />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/weapons" element={<ItemsPage kind="weapon" />} />
          <Route path="/artifacts" element={<ItemsPage kind="artifact" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </Suspense>
        <Footer />
      </MenuProvider>
    </HashRouter>
  )
}

export default App
