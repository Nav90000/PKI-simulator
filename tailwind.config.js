/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#020b1a',
          900: '#040d20',
          800: '#071628',
          700: '#0a2040',
          600: '#0d2a55',
        },
        cyber: {
          300: '#66e0ff',
          400: '#00d4ff',
          500: '#00b4ff',
          600: '#0099dd',
        },
        jade: {
          400: '#00ff94',
          500: '#00e676',
          600: '#00c853',
        },
        crimson: {
          400: '#ff6b9d',
          500: '#ff3d71',
          600: '#e5004e',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}
