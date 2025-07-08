// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Make sure this matches your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add 'poppins' and use it with the 'font-poppins' class
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        // You can add other fonts here too
        // sans: ['Poppins', ...defaultTheme.fontFamily.sans], // To make Poppins the default sans-serif font
      },
    },
  },
  plugins: [],
}
