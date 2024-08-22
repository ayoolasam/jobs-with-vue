/** @type {import('tailwindcss').Config} */
export default {
 
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
 
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary:"#1d9bf0",
        tertiary:"#e7e9ea",
        card:"#4c64f4"
      }
    },
  },
  plugins: [],
}

