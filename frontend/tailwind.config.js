/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#1D4ED8',
        darkBlue: '#1E3A8A',
        lightBlue: '#DBEAFE',
        primaryGold: '#D4A017',
        white: '#FFFFFF',
        gray: '#ebebeb',
        darkText: '#111827',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
