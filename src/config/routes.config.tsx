import { ReactNode } from 'react'

export const routePath = {
  home: '/',
  link1: '/link-1',
  link2: '/link-2',
  link3: '/link-3',
  link4: '#link-4',
} as const

interface BaseRoute {
  label: ReactNode
  href: string
  isComingSoon?: boolean
  blank?: boolean
}

export const routes: BaseRoute[] = [
  {
    label: '',
    href: routePath.home,
    isComingSoon: true,
  },
  {
    label: 'Link 1',
    href: routePath.link1,
    isComingSoon: true,
  },
  {
    label: 'Link 2',
    href: routePath.link2,
    blank: true,
  },
  {
    label: 'Link 3',
    href: routePath.link3,
  },
  {
    label: 'Link 4',
    href: routePath.link4,
  },
]
