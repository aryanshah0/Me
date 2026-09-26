import { Helmet } from 'react-helmet-async'
import { SITE_URL, HEADLINE } from '../data/profile'

const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`
export const DEFAULT_DESCRIPTION =
  'Aryan Shah, full-stack engineer at E2E Cloud in Delhi building GPU cloud consoles. LNMIIT Jaipur graduate, schooled in Jamnagar, ex-intern in Mumbai.'

const Seo = ({ title, description = DEFAULT_DESCRIPTION, path, image = DEFAULT_IMAGE, noindex = false }) => {
  const url = path !== undefined ? `${SITE_URL}${path}` : null
  const fullTitle = title ? `${title} | Aryan Shah` : `Aryan Shah | ${HEADLINE}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {url && <link rel="canonical" href={url} />}
      {noindex && <meta name="robots" content="noindex, follow" />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Aryan Shah, full-stack engineer building cloud infrastructure" />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content={path === '/about' ? 'profile' : 'website'} />
      <meta property="og:site_name" content="Aryan Shah" />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@4ryanshah" />
      <meta name="twitter:creator" content="@4ryanshah" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}

export default Seo
