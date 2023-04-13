import { Header } from "@components/Layout"
import { FC, ReactNode } from "react"

interface DefaultLayoutProps {
  children: ReactNode
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="pt-16">{children}</main>
      {/* <Footer /> */}
    </div>
  )
}

export default DefaultLayout
