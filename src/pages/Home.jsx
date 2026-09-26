import { Link } from 'react-router-dom'
import goku from '../assets/images/goku.webp'
import AnimatedText from '../components/AnimatedText'
import HireMe from '../components/HireMe'
import Seo from '../components/Seo'
import TransitionEffect from '../components/TransitionEffect'
import { LinkArrow } from '../components/Icons'
import { RESUME_URL, SUMMARY } from '../data/profile'

const Home = () => (
  <>
    <Seo path="/" />
    <TransitionEffect />

    <main id="main" className="relative flex items-center text-dark dark:text-light w-full min-h-[calc(100vh-8rem)]">
      <div className="w-full h-full inline-block z-0 p-32 pt-0 xl:p-24 xl:pt-0 lg:p-16 lg:pt-0 md:p-12 md:pt-16 sm:p-8 sm:pt-8">
        <div className="flex items-center justify-between w-full lg:flex-col">
          <div className="w-1/2 py-8 lg:hidden md:block md:w-full md:max-w-sm md:mx-auto">
            <img
              src={goku}
              width={800}
              height={755}
              // React 18 only knows the lowercase attribute; spread keeps the linter happy.
              {...{ fetchpriority: 'high' }}
              alt="Illustration of Goku, the portfolio's mascot"
              className="hero-float w-full h-auto"
            />
          </div>

          <section className="w-1/2 flex flex-col items-start self-center lg:w-full lg:items-center lg:text-center">
            <p className="font-semibold text-xl text-saiyan-ink dark:text-saiyan md:text-lg">Hi, I’m Aryan Shah 👋</p>
            <AnimatedText
              text="From Concept to Code, Watch Ideas Explode"
              className="!text-6xl !text-left xl:!text-5xl lg:!text-center md:!text-4xl sm:!text-3xl"
            />

            <p className="my-4 text-base font-medium md:text-sm">{SUMMARY}</p>

            <div className="flex items-center gap-4 mt-2">
              <a href={RESUME_URL} target="_blank" rel="noopener" className="btn-primary">
                Résumé <LinkArrow className="w-6 ml-1" />
              </a>
              <Link
                to="/projects"
                className="text-lg font-medium underline underline-offset-4 md:text-base hover:text-saiyan-ink dark:hover:text-saiyan"
              >
                See my work
              </Link>
            </div>
          </section>
        </div>
      </div>

      <HireMe />
    </main>
  </>
)

export default Home
