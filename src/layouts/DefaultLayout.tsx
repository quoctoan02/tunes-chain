import { FC, ReactNode } from 'react'

interface DefaultLayoutProps {
  children: ReactNode
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div>
      {/* <Header /> */}
      <main className="">{children}</main>
      {/* <Footer /> */}
    </div>
  )
}

export default DefaultLayout
