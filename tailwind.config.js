/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{php,html,js,jsx,ts,tsx,vue}",
    "./resources/**/*.{php,html,js,jsx,ts,tsx,vue}",
    "./node_modules/@left4code/tw-starter/**/*.js",
  ],
  theme: {
    extend: {
      colors:{
        primary : 'rgb(0 25 95) ',
        pending: '#FF9C7E',
        success: 'rgb(34 197 94)' ,
        danger: 'rgb(225 29 72)' ,
        warning: 'rgb(245 158 11)' ,
        secondary: 'rgb(226 232 240)' , 
        danger: '#b91c1c'

      },
      fontFamily: {
        roboto: ["Roboto"],
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}

