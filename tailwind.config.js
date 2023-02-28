/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      navlink: '.04em'
    },
    extend: {
      spacing: {
        '66px': '66px',
        '97px': '97px',
        '156px': '156px',
      },
      colors: {
        'tab-active': '#D03138',
        'tab-inactive': '#555657'
      }
    },
  },
  plugins: [],
}
