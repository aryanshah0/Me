import { useEffect, useRef } from 'react'

// "Goku energy" background, identical in both themes: slow ki sparks rising
// through the page like the aura around a powering-up Saiyan. The soft corner
// glows live in CSS on <body> (index.css); this canvas only draws the sparks.
const COLORS = [
  [254, 90, 16], // saiyan orange
  [254, 90, 16],
  [255, 181, 71], // aura gold
  [15, 148, 205], // kamehameha blue
]

// Pre-render one soft glowing dot per color; drawing sprites is far cheaper
// than shadowBlur on every particle every frame.
const makeSprite = ([r, g, b]) => {
  const size = 32
  const c = document.createElement('canvas')
  c.width = c.height = size
  const ctx = c.getContext('2d')
  const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  grad.addColorStop(0, `rgba(${r},${g},${b},1)`)
  grad.addColorStop(0.25, `rgba(${r},${g},${b},0.6)`)
  grad.addColorStop(1, `rgba(${r},${g},${b},0)`)
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, size, size)
  return c
}

const spawn = (width, height, anywhere) => ({
  x: Math.random() * width,
  y: anywhere ? Math.random() * height : height + 20,
  size: 6 + Math.random() * 10,
  speed: 0.15 + Math.random() * 0.35,
  sway: 0.3 + Math.random() * 0.7,
  phase: Math.random() * Math.PI * 2,
  alpha: 0.25 + Math.random() * 0.45,
  color: Math.floor(Math.random() * COLORS.length),
})

const KiBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sprites = COLORS.map(makeSprite)
    let sparks = []
    let width = 0
    let height = 0
    let frame = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const widthChanged = window.innerWidth !== width
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      // Height-only resizes happen constantly on phones as the browser's
      // toolbar shows and hides; keep the existing sparks so they don't jump.
      if (!widthChanged) return
      // Sparse on purpose: subtle, not a particle storm. Fewer on phones.
      const count = Math.round(Math.min(48, Math.max(18, (width * height) / 30000)))
      sparks = Array.from({ length: count }, () => spawn(width, height, true))
    }

    const draw = (time) => {
      ctx.clearRect(0, 0, width, height)
      for (const s of sparks) {
        // Fade in near the bottom and out toward the top of the viewport.
        const life = Math.min(1, (height - s.y) / 120, s.y / (height * 0.5))
        const flicker = 0.75 + 0.25 * Math.sin(s.phase + time / 300)
        ctx.globalAlpha = Math.max(0, s.alpha * life * flicker)
        const x = s.x + Math.sin(s.phase + time / 1400) * 12 * s.sway
        ctx.drawImage(sprites[s.color], x - s.size / 2, s.y - s.size / 2, s.size, s.size)
      }
      ctx.globalAlpha = 1
    }

    const step = () => {
      for (let i = 0; i < sparks.length; i++) {
        sparks[i].y -= sparks[i].speed
        if (sparks[i].y < -20) sparks[i] = spawn(width, height, false)
      }
    }

    const loop = (time) => {
      step()
      draw(time)
      frame = requestAnimationFrame(loop)
    }

    const start = () => {
      cancelAnimationFrame(frame)
      if (reduceMotion.matches || document.hidden) draw(0)
      else frame = requestAnimationFrame(loop)
    }

    const onResize = () => {
      resize()
      start()
    }

    resize()
    start()
    window.addEventListener('resize', onResize)
    document.addEventListener('visibilitychange', start)
    reduceMotion.addEventListener('change', start)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', start)
      reduceMotion.removeEventListener('change', start)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className="fixed inset-0 -z-10 w-full h-full pointer-events-none" />
}

export default KiBackground
