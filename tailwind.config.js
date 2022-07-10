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
      colors : {
        'c-gray-1': '#343434',
        'c-gray-2': '#767676',
        'c-blue': '#C1DFF0',
        
        'c-primary': '#C59130',
        'c-secondary': '#DBB46B',
        'c-third': 'rgba(49, 65, 73, .95)',
        'c-third-2':'rgb(49, 65, 73)',

        'c-purple-1': '#B884B2',
        'c-green-1': '#667e76',
        'c-green-2': 'rgba(102,126,118,0.95)', 
        'c-green-3': '#eaecea', 
        'c-green-4': '#A3C9BE', 
        'c-pink-1': '#FFDBD0'
      },
      backgroundColor: {
        'custom': '#767676'
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
  ],
}
