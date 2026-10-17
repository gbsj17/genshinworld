// Cloudflare Worker: busca o perfil no Enka.Network e devolve ao site com a permissão de CORS.
// Uso: https://SEU-WORKER.workers.dev/?uid=800123456
const ALLOWED = ['https://gbsj17.github.io', 'http://localhost:5173', 'http://localhost:4173']

export default {
  async fetch(request) {
    const origin = request.headers.get('Origin') || ''
    const cors = {
      'Access-Control-Allow-Origin': ALLOWED.includes(origin) ? origin : ALLOWED[0],
      Vary: 'Origin',
    }
    if (request.method === 'OPTIONS') return new Response(null, { headers: { ...cors, 'Access-Control-Allow-Methods': 'GET' } })

    const uid = new URL(request.url).searchParams.get('uid') || ''
    if (!/^\d{9,10}$/.test(uid)) return new Response('{}', { status: 400, headers: cors })

    const r = await fetch(`https://enka.network/api/uid/${uid}`, {
      headers: { 'User-Agent': 'GenshinWorld/1.0 (https://gbsj17.github.io/genshinworld/)' },
      cf: { cacheTtl: 60, cacheEverything: true },
    })
    return new Response(r.body, { status: r.status, headers: { ...cors, 'Content-Type': 'application/json' } })
  },
}
