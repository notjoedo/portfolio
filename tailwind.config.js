/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'apple-blue': 'hsl(207, 90%, 54%)',
        'apple-gray': 'hsl(215, 16%, 47%)',
        'apple-dark': 'hsl(0, 0%, 11%)',
        'apple-bg': 'hsl(210, 40%, 96%)',
      },
    },
  },
  plugins: [],
} 