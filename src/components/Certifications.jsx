import { motion } from 'framer-motion'
import { CERTIFICATIONS } from '../data/profile'

const Certifications = () => (
  <section aria-labelledby="certs-heading">
    <h2 id="certs-heading" className="section-heading mb-16">
      Certifications
    </h2>
    <ul className="w-[75%] lg:w-[90%] md:w-full mx-auto grid grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-8">
      {CERTIFICATIONS.map(({ name, image, href }) => (
        <li key={name}>
          <motion.a
            whileHover={{ scale: 1.08 }}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 text-center"
          >
            <img src={image} alt="" width={160} height={160} loading="lazy" decoding="async" className="h-40 w-full object-contain" />
            <span className="text-sm font-semibold">{name}</span>
          </motion.a>
        </li>
      ))}
    </ul>
  </section>
)

export default Certifications
