import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js'
import modelUrl from '../assets/3d/goku-nimbus.glb'

// Kid Goku riding the Flying Nimbus, for the contact page. The model is static,
// so all motion is procedural (smooth, and it can't glitch like baked clips):
//   idle   - bobbing and swaying on the cloud
//   typing - leans in towards the form
//   send   - corkscrews upwards (tilted, two turns), then floats back down
//
// Model: "Son Goku and Kintoun Nimbus" by Antouss on Sketchfab, CC-BY-4.0.
// https://sketchfab.com/3d-models/son-goku-and-kintoun-nimbus-0e05229282e644ab978d7d9c09ab4ec2

// Which way he faces (radians around Y). 0 faces the viewer; negative turns
// him towards the form on the left. Idle is a three-quarter view towards it.
const BASE_YAW = -0.35
const TYPING_YAW = -0.8
const SPIN_DURATION = 2.4 // seconds for the corkscrew on send
const SPIN_TURNS = 2
const SPIN_TILT = 0.35 // radians (~20 degrees) the spin axis leans over
const SPIN_RISE = 0.5 // how high he climbs, as a fraction of his height

// The canvas extends beyond the panel he's framed in: HEADROOM above (up behind
// the page heading) so he can rise while spinning, FOOTROOM below so the idle
// bob never slices the bottom of the cloud, and SIDEROOM either side because
// the cloud's tail swings out while he spins. Must match the container's
// offsets in Contact.jsx.
const HEADROOM = 260
const FOOTROOM = 44
const SIDEROOM = 96

// Frame-rate independent easing towards a target.
const damp = (current, target, rate, dt) => current + (target - current) * (1 - Math.exp(-rate * dt))
const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2)

