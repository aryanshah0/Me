import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import '@fontsource-variable/montserrat'
import App from './App.jsx'
import './index.css'

const app = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
)

const root = document.getElementById('root')
// Production pages are prerendered (see scripts/prerender.js), so hydrate them;
// the dev server serves an empty root, so render from scratch there.
if (root.firstElementChild) hydrateRoot(root, app)
else createRoot(root).render(app)
