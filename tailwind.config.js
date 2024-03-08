/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        
        sm: '310px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        pcScreen: '1700px',
      },

      fontFamily: {
        titrePok: 'Pokemon Solid',
      },
      boxShadow: {
        shadowCard: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      },
      colors: {
        bodyColor: {
          DEFAULT: 'rgb(42, 42, 42)',
        },
      },
    },
  },
  plugins: [],
}
