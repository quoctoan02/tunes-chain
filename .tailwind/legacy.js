const plugin = require("tailwindcss/plugin")

const button = {
  // Default
  ".btn": {
    "@apply inline-flex font-medium px-4 py-0 items-center gap-2 justify-center transition-colors cursor-pointer": {},
    // Active
    "&:active": {
      "@apply scale-95": {},
    },
    // Disabled
    "&:disabled": {
      "@apply opacity-50 saturate-50 cursor-not-allowed": {},
    },
    // Sizes
    "&-sm": {
      "@apply h-8": {},
    },
    "&-md": {
      "@apply h-10": {},
    },
    "&-lg": {
      "@apply h-12": {},
    },
    // Variants
    "&-default": {
      "@apply bg-default hover:brightness-90": {},
    },
    "&-primary": {
      "@apply bg-primary hover:bg-primary-600": {},
    },
    "&-primary-outlined": {
      "@apply border border-primary text-primary": {},
    },
    "&-outlined": {
      "@apply border border-muted": {},
    },
    "&-ghost": {
      "@apply bg-transparent": {},
    },
    // Shapes
    "&-normal": {
      "@apply rounded": {},
    },
    "&-pill": {
      "@apply rounded-full": {},
    },
    "&-rounded": {
      "@apply rounded-full aspect-square p-0": {},
    },
    "&-square": {
      "@apply rounded aspect-square p-0": {},
    },
  },
}

const input = {
  // Default
  ".input": {
    "@apply rounded px-3 transition-all": {},
    // Focus
    "&:focus, &:focus-within, &:focus-visible": {
      "@apply ring ring-primary outline-none": {},
      "@apply shadow shadow-primary": {},
    },
    // Disabled
    "&:disabled": {
      "@apply opacity-50 saturate-50 cursor-not-allowed": {},
    },
    // Sizes
    "&-md": {
      "@apply h-10": {},
    },
    "&-sm": {
      "@apply h-8": {},
    },
    "&-lg": {
      "@apply h-12": {},
    },
    // Variants
    "&-filled": {
      "@apply bg-default": {},
    },
    "&-outlined": {
      "@apply bg-transparent border border-muted": {},
    },
  },
}

const inputGroup = {
  // Group
  ".input-group": {
    "@apply inline-flex items-center overflow-hidden cursor-pointer": {},
    input: {
      "@apply w-full h-full bg-transparent focus:outline-none": {},
    },
    // Group disabled
    "&-disabled": {
      "@apply cursor-not-allowed opacity-50 saturate-50": {},
      input: {
        "@apply cursor-not-allowed": {},
      },
    },
    // Prefix
    "&-prefix": {
      "@apply pr-3": {},
    },
    // Subfix
    "&-subfix": {
      "@apply pl-3": {},
    },
    // Addon before
    "&-addon-before": {
      "@apply -ml-3 mr-3": {},
      "*": {
        "@apply rounded-none": {},
      },
    },
    // Addon after
    "&-addon-after": {
      "@apply -mr-3 ml-3": {},
      "*": {
        "@apply rounded-none": {},
      },
    },
  },
}

module.exports = plugin(({ addComponents }) => {
  addComponents([button, input, inputGroup])
})
