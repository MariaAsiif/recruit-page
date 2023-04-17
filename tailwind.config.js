/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{html,js,jsx}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      backgroundImage: {
        'Cartimg' : "url('./assets/images/cart-img.jpg')",
        'top-background': "url('./images/bannerImage.png')",
        'joinus-background': "url(./images/joinus/banner.png)",
        'workus-background': "url(./images/joinus/workus.png)",
        'resume-background': "url(./images/resume/banner.png)",
        'jobseeker': "url('./images/jobseekerpic.png')",
        'recruiter': "url('./images/recruiter.png')",
        'reruitBanner': "url('./images/recruitBIgPic.png')",
        'notification': "url('./images/notifi.svg')",
        'outer-notif': "url('./images/outerbg.svg')",
        'login-img': "url('./images/Login_left_side.jpg')",
        'sidenave': " url(./assets/landingImages/canvas-bg.gif)",
        'navbanner': " url(./assets/ecome/banner.png)",
        'runded-img': " url(./assets/Stocks/round.png)",
        'green-img': " url(./images/greenImg.svg)",
        'joinUs-img': " url(./images/bg-image.png)",
        'help-img': " url(./images/buyer/help.svg)",
        
      },
      fontFamily: {
        'sans': ['Open Sans', 'system-ui',],
        'oxygen': ['Oxygen', 'system-ui',],
        'poppine': ['Poppins', 'sans-serif'],
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
        '17': 'repeat(17, minmax(0, 1fr))',
        '18': 'repeat(18, minmax(0, 1fr))',
        '19': 'repeat(19, minmax(0, 1fr))',
        '20': 'repeat(20, minmax(0, 1fr))',
        '21': 'repeat(21, minmax(0, 1fr))',
        '22': 'repeat(22, minmax(0, 1fr))',
        '23': 'repeat(23, minmax(0, 1fr))',
        '24': 'repeat(24, minmax(0, 1fr))',

        // Complex site-specific column configuration
        'footer': '200px minmax(900px, 1fr) 100px',
      },
      gridColumn: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
        'span-17': 'span 17 / span 17',
        'span-18': 'span 18 / span 18',
        'span-19': 'span 19 / span 19',
        'span-20': 'span 20 / span 20',
        'span-21': 'span 21 / span 21',
        'span-22': 'span 22 / span 22',
        'span-23': 'span 23 / span 23',
        'span-24': 'span 24 / span 24',
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