// Computes non-overlapping positions for the skills bubbles.
//
// Start from three concentric rings, then run a small deterministic
// relaxation: any two bubbles that overlap are pushed apart, and bubbles are
// kept clear of the centre bubble and inside the container. It runs once at
// module load and gives the same result on the server and in the browser, so
// the prerendered HTML and hydration agree.
//
// One layout per breakpoint, each solved for the *smallest* screen in its
// range (container size and bubble size at that width).

export const PRESETS = {
  // ≥1024px: container 832×624 at 1024px wide; px-6 py-3 text-base bubbles
  xl: { W: 832, H: 624, charW: 10.4, padX: 48, h: 48, center: 112 },
  // 768–1023px: container 640×480; px-4 py-2 text-base bubbles
  lg: { W: 640, H: 480, charW: 10.4, padX: 32, h: 40, center: 96 },
  // <768px: container 296×395 (portrait); px-2.5 py-1 text-xs bubbles
  md: { W: 296, H: 395, charW: 7.8, padX: 20, h: 24, center: 80 },
  // <480px: container 256×341 at a 320px phone; px-2 py-0.5 text-[10px] bubbles
  xs: { W: 256, H: 341, charW: 6.6, padX: 16, h: 19, center: 64 },
}

const GAP = 10

export const layout = (rings, { W, H, charW, padX, h, center }) => {
  const radii = [0.22, 0.34, 0.45]
  const nodes = []
  rings.forEach((items, ringIndex) => {
    const offset = ringIndex % 2 ? Math.PI / items.length : 0
    const angles = items.map((_, i) => offset + (i * 2 * Math.PI) / items.length - Math.PI / 2)
    // Longest names where the ellipse is widest (top/bottom), shortest at the sides.
    const byRoom = [...angles].sort((a, b) => Math.abs(Math.sin(b)) - Math.abs(Math.sin(a)))
    const byLength = [...items].sort((a, b) => b.length - a.length)
    byLength.forEach((name, i) => {
      nodes.push({
        name,
        w: name.length * charW + padX,
        h,
        x: W / 2 + radii[ringIndex] * W * Math.cos(byRoom[i]),
        y: H / 2 + radii[ringIndex] * H * Math.sin(byRoom[i]),
      })
    })
  })

  const hub = { x: W / 2, y: H / 2, w: center, h: center }

  for (let iter = 0; iter < 400; iter++) {
    let moved = false
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i]
      for (let j = i + 1; j <= nodes.length; j++) {
        const b = j === nodes.length ? hub : nodes[j]
        const dx = b.x - a.x
        const dy = b.y - a.y
        const overlapX = (a.w + b.w) / 2 + GAP - Math.abs(dx)
        const overlapY = (a.h + b.h) / 2 + GAP - Math.abs(dy)
        if (overlapX > 0 && overlapY > 0) {
          moved = true
          // Separate along the axis that needs the smaller push.
          const pushX = overlapX < overlapY
          const sign = pushX ? Math.sign(dx) || 1 : Math.sign(dy) || 1
          const amount = (pushX ? overlapX : overlapY) / 2
          if (b === hub) {
            if (pushX) a.x -= sign * amount * 2
            else a.y -= sign * amount * 2
          } else if (pushX) {
            a.x -= sign * amount
            b.x += sign * amount
          } else {
            a.y -= sign * amount
            b.y += sign * amount
          }
        }
      }
      // Keep every bubble fully inside the container.
      a.x = Math.min(W - a.w / 2 - 2, Math.max(a.w / 2 + 2, a.x))
      a.y = Math.min(H - a.h / 2 - 2, Math.max(a.h / 2 + 2, a.y))
    }
    if (!moved) break
  }

  return Object.fromEntries(nodes.map((n) => [n.name, { left: (n.x / W) * 100, top: (n.y / H) * 100 }]))
}
