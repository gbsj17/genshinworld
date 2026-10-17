import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './install'
import { initSync } from './sync'
import App from './App.tsx'

// Links antigos eram /#/rota; levam para o endereço novo sem recarregar a página
if (window.location.hash.startsWith('#/')) {
  window.history.replaceState(null, '', import.meta.env.BASE_URL.replace(/\/$/, '') + window.location.hash.slice(1))
}

initSync()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Liga o cache e a instalação como app. Só na versão publicada, para o cache
// não atrapalhar quando você está desenvolvendo (npm run dev).
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register(`${import.meta.env.BASE_URL}sw.js`)
      .catch(() => {
        // sem service worker o site funciona igual, só sem o cache
      })
  })
}
