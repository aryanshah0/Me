import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import ListIcon from './ListIcon'

const TimelineItem = ({ role, org, href, period, location, points }) => {
  const ref = useRef(null)

  return (
    <li ref={ref} className="my-8 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]">
      <ListIcon reference={ref} />
      <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, type: 'spring' }}>
        <h3 className="font-bold text-2xl sm:text-xl xs:text-lg">
          {role}&nbsp;
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-saiyan-ink dark:text-saiyan underline decoration-2 decoration-saiyan/40 underline-offset-4 hover:decoration-saiyan"
          >
            @{org}
          </a>
        </h3>
        <p className="font-medium text-dark/75 dark:text-light/75 sm:text-sm">
          <time>{period}</time> | {location}
        </p>
        {points.length === 1 ? (
          <p className="font-medium w-full mt-1 md:text-sm">{points[0]}</p>
        ) : (
          <ul className="mt-2 space-y-1.5 list-disc pl-5 marker:text-saiyan font-medium md:text-sm">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}
      </motion.div>
    </li>
  )
}

const Timeline = ({ title, items }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center start'] })

  return (
    <section aria-labelledby={`${title}-heading`}>
      <h2 id={`${title}-heading`} className="section-heading mb-16">
        {title}
      </h2>
      <div ref={ref} className="w-[75%] lg:w-[90%] md:w-full mx-auto relative">
        <motion.div
          aria-hidden="true"
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-gradient-to-b from-saiyan to-kamehameha origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {items.map((item) => (
            <TimelineItem key={item.role + item.period} {...item} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Timeline
