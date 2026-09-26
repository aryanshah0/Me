# Aryan Shah: Portfolio

Personal site for Aryan Shah, a full-stack engineer building cloud infrastructure at E2E Cloud.

**Live:** https://aryan-shah.vercel.app

Built with React 18, Vite, Tailwind CSS and Framer Motion, with a Dragon Ball (Goku) theme: _saiyan_ orange, _kamehameha_ blue and a subtle ki-energy background.

## Editing content

Almost everything you'd want to update lives in **`src/data/profile.js`**:

| What                                  | Export                                       |
| ------------------------------------- | -------------------------------------------- |
| Headline, summary, email, résumé link | `HEADLINE`, `SUMMARY`, `EMAIL`, `RESUME_URL` |
| Jobs and TA roles (newest first)      | `EXPERIENCE`                                 |
| School and university                 | `EDUCATION`                                  |
| Work highlights shown on /projects    | `WORK_HIGHLIGHTS`                            |
| Side projects                         | `PROJECTS`                                   |
| Skills bubbles (inner ring to outer)  | `SKILL_RINGS`                                |
| Certifications                        | `CERTIFICATIONS`                             |
| Social links                          | `SOCIALS`                                    |

To replace the résumé, overwrite `public/aryan-shah-resume.pdf`. The URL stays the same, so links shared earlier keep working.

When pages change, bump the `<lastmod>` dates in `public/sitemap.xml`.

## Development

```bash
npm install
npm run dev      # dev server (client-rendered)
npm run build    # production build + prerender
npm run preview  # serve dist/ with the same clean URLs and 404 handling as Vercel
npm run lint
npm run format   # Prettier (config in .prettierrc.json)
```

The contact form uses [EmailJS](https://www.emailjs.com/). Set these in `.env` locally and in the Vercel project settings:

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

## How the build works

`npm run build` does three things:

1. `vite build` builds the client bundle into `dist/`.
2. `vite build --ssr src/entry-server.jsx` builds a server-render bundle.
3. `scripts/prerender.js` renders every route to static HTML (`index.html`, `about.html`, `projects.html`, `contact.html`, `gallery.html`, `404.html`), including per-page `<title>`, description, canonical and Open Graph tags.

Search engines and link-preview bots (LinkedIn, X, WhatsApp, Slack) that don't run JavaScript still see real content and the right preview card. In the browser, React hydrates the prerendered HTML.

To add a page, create it in `src/pages/`, add a `<Route>` in `src/App.jsx`, add it to `ROUTES` in `scripts/prerender.js` and to `public/sitemap.xml`, and give it a `<Seo title=… path=… description=… />`.

`vercel.json` enables `cleanUrls`, so `/about` serves `about.html`. Unknown URLs get `404.html` with a real 404 status.

## Theme

- The initial light/dark theme is set by an inline script in `index.html` before first paint, so there's no flash.
- With no saved choice, the site follows the OS setting. Clicking the toggle saves a choice.
- The background ("Goku energy") is the same in both themes: CSS glows on `<body>` plus rising ki sparks drawn by `src/components/KiBackground.jsx`. It pauses when the tab is hidden and stays still for visitors who prefer reduced motion.
- Accent colors have `ink` variants (`text-saiyan-ink`, `text-kamehameha-ink`) for text on the light background, where the bright accents fail WCAG AA contrast.

## Credits

- 3D model on the contact page: ["Son Goku and Kintoun Nimbus"](https://sketchfab.com/3d-models/son-goku-and-kintoun-nimbus-0e05229282e644ab978d7d9c09ab4ec2) by [Antouss](https://sketchfab.com/antouss), licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Compressed for the web as `src/assets/3d/goku-nimbus.glb`; the model is static and all motion is done in code (`src/components/NimbusGoku.jsx`).
