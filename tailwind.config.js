/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        playfair: "Roboto,Playfair Display,serif", // Adds a new `font-display` class
      },
    },
  },
  plugins: [require('flowbite/plugin')],
  

};