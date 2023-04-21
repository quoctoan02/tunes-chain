import { ToggleTheme } from '@app/toggle-theme'
import { routePath, routes } from '@config/routes.config'
import { useActive } from '@hooks/core/useActive'
import { truncateAddress } from '@utils/string'
import { cn } from '@utils/style'
import { Button, Drawer } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { AiOutlineBars } from 'react-icons/ai'
import Container from './Container'

interface HeaderProps {}

const Header: FC<HeaderProps> = (props) => {
  const router = useRouter()
  const { connect, disconnect, isConnecting, isConnected, account } = useActive()

  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false)

  const handleCloseDrawer = () => {
    setIsOpenDrawer(false)
  }

  return (
    <>
      <header className="bg-component fixed left-0 right-0 top-0 z-50 h-16 shadow">
        <Container className="flex h-full items-center justify-between">
          <Link href={routePath.home} className="h-8">
            <img src="/logo/logo.svg" className="h-full" />
          </Link>
          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-6">
              {routes.map((route) => {
                const absolutePath = route.href.split('/')[1] || ''

                const active = router.pathname.includes(`/${absolutePath}`)
                if (!route.href) return

                return (
                  <Link
                    className={cn('hover:text-primary-500', active && 'active')}
                    href={route.href}
                    key={route.label + 'mobile'}
                    onClick={() => handleCloseDrawer()}
                  >
                    {route.label}
                  </Link>
                )
              })}
            </nav>
            <Button
              loading={isConnecting}
              disabled={isConnecting}
              type="primary"
              onClick={account ? disconnect : connect}
            >
              {account ? truncateAddress(account) : 'CONNECT WALLET'}
            </Button>
            <ToggleTheme />
            <Button icon={<AiOutlineBars />} onClick={() => setIsOpenDrawer(true)} />
          </div>
        </Container>
      </header>
      <Drawer open={isOpenDrawer} onClose={handleCloseDrawer}>
        <nav className="flex flex-col gap-10">
          {routes.map((route) => {
            const absolutePath = route.href.split('/')[1] || ''

            const active = router.pathname.includes(`/${absolutePath}`)
            if (!route.href) return

            return (
              <Link
                className={cn('hover:text-primary-500', active && 'active')}
                href={route.href}
                key={route.label + 'mobile'}
                onClick={() => handleCloseDrawer()}
              >
                {route.label}
              </Link>
            )
          })}
        </nav>
      </Drawer>
    </>
  )
}

export default Header
