/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{html,js,jsx}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      backgroundImage: {
        'top-background': "url('./images/bannerImage.png')",
        'joinus-background': "url(./images/joinus/banner.png)",
        'workus-background': "url(./images/joinus/workus.png)",
        'resume-background': "url(./images/resume/banner.png)",
        'jobseeker': "url('./images/jobseekerpic.png')",
        'recruiter': "url('./images/recruiter.png')",
        'reruitBanner': "url('./images/recruitBIgPic.png')",
        'notification': "url('./images/notifi.svg')",
        'outer-notif': "url('./images/outerbg.svg')",
        'login-img': "url('./images/login/Login.png')"
      },
      fontFamily: {
        'sans': ['Open Sans', 'system-ui',],
        'oxygen': ['Oxygen', 'system-ui',],
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    plugin(({ addVariant, e }) => {
      addVariant('sidebar-expanded', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => `.sidebar-expanded .${e(`sidebar-expanded${separator}${className}`)}`);
      });
    }),
  ]
}