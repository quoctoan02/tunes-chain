const colors = require('tailwindcss/colors')

module.exports = {
  light: {
    default: colors.stone[100],
    primary: {
      DEFAULT: colors.sky[500],
      ...colors.sky,
    },
    secondary: colors.emerald[500],
    body: colors.white,
    component: colors.white,
    muted: colors.neutral[200],
    content: colors.black,
    invert: colors.white,
    line: {
      ...colors.neutral,
      DEFAULT: colors.neutral[400],
    },
    success: {
      ...colors.green,
      DEFAULT: colors.green[500],
    },
    warning: {
      ...colors.yellow,
      DEFAULT: colors.yellow[500],
    },
    error: {
      ...colors.red,
      DEFAULT: colors.red[500],
    },
  },
  dark: {
    default: colors.stone[800],
    primary: {
      DEFAULT: colors.emerald[500],
      ...colors.emerald,
    },
    secondary: colors.emerald[500],
    body: colors.stone[900],
    component: colors.stone[800],
    muted: colors.neutral[700],
    content: colors.white,
    invert: colors.black,
    line: {
      ...colors.neutral,
      DEFAULT: colors.neutral[400],
    },
    success: {
      ...colors.green,
      DEFAULT: colors.green[500],
    },
    warning: {
      ...colors.yellow,
      DEFAULT: colors.yellow[500],
    },
    error: {
      ...colors.red,
      DEFAULT: colors.red[500],
    },
  },
}
