/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      backgroundImage: {
        'top-background': "url('./images/bannerImage.png')",
      },
      fontFamily: {
        'sans': ['Open Sans', 'system-ui',],
        'oxygen': ['Oxygen', 'system-ui',],
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}