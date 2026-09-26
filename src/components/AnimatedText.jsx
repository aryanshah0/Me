// Headline that rises in word by word. The animation is pure CSS (.word-rise
// in index.css) so it also plays on prerendered HTML before any JS runs, and
// the visible text is always in the DOM for crawlers and screen readers.
const AnimatedText = ({ text, as: Tag = 'h1', className = '' }) => (
  <div className="w-full mx-auto py-4 sm:py-0 flex items-center justify-center text-center overflow-hidden">
    <Tag className={`inline-block w-full text-dark dark:text-light font-bold text-8xl ${className}`}>
      {text.split(' ').map((word, index) => (
        <span key={word + index} className="word-rise" style={{ animationDelay: `${index * 0.08}s` }}>
          {word}&nbsp;
        </span>
      ))}
    </Tag>
  </div>
)

export default AnimatedText
