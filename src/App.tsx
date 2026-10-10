import { HashRouter, Navigate, Route, Routes, useParams } from 'react-router-dom'
import CharacterPage from './CharacterPage'
import HomePage from './HomePage'
import { MenuProvider } from './MenuProvider'
import './App.css'
import './responsive.css'

function CharacterRoute() {
  const { id } = useParams()
  if (!id) return <Navigate to="/" replace />
  return <CharacterPage key={id} id={id} />
}

function App() {
  return (
    <HashRouter>
      <MenuProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/character/:id" element={<CharacterRoute />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MenuProvider>
    </HashRouter>
  )
}

export default App
