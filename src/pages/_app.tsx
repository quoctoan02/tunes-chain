import { Provider } from '@app/provider'
import { Loader } from '@components/ui'
import { generateTailwindClasses } from '@config/generate-tailwind-classes'
import DefaultLayout from '@layouts/DefaultLayout'
import { AppPropsWithLayout } from '@types'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import '../styles/styles.scss'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [mounted, setMounted] = useState(false)

  const getLayout = Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>)

  useEffect(() => {
    setMounted(true)
  }, [])

  const App = (
    <>
      <Head>
        <title>Template NextJs</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

        <meta itemProp="image" content={'/thumbnail.png'} />
        <meta property="og:url" content={''} />
        <meta property="og:description" content={''} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={'/thumbnail.png'} />

        <meta itemProp="image" content={'/thumbnail.png'} />
        <meta name="twitter:card" content="summary_large_image" />

        <meta itemProp="image" content={'/thumbnail.png'} />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
      {generateTailwindClasses()}
    </>
  )

  return <Provider>{mounted ? App : <Loader />}</Provider>
}

export default MyApp
