/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
     'mysans': ['cursive', 'Geneva', 'Tahoma', 'sans-serif'],

    },

    extend: {
      height: {
        1000: '1000px',
      },
      width: {
        755: '755px',
      },

      colors: {
        'green': '#b4fab4',
        'darkgreen': '#03fc56',
        'beige' : '#FFFBEF',
        'red' : '#fa747d',
      },

    },
  },
  plugins: [],
}