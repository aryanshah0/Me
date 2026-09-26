import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { EMAIL } from '../data/profile'

const Footer = () => {
  // Start from the build year so the prerendered HTML and hydration match,
  // then switch to the visitor's current year once mounted.
  const [year, setYear] = useState(__BUILD_YEAR__)
  useEffect(() => setYear(new Date().getFullYear()), [])

  return (
    <footer className="w-full border-t-2 border-solid border-dark dark:border-light/40 text-lg font-medium text-dark dark:text-light sm:text-base">
      <div className="px-32 py-8 flex items-center justify-between gap-4 xl:px-24 lg:px-16 lg:flex-col lg:py-6 md:px-12 sm:px-8">
        <span>© {year} Aryan Shah · Delhi, India</span>
        <span>
          <Link to="/contact" className="underline underline-offset-4 hover:text-saiyan-ink dark:hover:text-saiyan">
            Say hello
          </Link>
          {' · '}
          <a href={`mailto:${EMAIL}`} className="underline underline-offset-4 hover:text-saiyan-ink dark:hover:text-saiyan">
            Email
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
