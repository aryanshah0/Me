import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import Seo from '../components/Seo'
import TransitionEffect from '../components/TransitionEffect'
import { GithubIcon } from '../components/Icons'
import { PROJECTS, WORK_HIGHLIGHTS } from '../data/profile'

const StackList = ({ stack }) => (
  <ul className="flex flex-wrap gap-2 mt-3" aria-label="Tech stack">
    {stack.map((s) => (
      <li key={s} className="text-xs font-semibold rounded-full border border-dark/30 dark:border-light/30 px-2.5 py-1">
        {s}
      </li>
    ))}
  </ul>
)

const ProjectLinks = ({ title, live, github }) => (
  <div className="mt-4 flex items-center gap-4">
    <a href={github} target="_blank" rel="noopener noreferrer" aria-label={`${title} source code on GitHub`} className="w-10 md:w-8">
      <GithubIcon />
    </a>
    {live && (
      <a href={live} target="_blank" rel="noopener noreferrer" className="btn-primary">
        View live<span className="sr-only">: {title}</span>
      </a>
    )}
  </div>
)

const ProjectCard = ({ title, description, stack, image, imageAlt, live, github, featured }) => {
  const href = live || github
  return (
    <article
      className={`w-full h-full flex relative rounded-3xl border border-solid border-dark dark:border-light bg-light dark:bg-dark text-dark dark:text-light ${
        featured ? 'items-center justify-between shadow-2xl p-10 lg:flex-col lg:p-8 xs:p-4' : 'flex-col items-start p-6 xs:p-4'
      }`}
    >
      <div
        aria-hidden="true"
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 xs:w-full"
      />

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden="true"
        className={`overflow-hidden rounded-2xl ${featured ? 'w-1/2 lg:w-full' : 'w-full'}`}
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src={image}
          alt={imageAlt}
          loading={featured ? 'eager' : 'lazy'}
          decoding="async"
          className="w-full h-auto aspect-video object-cover object-top"
        />
      </a>

      <div className={`flex flex-col items-start ${featured ? 'w-1/2 pl-6 lg:w-full lg:pl-0 lg:pt-6' : 'w-full mt-4'}`}>
        <span className="text-kamehameha-ink dark:text-kamehameha font-medium text-xl xs:text-base">
          {featured ? 'Featured project' : 'Side project'}
        </span>
        <h3 className={`my-2 font-bold ${featured ? 'text-4xl sm:text-2xl' : 'text-3xl lg:text-2xl'}`}>{title}</h3>
        <p className="font-medium text-dark/80 dark:text-light/80 sm:text-sm">{description}</p>
        <StackList stack={stack} />
        <ProjectLinks title={title} live={live} github={github} />
      </div>
    </article>
  )
}

const Projects = () => (
  <>
    <Seo
      title="Projects"
      path="/projects"
      description="Cloud products Aryan Shah has shipped at E2E Cloud (VM auto scaling, VM images, E2E Marketplace) and full-stack side projects built with React, Node.js and MongoDB."
    />
    <TransitionEffect />

    <main id="main" className="flex flex-col items-center justify-center w-full">
      <div className="w-full h-full inline-block z-0 text-dark dark:text-light p-32 pt-0 xl:p-24 xl:pt-0 lg:p-16 lg:pt-0 md:p-12 md:pt-0 sm:p-8 sm:pt-0">
        <AnimatedText text="Where Ideas Meet Execution" className="mb-10 lg:!text-7xl sm:mb-8 sm:!text-5xl xs:!text-4xl" />

        <section aria-labelledby="work-heading" className="mb-24">
          <h2 id="work-heading" className="text-4xl font-bold mb-2 sm:text-3xl">
            Shipped at E2E Cloud
          </h2>
          <p className="font-medium text-dark/75 dark:text-light/75 mb-8">
            Production features in public cloud consoles. The code is private, so here’s what they do.
          </p>
          <ul className="grid grid-cols-2 gap-8 md:grid-cols-1">
            {WORK_HIGHLIGHTS.map(({ title, product, description }) => (
              <li
                key={title}
                className="rounded-2xl border-2 border-dark dark:border-light/60 bg-light/60 dark:bg-dark/60 backdrop-blur-sm p-8 sm:p-6 border-l-8 border-l-saiyan dark:border-l-saiyan"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-kamehameha-ink dark:text-kamehameha">{product}</p>
                <h3 className="text-2xl font-bold mt-1">{title}</h3>
                <p className="font-medium mt-2 text-dark/80 dark:text-light/80">{description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="side-heading">
          <h2 id="side-heading" className="text-4xl font-bold mb-10 sm:text-3xl">
            Side projects
          </h2>
          <ul className="grid grid-cols-12 gap-24 gap-y-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-16 sm:gap-x-0">
            {PROJECTS.map((p) => (
              <li key={p.title} className={p.featured ? 'col-span-12' : 'col-span-6 sm:col-span-12'}>
                <ProjectCard {...p} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  </>
)

export default Projects
