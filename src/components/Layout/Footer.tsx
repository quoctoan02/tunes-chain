import { FC } from 'react'
import Container from './Container'

interface FooterProps {}

const Footer: FC<FooterProps> = (props) => {
  return (
    <footer>
      <Container>Footer</Container>
    </footer>
  )
}

export default Footer
