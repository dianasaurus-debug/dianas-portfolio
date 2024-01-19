/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#7F3C10',
        'secondary' : '#D9C6B5',
        'base' : '#F3F3F3'
      },
      fontFamily: {
        imfell: ['IM Fell Double Pica', 'serif'],
        satisfy: ['Satisfy', 'cursive'],
      },
    },
  },
  
}

