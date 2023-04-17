const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addBase, theme }) => {
  addBase({
    html: {
      '@apply antialiased text-content': {},
      '@apply scrollbar scrollbar-w-2 scrollbar-track-transparent scrollbar-thumb-primary scrollbar-thumb-rounded scroll-smooth':
        {},
      lineHeight: '1.5',
      textRendering: 'optimizeLegibility',
      textSizeAdjust: '100%',
      touchAction: 'manipulation',
      overflowX: 'hidden',
    },
    body: {
      '@apply bg-body transition-all font-sans': {},
      position: 'relative',
      minHeight: '100%',
      fontFeatureSettings: "'kern'",
    },
    '::selection': {
      '@apply text-content bg-primary': {},
    },
    a: {
      color: 'inherit',
      textDecoration: 'none',
    },
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    },
    'img, video': {
      maxWidth: '100%',
      height: 'auto',
    },
    'img,svg,video,canvas,audio,iframe, embed,object': {
      display: 'block',
      verticalAlign: 'middle',
    },
  })
})
