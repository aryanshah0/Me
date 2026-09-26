// Build-time prerendering: renders every route to static HTML so crawlers and
// link-preview bots (LinkedIn, X, WhatsApp, Slack) that don't run JavaScript
// still see real content and the right per-page title, description and image.
//
// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const serverDir = path.join(root, 'dist-server')

// [route, output file]. cleanUrls in vercel.json serves /about from about.html;
// 404.html is what Vercel returns (with a real 404 status) for unknown paths.
const ROUTES = [
  ['/', 'index.html'],
  ['/about', 'about.html'],
  ['/projects', 'projects.html'],
  ['/contact', 'contact.html'],
  ['/gallery', 'gallery.html'],
  ['/404', '404.html'],
]

const { render } = await import(pathToFileURL(path.join(serverDir, 'entry-server.js')).href)
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8')

for (const [url, file] of ROUTES) {
  const { html, head } = render(url)
  const page = template.replace('<!--app-head-->', () => head).replace('<!--app-html-->', () => html)
  fs.writeFileSync(path.join(dist, file), page)
  console.log(`prerendered ${url.padEnd(10)} -> dist/${file}`)
}

fs.rmSync(serverDir, { recursive: true, force: true })
