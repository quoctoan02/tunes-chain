import { Container } from '@components/Layout'
import { routePath } from '@config/routes.config'
import { Button, Result } from 'antd'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactElement, useEffect, useState } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { NextPageWithLayout } from 'src/types'

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
        <div className="flex min-h-screen flex-col items-center justify-center py-20 pt-5">
          <Result
            status="404"
            title={<h1 className="text-6xl font-bold uppercase tracking-wider ">404</h1>}
            subTitle={
              <p className="mt-3 text-center text-lg">Automatically return to the homepage later {time} seconds </p>
            }
            extra={
              <Link className="flex items-center justify-center" href={routePath.home}>
                <Button type="primary" icon={<AiFillHome />}>
                  Back Home
                </Button>
              </Link>
            }
          />
        </div>
      </Container>
    </>
  )
}

NotFoundPage.getLayout = (page: ReactElement) => {
  return <>{page}</>
}

export default NotFoundPage
