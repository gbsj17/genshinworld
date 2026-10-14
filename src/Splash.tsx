import { useEffect, useRef, useState } from 'react'
import { t } from './i18n'
import './splash.css'

const KEY = 'genshinworld:splash'
const DURATION = 3400 // ms
const ELEMENTS = ['#f08654', '#4cc2f1', '#5fc8a8', '#a5dbe9', '#b58bf0', '#90d84a', '#f0b432']

const ease = (x: number) => 1 - Math.pow(1 - Math.min(1, Math.max(0, x)), 3)

// Só aparece na primeira abertura da sessão e nunca para quem pediu menos movimento.
function shouldShow(): boolean {
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
    if (sessionStorage.getItem(KEY)) return false
    sessionStorage.setItem(KEY, '1')
  } catch {
    // sem armazenamento: mostra mesmo assim
  }
  return true
}

// Abertura: os 7 elementos giram, se fecham no centro e viram o logo.
export default function Splash() {
  const [visible, setVisible] = useState(shouldShow)
  const [leaving, setLeaving] = useState(false)
  const [logo, setLogo] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const close = () => {
    setLeaving(true)
    window.setTimeout(() => setVisible(false), 450)
  }

  useEffect(() => {
    if (!visible) return
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    const dpr = Math.min(2, window.devicePixelRatio || 1)
    const W = window.innerWidth
    const H = window.innerHeight
    canvas.width = W * dpr
    canvas.height = H * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    const cx = W / 2
    const cy = H / 2

    const glow = (x: number, y: number, r: number, a: number, rgb: string) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r)
      g.addColorStop(0, `rgba(${rgb},${a})`)
      g.addColorStop(1, `rgba(${rgb},0)`)
      ctx.fillStyle = g
      ctx.fillRect(x - r, y - r, r * 2, r * 2)
    }
    const rgbOf = (hex: string) => hex.match(/\w\w/g)!.map((h) => parseInt(h, 16)).join(',')

    let raf = 0
    let logoShown = false
    const t0 = performance.now()
    const frame = (now: number) => {
      const t = (now - t0) / 1000
      ctx.clearRect(0, 0, W, H)
      const R0 = Math.min(W, H) * 0.34
      const prog = ease((t - 0.3) / 1.6)
      const R = R0 * (1 - prog)
      const s = Math.min(W, H) * 0.035
      const spin = t * 1.6
      ELEMENTS.forEach((c, i) => {
        const a = spin * (1 - prog * 0.6) + (i * Math.PI * 2) / 7
        const x = cx + Math.cos(a) * R
        const y = cy + Math.sin(a) * R
        glow(x, y, s * 4, 0.5, rgbOf(c))
        ctx.fillStyle = c
        ctx.beginPath()
        ctx.arc(x, y, s * (1 - prog * 0.5), 0, Math.PI * 2)
        ctx.fill()
      })
      if (t > 1.9) {
        glow(cx, cy, Math.max(W, H) * 0.45 * ease((t - 1.9) / 0.6), Math.max(0, 0.7 - (t - 1.9) * 0.5), '211,188,142')
        if (!logoShown) {
          logoShown = true
          setLogo(true)
        }
      }
      if (now - t0 < DURATION) raf = requestAnimationFrame(frame)
      else close()
    }
    raf = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible])

  if (!visible) return null
  return (
    <div
      className={leaving ? 'splash splash--out' : 'splash'}
      role="presentation"
      onClick={close}
    >
      <canvas ref={canvasRef} className="splash__canvas" />
      <div className={logo ? 'splash__logo is-on' : 'splash__logo'}>
        <b>Genshin World</b>
        <i>{t('splashSub')}</i>
      </div>
    </div>
  )
}
