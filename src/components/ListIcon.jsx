import { motion, useScroll, useTransform } from 'framer-motion'

const ListIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({ target: reference, offset: ['center end', 'center center'], layoutEffect: false })

  const fillColor = useTransform(scrollYProgress, [0, 1], ['rgba(255, 255, 255, 1)', 'rgba(254, 90, 16, 1)'])

  return (
    <figure aria-hidden="true" className="absolute left-0 stroke-dark dark:stroke-light">
      <svg className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]" width={75} height={75} viewBox="0 0 100 100">
        <circle cx="75" cy="50" r="20" className="stroke-gray-300 stroke-1 fill-none" />
        <motion.circle style={{ pathLength: scrollYProgress }} cx="75" cy="50" r="20" className="stroke-[5px] fill-light dark:fill-dark" />
        <motion.circle style={{ fill: fillColor }} cx="75" cy="50" r="10" className="stroke-1" />
      </svg>
    </figure>
  )
}

export default ListIcon
