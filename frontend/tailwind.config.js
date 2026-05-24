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
        white: '#FFFFFF',
        gray: '#F3F4F6',
        darkText: '#111827',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
