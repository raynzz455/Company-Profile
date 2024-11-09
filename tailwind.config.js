/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu' : [' "Ubuntu"' , 'sans-serif;'] ,
        "Kanit" : ['"Kanit"', 'sans-serif'],
        "roboto" : ['"Roboto"', 'sans-serif']
      },
    }
  },
  plugins: []
};