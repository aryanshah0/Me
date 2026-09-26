import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 3D model for the contact page (src/assets/3d), emitted as a hashed asset.
  assetsInclude: ['**/*.glb'],
  define: {
    // Footer copyright year baked into the prerendered HTML (see Footer.jsx).
    __BUILD_YEAR__: JSON.stringify(new Date().getFullYear()),
  },
  ssr: {
    // CommonJS package whose named exports Node can't resolve at prerender time.
    noExternal: ['react-helmet-async'],
  },
})
