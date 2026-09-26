import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { SKILL_RINGS } from '../data/profile'

import { layout, PRESETS } from './skillLayout'

// Skills orbiting a centre bubble. Positions come from skillLayout.js, solved
// separately for desktop, tablet and phone so bubbles never overlap; CSS
// variables pick the right set per breakpoint (see .skill-bubble in index.css).
const LAYOUTS = Object.fromEntries(Object.entries(PRESETS).map(([k, preset]) => [k, layout(SKILL_RINGS, preset)]))
const NAMES = SKILL_RINGS.flat()

const positionVars = (name) => {
  const vars = {}
  for (const [k, pos] of Object.entries(LAYOUTS)) {
    vars[`--left-${k}`] = `${pos[name].left.toFixed(2)}%`
    vars[`--top-${k}`] = `${pos[name].top.toFixed(2)}%`
  }
  return vars
}

const Skills = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  // 'static' on the server and first paint (bubbles already in place, so the
  // prerendered page is complete), 'waiting' once hydrated if the section is
  // below the fold, then 'fly' when scrolled into view: a CSS animation out
  // from the centre. If it's already on screen at mount, it stays 'static'
  // (useInView starts false before its observer fires, so measure directly).
  const [phase, setPhase] = useState('static')

  useEffect(() => {
    const rect = ref.current.getBoundingClientRect()
    const onScreen = rect.top < window.innerHeight && rect.bottom > 0
    if (!onScreen) setPhase('waiting')
  }, [])

  useEffect(() => {
    if (inView) setPhase((p) => (p === 'waiting' ? 'fly' : p))
  }, [inView])

  return (
    <section aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="section-heading">
        Skills
      </h2>
      <div
        ref={ref}
        className="w-full aspect-[4/3] mx-auto relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm md:aspect-[5/8]"
      >
        <p className="flex justify-center items-center whitespace-nowrap select-none bg-dark text-light dark:bg-light dark:text-dark w-28 h-28 lg:w-24 lg:h-24 md:w-20 md:h-20 md:text-xs xs:w-16 xs:h-16 xs:text-[10px] font-bold rounded-full">
          Full-stack
        </p>
        <ul aria-label="Skills">
          {NAMES.map((name) => (
            <li
              key={name}
              className={`skill-bubble absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap select-none bg-dark text-light dark:bg-light dark:text-dark font-semibold rounded-full py-3 px-6 lg:py-2 lg:px-4 md:py-1 md:px-2.5 md:text-xs xs:py-0.5 xs:px-2 xs:text-[10px] transition-transform hover:scale-110 ${phase === 'waiting' ? 'skill-bubble--waiting' : ''} ${phase === 'fly' ? 'skill-bubble--fly' : ''}`}
              style={positionVars(name)}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
