import { motion } from 'framer-motion'
import { GithubIcon, LinkedInIcon, InstagramIcon, TwitterIcon } from './Icons'
import { SOCIALS } from '../data/profile'

const ICONS = {
  GitHub: GithubIcon,
  LinkedIn: LinkedInIcon,
  'X (Twitter)': (props) => <TwitterIcon {...props} className="rounded-md" />,
  Instagram: InstagramIcon,
}

const SocialLinks = ({ className = '', iconClassName = 'w-6' }) => (
  <ul className={`flex items-center gap-5 ${className}`}>
    {SOCIALS.map(({ name, href }) => {
      const Icon = ICONS[name]
      return (
        <li key={name}>
          <motion.a
            whileHover={{ y: -4 }}
            href={href}
            target="_blank"
            rel="noopener noreferrer me"
            aria-label={`${name} (opens in a new tab)`}
            className={`block ${iconClassName}`}
          >
            <Icon />
          </motion.a>
        </li>
      )
    })}
  </ul>
)

export default SocialLinks
