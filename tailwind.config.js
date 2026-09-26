/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#1b1b1b',
        light: '#f5f5f5',
        // Goku's gi orange. `ink` is a darker shade for text on the light
        // background, where the bright orange fails WCAG AA contrast.
        saiyan: { DEFAULT: '#FE5A10', ink: '#C2410C' },
        // Energy-blast blue, with the same text-safe `ink` variant.
        kamehameha: { DEFAULT: '#0F94CD', ink: '#0B6E99' },
      },
      fontFamily: {
        sans: ['"Montserrat Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage: {
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, transparent 5px, transparent 80px)',
        circularDark: 'repeating-radial-gradient(rgba(255,255,255,0.4) 2px, transparent 5px, transparent 80px)',
        circularLightLg: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, transparent 5px, transparent 70px)',
        circularDarkLg: 'repeating-radial-gradient(rgba(255,255,255,0.4) 2px, transparent 5px, transparent 70px)',
        circularLightMd: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, transparent 5px, transparent 60px)',
        circularDarkMd: 'repeating-radial-gradient(rgba(255,255,255,0.4) 2px, transparent 5px, transparent 60px)',
        circularLightSm: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, transparent 5px, transparent 50px)',
        circularDarkSm: 'repeating-radial-gradient(rgba(255,255,255,0.4) 2px, transparent 5px, transparent 50px)',
      },
    },
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px){...}
      xl: { max: '1279px' },
      // => @media (max-width: 1279px){...}
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
      xs: { max: '479px' },
    },
  },
  plugins: [],
}
