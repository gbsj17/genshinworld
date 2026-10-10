// Service worker do Genshin World: guarda arquivos, imagens e dados no aparelho
// para o app abrir rápido e já com tudo carregado.
//
// Para forçar todo mundo a baixar tudo de novo (por exemplo, se alguma imagem
// ficou guardada quebrada), basta mudar a VERSION abaixo.
const VERSION = 'v1'
const SHELL = `gw-shell-${VERSION}`
const IMAGES = `gw-images-${VERSION}`
const DATA = `gw-data-${VERSION}`
const FONTS = `gw-fonts-${VERSION}`
const ALL = [SHELL, IMAGES, DATA, FONTS]

const MAX_IMAGES = 300
const API_HOSTS = ['genshin.jmp.blue', 'genshin-db-api.vercel.app']
const FONT_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com']

const scope = new URL('./', self.location).href

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(SHELL)
      .then((cache) => cache.addAll([scope, `${scope}manifest.webmanifest`]))
      .then(() => self.skipWaiting()),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((names) =>
        Promise.all(names.filter((n) => !ALL.includes(n)).map((n) => caches.delete(n))),
      )
      .then(() => self.clients.claim()),
  )
})

self.addEventListener('fetch', (event) => {
  const request = event.request
  if (request.method !== 'GET') return
  const url = new URL(request.url)

  // Abrir o app: tenta a internet (versão mais nova) e, sem rede, usa a guardada.
  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(event, request))
    return
  }

  // Arquivos do próprio app. Os de /assets/ têm o conteúdo no nome, então nunca mudam.
  if (url.origin === self.location.origin) {
    const hashed = url.href.startsWith(`${scope}assets/`)
    event.respondWith(hashed ? cacheFirst(event, SHELL, request) : staleWhileRevalidate(event, SHELL, request))
    return
  }

  if (FONT_HOSTS.includes(url.hostname)) {
    event.respondWith(staleWhileRevalidate(event, FONTS, request))
    return
  }

  // Imagens de fora (ícones, armas, retratos): baixa uma vez e guarda.
  if (request.destination === 'image') {
    event.respondWith(cacheFirst(event, IMAGES, request, MAX_IMAGES))
    return
  }

  // Dados das APIs: mostra o que está guardado na hora e atualiza por baixo.
  if (API_HOSTS.includes(url.hostname)) {
    event.respondWith(staleWhileRevalidate(event, DATA, request))
  }
})

// Guarda a resposta. "opaque" é a imagem de outro site carregada por <img>:
// o navegador não deixa ver o status, mas deixa guardar.
function cacheable(response) {
  return response && (response.ok || response.type === 'opaque')
}

async function trim(cacheName, max) {
  const cache = await caches.open(cacheName)
  const keys = await cache.keys()
  if (keys.length > max) {
    await Promise.all(keys.slice(0, keys.length - max).map((key) => cache.delete(key)))
  }
}

async function cacheFirst(event, cacheName, request, max) {
  const cache = await caches.open(cacheName)
  const hit = await cache.match(request)
  if (hit) return hit
  const response = await fetch(request)
  if (cacheable(response)) {
    event.waitUntil(
      cache.put(request, response.clone()).then(() => (max ? trim(cacheName, max) : undefined)),
    )
  }
  return response
}

async function staleWhileRevalidate(event, cacheName, request) {
  const cache = await caches.open(cacheName)
  const hit = await cache.match(request)
  const update = fetch(request)
    .then((response) => {
      if (cacheable(response)) cache.put(request, response.clone())
      return response
    })
    .catch(() => undefined)
  if (hit) {
    event.waitUntil(update)
    return hit
  }
  return (await update) ?? Response.error()
}

async function networkFirst(event, request) {
  const cache = await caches.open(SHELL)
  try {
    const response = await fetch(request)
    if (response.ok) event.waitUntil(cache.put(scope, response.clone()))
    return response
  } catch {
    return (await cache.match(scope)) ?? Response.error()
  }
}
