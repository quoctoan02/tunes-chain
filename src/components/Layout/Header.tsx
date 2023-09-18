import { ToggleTheme } from '@app/toggle-theme'
import { CustomLink } from '@components/ui'
import { ChainSelector } from '@components/wallet/ChainSelector'
import { routePath, routes } from '@config/routes.config'
import { useActive } from '@hooks/core/useActive'
import { useChainSetup } from '@hooks/core/useChainSetup'
import { truncateAddress } from '@utils/string'
import { cn } from '@utils/style'
import { Button, Drawer } from 'antd'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { AiOutlineBars } from 'react-icons/ai'
import Container from './Container'

interface HeaderProps {}

const Header: FC<HeaderProps> = (props) => {
  const router = useRouter()
  const { connect, disconnect, isConnecting, isConnected, account } = useActive()

  const { chains, currentChain, selectChain } = useChainSetup()
  console.log('🚀 ~ file: Header.tsx:21 ~ chains:', chains)

  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false)

  const handleCloseDrawer = () => {
    setIsOpenDrawer(false)
  }

  return (
    <>
      <header className="bg-component fixed left-0 right-0 top-0 z-50 h-16 shadow">
        <Container className="flex h-full items-center justify-between">
          <CustomLink href={routePath.home} className="h-8">
            <img src="/logo/logo.svg" alt="" className="h-full" />
          </CustomLink>
          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-6">
              {routes.map((route, index) => {
                const absolutePath = route.href.split('/')[1] || ''
                const active = router.pathname.startsWith(`/${absolutePath}`)

                return (
                  <CustomLink
                    disabled={route?.isComingSoon}
                    comingSoon={route?.isComingSoon}
                    key={`${route.href}-${index}`}
                    href={route.href}
                    blank={route?.blank}
                    className={cn('hover:text-primary-500', active && 'active')}
                  >
                    {route.label}
                  </CustomLink>
                )
              })}
            </nav>
            <ChainSelector />
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
        <nav className="flex flex-col items-start gap-10">
          {routes.map((route, index) => {
            const absolutePath = route.href.split('/')[1] || ''
            const active = router.pathname.startsWith(`/${absolutePath}`)

            return (
              <CustomLink
                disabled={route?.isComingSoon}
                comingSoon={route?.isComingSoon}
                key={`${route.href}-${index}-drawer`}
                href={route.href}
                blank={route?.blank}
                className={cn('hover:text-primary-500', active && 'active')}
                onClick={handleCloseDrawer}
              >
                {route.label}
              </CustomLink>
            )
          })}
        </nav>
      </Drawer>
    </>
  )
}

export default Header