const NimbusGoku = ({ mode = 'idle', onSendEnd }) => {
  const containerRef = useRef(null)
  const modeRef = useRef(mode)
  const onSendEndRef = useRef(onSendEnd)
  onSendEndRef.current = onSendEnd

  useEffect(() => {
    const container = containerRef.current
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    container.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100)
    const rig = new THREE.Group() // everything that bobs, tilts and spins
    rig.rotation.order = 'YXZ' // yaw first, then lean in the facing direction
    scene.add(rig)

    const clock = new THREE.Clock()
    let frame = 0
    let visible = true
    let disposed = false
    let dims = null // model width/height, for framing
    let modelRef = null
    let restY = 0 // model's centred y before the perspective lift
    let nimbus = null
    let sendStart = null
    let spinFrom = 0 // yaw when the spin started
    let lastMode = modeRef.current
    const pose = { y: 0, pitch: 0, roll: 0, yaw: BASE_YAW }

    // Frame the model so, at rest, it fills the panel's height with an equal gap
    // above his hair and below the cloud, which lines him up with the form beside
    // him. Framed by height rather than the bounding box's width: the cloud has a
    // long wispy tail behind it that inflates the box but never faces the camera
    // at the angles used here. Constants below were measured on screen.
    const FILL = 0.85
    const LIFT = 0.01
    // Measured on screen: the visible model is ~1.1x taller than FILL predicts
    // (perspective) and at most ~0.72x as wide as it is tall (including the
    // turn while typing). Used to shrink him on narrow panels so the cloud
    // never gets clipped at the sides.
    const PERSPECTIVE = 1.1
    const WIDTH_RATIO = 0.72
    const fitCamera = () => {
      if (!dims) return
      const tanV = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2))
      const widthCap = (0.94 * camera.aspect) / (PERSPECTIVE * WIDTH_RATIO)
      const fill = Math.min(FILL, widthCap)
      camera.position.set(0, 0, dims.y / 2 / (tanV * fill))
      camera.lookAt(0, 0, 0)
      // Perspective stretches the near, lower part of the cloud slightly further
      // down the screen than the box centre suggests; a small lift re-centres him.
      if (modelRef) modelRef.position.y = restY + dims.y * LIFT
    }

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = container
      // The part beside the form that he's framed in.
      const panelW = w - 2 * SIDEROOM
      const panelH = h - HEADROOM - FOOTROOM
      if (panelW <= 0 || panelH <= 0) return
      renderer.setSize(w, h, false)
      camera.aspect = panelW / panelH
      // Frame for the panel alone, then extend the rendered view out into the
      // extra room, so it doesn't change his size or position.
      camera.setViewOffset(panelW, panelH, -SIDEROOM, -HEADROOM, w, h)
      fitCamera()
    }

    const update = (dt, t) => {
      if (!dims) return // model still loading; the loop can start before it arrives
      const current = modeRef.current
      // Start a spin only on the switch into 'send'. When it finishes we ask the
      // parent to go back to idle, but React updates a moment later; keying off
      // the transition stops that gap from starting a second spin.
      if (current !== lastMode) {
        sendStart = current === 'send' ? t : null
        spinFrom = pose.yaw
        lastMode = current
      }

      const typing = current === 'typing'
      const bobSpeed = typing ? 2.4 : 1.6
      // While typing he turns to face the form and leans forward, as if
      // reading along. Pitch is applied after yaw (see rotation order below),
      // so "forward" is always the direction he's facing.
      let target = {
        y: Math.sin(t * bobSpeed) * 0.025 * dims.y,
        pitch: typing ? 0.14 : 0,
        roll: typing ? 0 : Math.sin(t * 0.9) * 0.04,
        yaw: typing ? TYPING_YAW : BASE_YAW + Math.sin(t * 0.5) * 0.12,
      }

      if (sendStart !== null) {
        // Corkscrew: two turns eased in and out, with the body tilted over
        // (roll, applied inside the yaw, so the lean sweeps round as he spins)
        // and a smooth rise and fall that peaks mid-spin.
        const p = Math.min(1, (t - sendStart) / SPIN_DURATION)
        const arc = Math.sin(Math.PI * p) // 0 -> 1 -> 0
        pose.yaw = spinFrom + Math.PI * 2 * SPIN_TURNS * easeInOutCubic(p)
        pose.y = target.y + arc * arc * SPIN_RISE * dims.y
        pose.roll = arc * SPIN_TILT
        pose.pitch = damp(pose.pitch, 0, 6, dt)
        if (p >= 1) {
          // Unwrap the extra turns so easing back to the idle angle doesn't
          // spin him all the way round again in reverse.
          pose.yaw -= Math.PI * 2 * SPIN_TURNS
          sendStart = null
          onSendEndRef.current?.()
        }
      } else {
        pose.y = damp(pose.y, target.y, 6, dt)
        pose.pitch = damp(pose.pitch, target.pitch, 5, dt)
        pose.roll = damp(pose.roll, target.roll, 3, dt)
        pose.yaw = damp(pose.yaw, target.yaw, 3, dt)
      }

      rig.position.y = pose.y
      rig.rotation.set(pose.pitch, pose.yaw, pose.roll)
      if (nimbus) {
        // The cloud "breathes" a little on its own (sideways and up, not towards
        // the camera, which would make it look like it's lurching forwards).
        nimbus.scale.set(1 + Math.sin(t * 2.1) * 0.025, 1 + Math.sin(t * 2.1 + 1) * 0.02, 1)
      }
    }

    const render = () => renderer.render(scene, camera)

    const loop = () => {
      frame = requestAnimationFrame(loop)
      const dt = Math.min(clock.getDelta(), 0.1)
      update(dt, clock.elapsedTime)
      render()
    }

    const start = () => {
      cancelAnimationFrame(frame)
      clock.getDelta()
      if (reduceMotion || !visible || document.hidden) render()
      else loop()
    }

    const loader = new GLTFLoader()
    loader.setMeshoptDecoder(MeshoptDecoder)
    loader.load(modelUrl, (gltf) => {
      if (disposed) return
      const model = gltf.scene
      const box = new THREE.Box3().setFromObject(model, true) // precise: from vertices, not loose per-mesh boxes
      dims = box.getSize(new THREE.Vector3())
      model.position.sub(box.getCenter(new THREE.Vector3()))
      restY = model.position.y
      modelRef = model
      rig.add(model)
      nimbus = model.getObjectByName('nimbus')

      rig.rotation.y = BASE_YAW
      resize()
      start()
    })

    const resizeObserver = new ResizeObserver(() => {
      resize()
      // Resizing clears the canvas; redraw now rather than waiting for a frame.
      render()
    })
    resizeObserver.observe(container)

    const visibility = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      start()
    })
    visibility.observe(container)
    document.addEventListener('visibilitychange', start)

    return () => {
      disposed = true
      cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      visibility.disconnect()
      document.removeEventListener('visibilitychange', start)
      scene.traverse((obj) => {
        obj.geometry?.dispose()
        for (const m of [].concat(obj.material || [])) {
          for (const v of Object.values(m)) if (v?.isTexture) v.dispose()
          m.dispose()
        }
      })
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [])

  useEffect(() => {
    modeRef.current = mode
    // With reduced motion there's no spin to wait for; finish immediately.
    if (mode === 'send' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) onSendEndRef.current?.()
  }, [mode])

  return <div ref={containerRef} aria-hidden="true" className="w-full h-full" />
}

export default NimbusGoku
