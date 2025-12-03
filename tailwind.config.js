/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Lyvena brand colors - warm, ethical, human-oriented
        primary: {
          DEFAULT: '#4A7F5F', // Sage green - growth, ethics, calm
          dark: '#3A6349',
          light: '#5F9B77',
        },
        accent: {
          DEFAULT: '#E8B44F', // Honey gold - innovation, warmth
          dark: '#D09A35',
          light: '#F0C566',
        },
        secondary: {
          DEFAULT: '#C97751', // Terracotta - human warmth, care
          dark: '#B35F3E',
          light: '#D98F6B',
        },
        coral: {
          DEFAULT: '#E8856B', // Coral - impact, energy
          dark: '#D66F56',
          light: '#EDA185',
        },
        neutral: {
          cream: '#FAF7F2', // Warm background
          gray: '#E5E3DC', // Soft gray
          slate: '#5C6B73', // Intelligence, stability
          charcoal: '#2C2E35', // Readable text
          white: '#FFFFFF', // Pure white for text on dark backgrounds
        },
      },
      fontFamily: {
        sans: ['Outfit', 'DM Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'gentle-pulse': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 1s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        slideUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
      },
    },
  },
  plugins: [],
}
