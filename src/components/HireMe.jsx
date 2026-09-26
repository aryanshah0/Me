import { Link } from 'react-router-dom'
import { CircularText } from './Icons'

const HireMe = () => (
  <div className="fixed left-4 bottom-4 z-10 lg:hidden flex justify-center items-center overflow-hidden">
    <div className="w-40 h-auto flex items-center justify-center relative md:w-24">
      <CircularText className="animate-spin-slow fill-dark dark:fill-light" />
      <Link
        to="/contact"
        className="flex items-center justify-center text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light dark:bg-light dark:text-dark w-20 h-20 rounded-full shadow-md border-2 border-transparent hover:border-saiyan dark:hover:border-kamehameha md:w-11 md:h-11 md:text-[10px]"
      >
        Hire Me
      </Link>
    </div>
  </div>
)

export default HireMe
