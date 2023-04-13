import { Button } from "@components/core/button"
import { Container } from "@components/core/container"
import { Drawer } from "@components/core/drawer"
import { useActive } from "@hooks/core/useActive"
import { truncateAddress } from "@utils/string"
import Link from "next/link"
import { FC, ReactNode } from "react"
import { HiMenu } from "react-icons/hi"
import { ToggleTheme } from "./toggle-theme"

interface IProps {
  children?: ReactNode
}

export const Layout: FC<IProps> = ({ children }) => {
  const { connect, disconnect, isConnecting, isConnected, account } = useActive()

  return (
    <div>
      <header className="bg-component sticky left-0 right-0 top-0 z-50 h-16 shadow">
        <Container className="flex h-full items-center justify-between">
          <Link href="/" className="h-8">
            <img src="/logo/logo.png" className="h-full" />
          </Link>
          <Button.Group>
            <ToggleTheme />
            {account ? <Button variant="outlined">{truncateAddress(account)}</Button> : null}
            <Button variant="outlined" onClick={isConnected ? disconnect : connect} loading={isConnecting}>
              {isConnected ? "Disconnect" : "Connect Wallet"}
            </Button>
            <Drawer
              trigger={<Button leftIcon={<HiMenu />} variant="outlined" className="aspect-square p-0" />}
            ></Drawer>
          </Button.Group>
        </Container>
      </header>
      {children}
    </div>
  )
}
