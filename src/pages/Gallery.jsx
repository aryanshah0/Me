import Seo from '../components/Seo'
import TransitionEffect from '../components/TransitionEffect'

// Hidden from navigation and the sitemap until there are photos to show.
const Gallery = () => (
  <>
    <Seo title="Gallery" path="/gallery" description="Photography by Aryan Shah. Coming soon." noindex />
    <TransitionEffect />
    <main id="main" className="min-h-[67vh] w-full flex items-center justify-center">
      <h1 className="text-5xl text-dark dark:text-light font-bold animate-pulse">Coming soon…</h1>
    </main>
  </>
)

export default Gallery
