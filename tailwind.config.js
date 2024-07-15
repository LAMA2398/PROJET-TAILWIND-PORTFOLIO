/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    colors: {
      violet: {
        600: '#7A288A', // couleur violet utilisée pour le texte
      },
      black: {
        DEFAULT: '#000000', // couleur noire utilisée pour le fond du navbar
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

