import { HashRouter, Navigate, Route, Routes, useParams } from 'react-router-dom'
import CharacterPage from './CharacterPage'
import HomePage from './HomePage'
import './App.css'

function CharacterRoute() {
  const { id } = useParams()
  if (!id) return <Navigate to="/" replace />
  return <CharacterPage key={id} id={id} />
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/character/:id" element={<CharacterRoute />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  )
}

export default App
