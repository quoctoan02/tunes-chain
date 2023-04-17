const defaultTheme = require('tailwindcss/defaultTheme')
const dynamicColors = require('./colors')

module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Recursive', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        default: '1230px',
        mobile: '390px',
        tablet: '820px',
        retina: '1440px',
        fhd: '1920px',
        qhd: '2560px',
        uhd: '3840px',
      },
      padding: {
        app: '1.5rem',
      },
      borderRadius: {
        DEFAULT: '0.5rem',
      },
      colors: {
        warm: {
          600: '#4B5563',
        },
      },
    },
  },
  plugins: [
    // !!! DO NOT CHANGE THE ORDER
    require('./base'),
    require('./legacy'),
    require('@bonehub/tailwind-dynamic-colors')(dynamicColors),
    require('tailwindcss-animate'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
