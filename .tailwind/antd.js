const plugin = require('tailwindcss/plugin')

const antd = {
  '.ant-btn': {
    '@apply flex items-center justify-center': {},
    '&&-dashed , &&-default': {
      '@apply bg-transparent': {},
    },
    '&&-primary': {
      '@apply shadow-lg': {},
    },
  },
  '.ant-popconfirm-buttons, .ant-modal-confirm-btns': {
    '@apply flex items-center justify-end gap-1': {},
  },
  '.ant-typography': {
    '& &-copy, & &-copy-success': {
      '@apply text-primary-500 hover:text-primary-500 focus:text-primary-500': {},
    },
  },
  '.ant-segmented .ant-segmented-item:hover:not(.ant-segmented-item-selected):not(.ant-segmented-item-disabled)::after':
    {
      '@apply dark:bg-slate-700/70': {},
    },
  '.ant-modal': {
    '.ant-modal-content': {
      '@apply bg-component w-full dark:bg-[#27272a]': {},
    },
    '.ant-modal-confirm-content ': {
      '@apply w-full': {},
    },
    '.ant-modal-header': {
      '@apply dark:bg-transparent': {},
    },
  },
  '.ant-progress .ant-progress-bg': {
    '@apply bg-primary-500': {},
  },
}

module.exports = plugin(({ addUtilities }) => {
  addUtilities([antd])
})
