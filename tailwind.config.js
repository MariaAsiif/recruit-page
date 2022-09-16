/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      backgroundImage: {
        'top-background': "url('./images/bannerImage.png')",
        'jobseeker': "url('./images/jobseekerpic.png')",
        'recruiter': "url('./images/recruiter.png')",
        'reruitBanner': "url('./images/recruitBIgPic.png')",
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