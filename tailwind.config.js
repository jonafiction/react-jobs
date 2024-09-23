// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      gridTemplateColumns: {
        '70/30' : '70% 28%',
      },
      colors: {
        indigo: {
          50: '#e0f5fc',
          100: '#b3e7f5',
          200: '#80d8ee',
          300: '#4dc9e7',
          400: '#26bddd',
          500: '#0db1d3', // replace default indigo-500 with a custom shade
          600: '#0b9fbe',
          700: '#2596be', // replace indigo-700 with #2596be (Eastern Blue)
          800: '#0a7e9a',
          900: '#065e77',
        },
      },
    },
  },
  plugins: [],
}
