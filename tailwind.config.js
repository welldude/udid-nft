// const colors = require('tailwindcss/colors')
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: '#00a054',
        gray: {
          DEFAULT: '#c5c5c5',
          '#1c1c1c': '#1c1c1c'
        },
        purple: {
          DEFAULT: '#8D73C2'
        },
        green: {
          '#43CF7C': '#43CF7C'
        }
      },
      opacity: {
        15: '0.15'
      },
      spacing: {
        18: '4.5rem',
        30: '7.5rem',
        84: '21rem',
        88: '22rem',
        '6xl': '72rem',
        37: '37px',
        39: '39px',
        100: '25rem'
      },
      width: {},
      backgroundImage: {
        'go-app':
          'linear-gradient(136deg, rgba(0, 170, 91, 1), rgba(10, 130, 51, 1))',
        'go-app-reverse':
          'linear-gradient(136deg, rgba(0, 170, 91, 1), rgba(10, 130, 51, 1))'
      },
      inset: {
        0: 0,
        58: '-66px',
        // ...
        64: '16rem',
        '1/5': '20%',
        '1/10': '10%'
      },
      skew: {
        10: '-10.5deg'
      }
    },
    // colors: {},
    minWidth: {
      260: '260px'
    },
    // maxWidth: {
    //   '6.5xl': '76rem'
    // },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '768px',
      // => @media (min-width: 1024px) { ... }

      xl: '1024px',
      // => @media (min-width: 1280px) { ... }
      l: '1280px',
      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: []
}
