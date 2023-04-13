# Tailwind migration guide

## Installation

```
yarn add tailwindcss postcss autoprefixer -D
```

## /.tailwind/config.js

```js
const daisyui = require("./daisy.config")
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // darkmode selector
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      // config global font here
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      // Container width
      screens: {
        view: "1440px",
      },
    },
  },
 ...
}
```

## postcss.config.js

```js
module.exports = {
  plugins: {
    // custom tailwind config direction
    tailwindcss: { config: "./tailwind/tailwind.config.js" },
    autoprefixer: {},
  },
}
```

## style.scss / global.scss

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
