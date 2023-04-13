import { Provider } from "@app/provider"
import { MetaHead } from "@components/Layout"
import { Loader } from "@components/core/loader"
import DefaultLayout from "@layouts/DefaultLayout"
import { useEffect, useState } from "react"
import { AppPropsWithLayout } from "src/types"
import "../styles/styles.scss"

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [mounted, setMounted] = useState(false)

  const getLayout = Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>)

  useEffect(() => {
    setMounted(true)
  }, [])

  const App = (
    <>
      <MetaHead />
      {getLayout(<Component {...pageProps} />)}
    </>
  )

  return <Provider>{mounted ? App : <Loader />}</Provider>
}

export default MyApp
