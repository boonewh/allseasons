/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0444BC',
        secondary: '#0424C0',
        accent: '#000000',
        blue: {
          600: '#0444BC',
          700: '#0424C0',
        }
      }
    },
  },
  plugins: [],
}