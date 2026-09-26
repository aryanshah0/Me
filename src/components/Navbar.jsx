import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from './Logo'
import SocialLinks from './SocialLinks'
import { MoonIcon, SunIcon } from './Icons'
import useThemeSwitcher from '../hooks/useThemeSwitcher'

const LINKS = [
  { to: '/about', title: 'About' },
  { to: '/projects', title: 'Projects' },
  { to: '/contact', title: 'Contact' },
]

const CustomLink = ({ to, title }) => (
  <NavLink to={to} className="relative group py-1">
    {({ isActive }) => (
      <>
        {title}
        <span
          aria-hidden="true"
          className={`h-[2px] inline-block bg-saiyan absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${isActive ? 'w-full' : 'w-0'}`}
        />
      </>
    )}
  </NavLink>
)

const ThemeToggle = ({ mode, setMode, className = '' }) => {
  const next = mode === 'dark' ? 'light' : 'dark'
  return (
    <button
      type="button"
      onClick={() => setMode(next)}
      aria-label={`Switch to ${next} mode`}
      className={`flex items-center justify-center rounded-full p-1 w-9 h-9 ${mode === 'dark' ? 'bg-light text-dark' : 'bg-dark text-light'} ${className}`}
    >
      {mode === 'dark' ? <SunIcon className="fill-dark" /> : <MoonIcon className="fill-light" />}
    </button>
  )
}

const menuVariants = {
  initial: { scale: 0.9, opacity: 0, x: '-50%', y: '-50%' },
  animate: { scale: 1, opacity: 1, x: '-50%', y: '-50%' },
  exit: { scale: 0.9, opacity: 0, x: '-50%', y: '-50%' },
}

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher()
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    setIsOpen(false)
  }, [location.key])

  // Escape closes the mobile menu; focus moves into it on open and back to the button on close.
  useEffect(() => {
    if (!isOpen) return
    menuRef.current?.querySelector('a')?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen])

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between text-dark dark:text-light relative z-20 lg:px-16 md:px-12 sm:px-8">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-dark focus:text-light focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Skip to content
      </a>

      <button
        ref={buttonRef}
        type="button"
        className="hidden lg:flex flex-col justify-center items-center w-10 h-10"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-in block h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}
        />
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-in block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
        />
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-in block h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}
        />
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav aria-label="Primary">
          <ul className="flex items-center gap-8">
            {LINKS.map((l) => (
              <li key={l.to}>
                <CustomLink {...l} />
              </li>
            ))}
          </ul>
        </nav>

        <SocialLinks className="mr-8" />
      </div>

      <ThemeToggle mode={mode} setMode={setMode} className="shrink-0" />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.2 }}
            className="min-w-[70vw] flex flex-col justify-between gap-10 items-center fixed top-1/2 left-1/2 z-30 bg-light/90 dark:bg-dark/90 backdrop-blur-md py-10 rounded-2xl shadow-2xl border border-dark/10 dark:border-light/20"
          >
            <nav aria-label="Mobile">
              <ul className="flex flex-col justify-center items-center gap-y-6 text-lg">
                <li>
                  <CustomLink to="/" title="Home" />
                </li>
                {LINKS.map((l) => (
                  <li key={l.to}>
                    <CustomLink {...l} />
                  </li>
                ))}
              </ul>
            </nav>
            <SocialLinks className="gap-4" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute left-1/2 -translate-x-1/2">
        <Logo />
      </div>
    </header>
  )
}

export default Navbar
