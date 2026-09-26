import { Link } from 'react-router-dom'
import Seo from './Seo'

const PageNotFound = () => (
  <>
    <Seo title="Page not found" noindex />
    <main
      id="main"
      className="w-full min-h-[calc(100vh-12rem)] flex flex-col gap-8 items-center justify-center px-8 text-center text-dark dark:text-light"
    >
      <p className="text-8xl font-bold text-saiyan-ink dark:text-saiyan">404</p>
      <h1 className="text-4xl font-bold sm:text-2xl">This page went Super Saiyan and vanished.</h1>
      <Link to="/" className="btn-primary">
        Back to home
      </Link>
    </main>
  </>
)

export default PageNotFound
