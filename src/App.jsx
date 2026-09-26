import { Suspense, lazy, useEffect, useRef, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageNotFound from './components/PageNotFound'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'

// Purely decorative, so it's split out and only mounted after hydration.
const KiBackground = lazy(() => import('./components/KiBackground'))

// On client-side navigation: start the new page at the top and move keyboard /
// screen-reader focus to its content, like a normal page load would.
const useRouteChangeReset = () => {
  const { pathname } = useLocation()
  // Compare against the last path rather than a "first run" flag, so
  // StrictMode's double effect run on mount doesn't count as a navigation.
  const lastPath = useRef(pathname)
  useEffect(() => {
    if (lastPath.current === pathname) return
    lastPath.current = pathname
    // 'instant' overrides `scroll-behavior: smooth` on <html> for this jump.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    const main = document.getElementById('main')
    if (main) {
      main.setAttribute('tabindex', '-1')
      main.focus({ preventScroll: true })
    }
  }, [pathname])
}

function App() {
  useRouteChangeReset()

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <MotionConfig reducedMotion="user">
      <div className="w-full min-h-screen font-sans">
        {mounted && (
          <Suspense fallback={null}>
            <KiBackground />
          </Suspense>
        )}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </MotionConfig>
  )
}

export default App
