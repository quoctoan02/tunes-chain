export const routePath = {
  home: '/',
  link1: '/link-1',
  link2: '/link-2',
  link3: '/link-3',
} as const

export const routes = [
  {
    label: '',
    href: routePath.home,
  },
  {
    label: 'Link 1',
    href: routePath.link1,
  },
  {
    label: 'Link 2',
    href: routePath.link2,
  },
  {
    label: 'Link 3',
    href: routePath.link3,
  },
]
