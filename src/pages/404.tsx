import { Container } from "@components/Layout"
import { routePath } from "@config/routes.config"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { ReactElement, useEffect, useState } from "react"
import { NextPageWithLayout } from "src/types"

const TIMING_COUNTDOWN_TO_HOMEPAGE = 20

const NotFoundPage: NextPageWithLayout = () => {
  const router = useRouter()

  const [time, setTime] = useState<number>(TIMING_COUNTDOWN_TO_HOMEPAGE)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (time <= 0) {
      router.push(routePath.home)
    }
  }, [router, time])

  return (
    <>
      <Head>
        <title>404 - Not Found</title>
      </Head>

      <Container>
        <div className="flex min-h-screen flex-col items-center justify-center pb-20 pt-5">
          <h1 className="text-5xl font-bold uppercase tracking-wider ">404</h1>
          <p className="text-4xl font-semibold uppercase text-blue-500">Page not found</p>
          <p className="mt-3 text-lg">
            Automatically return to the homepage later {time} seconds or{" "}
            <Link className="text-blue-400 underline hover:text-blue-500" href={routePath.home}>
              click here
            </Link>
          </p>
        </div>
      </Container>
    </>
  )
}

NotFoundPage.getLayout = (page: ReactElement) => {
  return <>{page}</>
}

export default NotFoundPage
