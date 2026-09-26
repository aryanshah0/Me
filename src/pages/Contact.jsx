import { Suspense, lazy, useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedText from '../components/AnimatedText'
import Seo from '../components/Seo'
import TransitionEffect from '../components/TransitionEffect'
import { EMAIL } from '../data/profile'

// three.js + the model are only fetched on desktop, where Goku is shown.
const NimbusGoku = lazy(() => import('../components/NimbusGoku'))

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
  // Goku on Nimbus: floats by default, leans in while typing, spins on send.
  const [pose, setPose] = useState('idle') // idle | typing | send
  const [showGoku, setShowGoku] = useState(false)

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)')
    const update = () => setShowGoku(desktop.matches)
    update()
    desktop.addEventListener('change', update)
    return () => desktop.removeEventListener('change', update)
  }, [])

  const handleFocus = () => setPose((p) => (p === 'send' ? p : 'typing'))
  const handleBlur = (e) => {
    // Keep leaning in while focus moves between fields of the form.
    if (!e.currentTarget.contains(e.relatedTarget)) setPose((p) => (p === 'send' ? p : 'idle'))
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setPose('send')
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

          <div className="w-full grid grid-cols-5 items-stretch gap-16 lg:grid-cols-1 lg:gap-12">
            <form
              onSubmit={handleSubmit}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="col-span-3 lg:col-span-1 flex flex-col gap-5"
              aria-describedby="form-status"
            >
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

            {/* Goku sits beside the form. His drawing area spans exactly from the
                top of the form to the bottom of the Send button (the form box also
                holds the status line below it: 1.5em + gap-5 = bottom-11), and the
                model is framed to fill that height, so he lines up with the form. */}
            <div className="col-span-2 lg:hidden relative min-h-[420px]">
              {/* The canvas also reaches 260px up, 44px down and 96px to each side
                  (HEADROOM / FOOTROOM / SIDEROOM in NimbusGoku.jsx) so he can corkscrew
                  and bob without being clipped; it sits behind the text and ignores the mouse. */}
              <div className="absolute -inset-x-24 -top-[260px] bottom-0 -z-[1] pointer-events-none">
                {showGoku && (
                  <Suspense fallback={null}>
                    <NimbusGoku mode={pose} onSendEnd={() => setPose('idle')} />
                  </Suspense>
                )}
              </div>
              <p className="absolute inset-x-0 bottom-0 text-xs text-center text-dark/60 dark:text-light/60">
                Model:{' '}
                <a
                  href="https://sketchfab.com/3d-models/son-goku-and-kintoun-nimbus-0e05229282e644ab978d7d9c09ab4ec2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                  “Son Goku and Kintoun Nimbus”
                </a>{' '}
                by Antouss ·{' '}
                <a
                  href="https://creativecommons.org/licenses/by/4.0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                  CC BY 4.0
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Contact
