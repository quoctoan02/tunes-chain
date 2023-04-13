import { Container } from '@components/Layout'
import { Button } from 'antd'

const Error = ({ statusCode }) => {
  return (
    <Container className="error-page">
      <div className="flex min-h-screen flex-col items-center justify-center py-20 pt-5">
        <h1 className="text-5xl font-bold uppercase tracking-wider ">{statusCode}</h1>

        <p className="mt-3 text-lg">
          {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
        </p>
        <Button type="primary" className="mt-4" onClick={() => location.reload()}>
          Reload page
        </Button>
      </div>
    </Container>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
