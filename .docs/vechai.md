# Vechai UI guide

## src/config/vechai.config.js

```js
import { ColorScheme, extendTheme } from "@vechaiui/react"
const { light: lightColors, dark: darkColors } = require("../../.tailwind/colors")

const light: ColorScheme = {
  id: "light",
  type: "light",
  colors: {
    bg: { base: lightColors.body, fill: lightColors.component },
    text: {
      foreground: lightColors.content,
      muted: lightColors.muted,
    },
    primary: lightColors.primary,
    neutral: lightColors.line,
  },
}

const dark: ColorScheme = {
  id: "dark",
  type: "dark",
  colors: {
    bg: { base: darkColors.body, fill: darkColors.component },
    text: {
      foreground: darkColors.content,
      muted: darkColors.muted,
    },
    primary: darkColors.primary,
    neutral: darkColors.line,
  },
}

export const theme = extendTheme({
  cursor: "pointer",
  colorSchemes: {
    light,
    dark,
  },
  rounded: "0.5rem",
})
```

[Vechai UI](https://www.vechaiui.com/)
[Headless UI](https://headlessui.com/)
[Radix UI](https://www.radix-ui.com/)
