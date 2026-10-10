// Baixa as imagens em segundo plano (algumas por vez) para já estarem guardadas
// quando a pessoa chegar nelas. Com o "Economia de dados" ligado, não faz nada.
let started = false

export function preloadImages(urls: string[], concurrency = 6): void {
  if (started || urls.length === 0) return
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } })
    .connection
  if (connection?.saveData) return
  started = true

  let index = 0
  const next = () => {
    if (index >= urls.length) return
    const img = new Image()
    img.onload = next
    img.onerror = next
    img.src = urls[index++]
  }
  // pequena espera para não competir com o que a tela precisa mostrar primeiro
  window.setTimeout(() => {
    for (let i = 0; i < concurrency; i++) next()
  }, 600)
}
