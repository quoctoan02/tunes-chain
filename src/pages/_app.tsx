import { Provider } from '@app/provider'
import { MetaHead } from '@components/Layout'
import { Loader } from '@components/ui'
import { generateTailwindClasses } from '@config/generate-tailwind-classes'
import ComingSoonPageLayout from '@layouts/ComingSoonPageLayout'
import DefaultLayout from '@layouts/DefaultLayout'
import { AppPropsWithLayout } from '@types'
import { SessionProvider } from 'next-auth/react'
import { useEffect, useState } from 'react'
import '../styles/styles.scss'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
  const [mounted, setMounted] = useState(false)

  const getLayout = Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>)

  useEffect(() => {
    setMounted(true)
  }, [])

  const App = (
    <ComingSoonPageLayout>
      {getLayout(<Component {...pageProps} />)}
      {generateTailwindClasses()}
    </ComingSoonPageLayout>
  )

  return (
    <SessionProvider session={session}>
      <Provider>
        <MetaHead title="Tunes Chain" />
        {mounted ? App : <Loader />}
      </Provider>
    </SessionProvider>
  )
}

export default MyApp
