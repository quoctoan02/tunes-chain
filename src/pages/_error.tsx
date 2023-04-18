import { Container } from '@components/Layout'
import { routePath } from '@config/routes.config'
import { Button, Result } from 'antd'
import Link from 'next/link'
import { AiFillHome } from 'react-icons/ai'

const Error = ({ statusCode }) => {
  return (
    <Container className="error-page">
      <div className="flex min-h-screen flex-col items-center justify-center py-20 pt-5">
        <Result
          status={statusCode}
          title={<h1 className="text-5xl font-bold uppercase tracking-wider ">{statusCode}</h1>}
          subTitle={
            <p className="mt-3 text-center text-lg">
              {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
            </p>
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
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
