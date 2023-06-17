import { routePath, routes } from '@config/routes.config'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const useComingSoonPage = () => {
  const router = useRouter()

  const routeMatched = routes.find((route) => route.href === router.pathname)

  const isComingSoonPage = (routeMatched?.isComingSoon && router.pathname !== '/') || false

  useEffect(() => {
    if (isComingSoonPage) {
      router.replace(routePath.home)
    }
  }, [isComingSoonPage, router])

  return isComingSoonPage
}
