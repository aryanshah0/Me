// Orange / white / blue colour wipe that plays when a page appears, on the
// first load and on every navigation (each page mounts fresh panels).
// It's a CSS animation (.wipe in index.css) rather than JS so it also runs
// on the prerendered HTML and always clears, even if JavaScript is slow or
// fails. Reduced-motion users skip straight to the end state.
const PANELS = [
  { className: 'z-50 bg-saiyan', delay: '0s' },
  { className: 'z-40 bg-light', delay: '0.2s' },
  { className: 'z-30 bg-[#1C2A87]', delay: '0.4s' },
]

const TransitionEffect = () => (
  <>
    {PANELS.map(({ className, delay }) => (
      <div
        key={className}
        aria-hidden="true"
        className={`wipe fixed top-0 bottom-0 right-full h-screen pointer-events-none ${className}`}
        style={{ animationDelay: delay }}
      />
    ))}
  </>
)

export default TransitionEffect
