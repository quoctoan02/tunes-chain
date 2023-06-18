import { MetaHead } from '@components/Layout'
import { useComingSoonPage } from '@hooks/ui/useComingSoonPage'
import type { FC, ReactNode } from 'react'

interface ComingSoonPageLayoutProps {
  children: ReactNode
}

const ComingSoonPageLayout: FC<ComingSoonPageLayoutProps> = ({ children }) => {
  const isComingSoonPage = useComingSoonPage()

  if (isComingSoonPage) return <MetaHead title="Coming Soon" />
  return <>{children}</>
}

export default ComingSoonPageLayout
