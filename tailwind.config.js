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
        // Lyvena brand colors - vibrant, ethical, human-oriented
        primary: {
          DEFAULT: '#2E8B57', // Vibrant sea green - growth, ethics, energy
          dark: '#228B22',
          light: '#32CD32',
        },
        accent: {
          DEFAULT: '#FFD700', // Bright gold - innovation, warmth, brilliance
          dark: '#FFA500',
          light: '#FFE55C',
        },
        secondary: {
          DEFAULT: '#FF6B35', // Vivid orange - impact, passion, dynamism
          dark: '#FF4500',
          light: '#FFA07A',
        },
        coral: {
          DEFAULT: '#FF7F50', // Bright coral - creativity, warmth
          dark: '#FF6347',
          light: '#FFA500',
        },
        neutral: {
          cream: '#FAF7F2', // Warm background
          gray: '#E5E3DC', // Soft gray
          slate: '#5C6B73', // Intelligence, stability
          charcoal: '#1C1E22', // Deeper charcoal for better contrast
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
