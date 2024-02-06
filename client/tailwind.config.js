/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'dr-blue': {
        dark: '#1b1464',
        light: '#7a86dd'
      },
      'dr-black': '#000',
      'dr-white': '#fff',
      'dr-gray': {
        light: '#d8d8d8',
        dark: '#aaa7a7'
      }
    },
    fontFamily: {
      basic: ["basic","sans-serif"],
    }
  },
  plugins: [],
}

