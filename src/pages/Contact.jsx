import { useState } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedText from '../components/AnimatedText'
import Seo from '../components/Seo'
import SocialLinks from '../components/SocialLinks'
import TransitionEffect from '../components/TransitionEffect'
import { EMAIL } from '../data/profile'

const EMPTY = { name: '', email: '', message: '' }

const fieldClass =
  'w-full bg-light/70 dark:bg-dark/70 border-2 border-dark/20 dark:border-light/30 backdrop-blur-sm placeholder:text-dark/50 dark:placeholder:text-light/50 py-2.5 px-3 rounded-lg focus:outline-none focus-visible:outline-none focus:border-kamehameha transition-colors'

const Field = ({ id, label, as: Tag = 'input', ...props }) => (
  <div className="flex flex-col gap-1.5">
    <label htmlFor={id} className="font-semibold">
      {label}
    </label>
    <Tag id={id} name={id} required className={fieldClass} {...props} />
  </div>
)

const Contact = () => {
  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: form.name, to_name: 'Aryan Shah', from_email: form.email, to_email: EMAIL, message: form.message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus('sent')
        setForm(EMPTY)
      })
      .catch(() => setStatus('error'))
  }

  return (
    <>
      <Seo
        title="Contact"
        path="/contact"
        description="Contact Aryan Shah about full-stack and cloud engineering roles, collaborations or just to say hello. Email, LinkedIn or the contact form."
      />
      <TransitionEffect />

      <main id="main" className="flex flex-col justify-center items-center w-full">
        <div className="w-full h-full inline-block z-0 text-dark dark:text-light p-32 pt-0 pb-16 xl:p-24 xl:pt-0 lg:p-16 lg:pt-0 md:p-12 md:pt-0 sm:p-8 sm:pt-0">
          <AnimatedText text="Get in Touch" className="mb-10 lg:!text-7xl sm:mb-8 sm:!text-5xl xs:!text-4xl" />

          <div className="w-full grid grid-cols-5 gap-16 lg:grid-cols-1 lg:gap-12">
            <form onSubmit={handleSubmit} className="col-span-3 lg:col-span-1 flex flex-col gap-5" aria-describedby="form-status">
              <Field
                id="name"
                label="Name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
              />
              <Field
                id="email"
                label="Email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
              <Field
                id="message"
                label="Message"
                as="textarea"
                rows={6}
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to talk about?"
              />

              <button type="submit" disabled={status === 'sending'} className="btn-primary self-start disabled:opacity-60">
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>

              <p id="form-status" role="status" aria-live="polite" className="font-medium min-h-[1.5em]">
                {status === 'sent' && (
                  <span className="text-green-700 dark:text-green-400">Thanks! Your message is on its way. I’ll get back to you soon.</span>
                )}
                {status === 'error' && (
                  <span className="text-red-700 dark:text-red-400">
                    Something went wrong sending that. Please email me directly at{' '}
                    <a className="underline" href={`mailto:${EMAIL}`}>
                      {EMAIL}
                    </a>
                    .
                  </span>
                )}
              </p>
            </form>

            <aside className="col-span-2 lg:col-span-1 rounded-2xl border-2 border-dark dark:border-light/60 bg-light/60 dark:bg-dark/60 backdrop-blur-sm p-8 sm:p-6 h-max">
              <h2 className="text-2xl font-bold">Prefer email?</h2>
              <p className="font-medium mt-2 text-dark/80 dark:text-light/80">
                I’m always happy to talk about full-stack and cloud engineering work, interesting problems, or anime.
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-block mt-4 text-lg font-semibold text-saiyan-ink dark:text-saiyan underline underline-offset-4 break-all"
              >
                {EMAIL}
              </a>
              <h2 className="text-2xl font-bold mt-8 mb-4">Elsewhere</h2>
              <SocialLinks iconClassName="w-7" />
              <p className="font-medium mt-8 text-dark/80 dark:text-light/80">Based in Delhi, India.</p>
            </aside>
          </div>
        </div>
      </main>
    </>
  )
}

export default Contact
