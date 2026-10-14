// Copia um link (ou abre o compartilhamento do celular, quando existir).
export async function shareLink(title: string, url: string): Promise<'shared' | 'copied' | 'failed'> {
  try {
    if (navigator.share && /Android|iPhone|iPad|Mobi/i.test(navigator.userAgent)) {
      await navigator.share({ title, url })
      return 'shared'
    }
  } catch {
    // cancelou ou não deu: tenta copiar
  }
  try {
    await navigator.clipboard.writeText(url)
    return 'copied'
  } catch {
    return 'failed'
  }
}
