import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from '../assets/images/logo.webp'

// Created once at module scope; calling motion(Link) inside render would
// produce a brand-new component (and remount the link) on every render.
const MotionLink = motion(Link)

const Logo = () => (
  <div className="flex items-center justify-center mt-2">
    <MotionLink
      to="/"
      aria-label="Aryan Shah, home"
      className="bg-dark w-14 h-14 flex justify-center items-center rounded-full border-[3px] border-solid border-transparent dark:border-light"
      whileHover={{ scale: 1.2, transition: { type: 'spring', stiffness: 400, damping: 10 } }}
      whileTap={{ scale: 0.9 }}
    >
      <img
        src={logo}
        width={48}
        height={48}
        alt=""
        className="w-12 h-12 bg-light rounded-full hover:bg-saiyan dark:hover:bg-kamehameha dark:invert"
      />
    </MotionLink>
  </div>
)

export default Logo
