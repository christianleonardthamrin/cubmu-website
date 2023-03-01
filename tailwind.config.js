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
        '6px': '6px',
        '10px': '10px',
        '10.5px': '10.5px',
        '14px': '14px',
        '66px': '66px',
        '97px': '97px',
        '156px': '156px',
      },
      colors: {
        'tab-active': '#D03138',
        'tab-inactive': '#555657',
        'discount': '#26D27F',
        'off': '#B3B3B3',
        'promo': '#868788',
      },
      width: {
        '150px': '150px',
        '161px': '161px',
        '305px': '305px',
        '343px': '343px',
      },
      height: {
        '150px': '150px',
        '305px': '305px',
        '475px': '475px',
      },
      borderRadius: {
        '20px': '20px',
        '32px': '32px'
      },
      fontSize: {
        '10px': '10px'
      },
    },
  },
  plugins: [],
}
