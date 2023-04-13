import { Container } from "@components/core/container"

const Error = ({ statusCode }) => {
  return (
    <Container className="error-page">
      <h1 className="status-code">{statusCode}</h1>
      {statusCode ? `An error ${statusCode} occurred on server` : "An error occurred on client"}
    </Container>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
