/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        'custom': '2.99px', // Custom border width
      },
      boxShadow: {
        'custom-light': '5px 5px 10px 2px #FFFFFF47 inset',
        'custom-dark': '4px 4px 0px 0px #000000',
        'custom-combo': '5px 5px 10px 2px #FFFFFF47 inset, 4px 4px 0px 0px #000000', // combine both,
        'custom': '4.49px 5.99px 0px 0px #000000', // Custom box-shadow

      },
    },
  },
  plugins: [],
}