import { useCallback, useEffect, useSyncExternalStore } from 'react'

// The initial theme is applied by an inline script in index.html before first
// paint (no light flash for dark-mode users). This hook only reads the class
// that script set and keeps it in sync afterwards.
//
// Rules:
// - With no saved choice, follow the OS setting, live.
// - Clicking the toggle saves an explicit choice, which then wins.

const STORAGE_KEY = 'theme'
const media = () => window.matchMedia('(prefers-color-scheme: dark)')

const readSaved = () => {
  try {
    return window.localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

const apply = (mode) => {
  document.documentElement.classList.toggle('dark', mode === 'dark')
}

const subscribe = (callback) => {
  const observer = new MutationObserver(callback)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  return () => observer.disconnect()
}

const getSnapshot = () => (document.documentElement.classList.contains('dark') ? 'dark' : 'light')
// Prerendered HTML has no idea of the visitor's theme; React re-renders the
// toggle icon right after hydration using the client snapshot.
const getServerSnapshot = () => 'dark'

const useThemeSwitcher = () => {
  const mode = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  useEffect(() => {
    const mq = media()
    const onChange = () => {
      if (!readSaved()) apply(mq.matches ? 'dark' : 'light')
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const setMode = useCallback((next) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Private mode or blocked storage: the choice just won't persist.
    }
    apply(next)
  }, [])

  return [mode, setMode]
}

export default useThemeSwitcher
