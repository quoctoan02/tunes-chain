const plugin = require("tailwindcss/plugin")

module.exports = plugin(({ addBase }) => {
  addBase({
    html: {
      "@apply antialiased text-content": {},
      "@apply scrollbar scrollbar-w-px scrollbar-track-transparent scrollbar-thumb-primary scrollbar-thumb-rounded": {},
      lineHeight: "1.5",
      textRendering: "optimizeLegibility",
      textSizeAdjust: "100%",
      touchAction: "manipulation",
      overflowX: "hidden",
    },
    body: {
      "@apply bg-body transition-all": {},
      position: "relative",
      minHeight: "100%",
      fontFeatureSettings: "'kern'",
    },
    "::selection": {
      "@apply text-content bg-primary": {},
    },
  })
})
