/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        titrePok: 'Pokemon Solid'
      },
      boxShadow: {
        'shadowCard': 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      },
      colors: {
        bodyColor: {
          DEFAULT: 'rgb(42, 42, 42)'
        },
      },
    },
  },
  plugins: [],
}