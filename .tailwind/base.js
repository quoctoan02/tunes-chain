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
    '.text-overflow-1': {
      display: '-webkit-box',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      overflow: 'hidden',
      WebkitLineClamp: '1',
      WebkitBoxOrient: 'vertical',
      overflowWrap: 'break-word',
      wordBreak: 'break-all',
    },
    '.text-overflow-2': {
      display: '-webkit-box',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      overflow: 'hidden',
      WebkitLineClamp: '2',
      WebkitBoxOrient: 'vertical',
      overflowWrap: 'break-word',
      wordBreak: 'break-all',
    },
    '.text-overflow-3': {
      display: '-webkit-box',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      overflow: 'hidden',
      WebkitLineClamp: '3',
      WebkitBoxOrient: 'vertical',
      overflowWrap: 'break-word',
      wordBreak: 'break-all',
    },
    '.text-inherit-size': {
      fontSize: 'inherit',
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
    '*,::before,::after': {
      'border-width': 0,
      'border-style': 'solid',
      'border-color': theme('borderColor.DEFAULT', 'currentColor'),
    },
    '.google-map *': {
      'border-style': 'none',
    },
    button: {
      '@apply cursor-pointer bg-transparent': {},
    },

    '*::-webkit-scrollbar': {
      '@apply w-2': {},
    },
    '*::-webkit-scrollbar-track': {
      '@apply bg-gray-200': {},
    },
    '*::webkit-scrollbar-thumb': {
      '@apply bg-primary-300 hover:bg-primary-400': {},
    },
  })
})
