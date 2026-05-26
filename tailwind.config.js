/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1B3A2D',
          50:  '#EBF2EE',
          100: '#CBDDD3',
          200: '#9DBFAD',
          300: '#70A187',
          400: '#4D8669',
          500: '#2A6B4C',
          600: '#1F5239',
          700: '#1B3A2D',
          800: '#132A20',
          900: '#0A1A14',
          950: '#050D0A',
        },
        copper: {
          DEFAULT: '#A0612A',
          50:  '#FDF4EC',
          100: '#F8E2C8',
          200: '#F0C48E',
          300: '#E5A354',
          400: '#D4842A',
          500: '#A0612A',
          600: '#834D1F',
          700: '#653B17',
          800: '#4A2A10',
          900: '#2E1A09',
        },
        cream: {
          DEFAULT: '#F5F0E8',
          50: '#FDFCF9',
          100: '#F9F5EF',
          200: '#F5F0E8',
          300: '#EDE4D4',
          400: '#E0D3BC',
          500: '#CDBFA0',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      screens: {
        xs: '375px',
      },
      maxWidth: {
        content: '1280px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-right': 'slideRight 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(-16px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
