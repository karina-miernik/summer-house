/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'],
        'cinzel': ['Cinzel', 'sans-serif'],
        'fauna': ['Fauna One', 'sans-serif'],
        'lora': ['Lora', 'Helvetica', 'Arial', 'sans-serif'],
        'merri': ['Merriweather', 'sans-serif'],
        'mont': ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
        'vol': ['Vollkorn', 'serif'],
        'lato': ['Lato', 'serif']
      },
      color : {
        'c-gray-1': '#343434',
        'c-gray-2': '#767676'
      },
      backgroundColor: {
        'custom': '#767676'
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
