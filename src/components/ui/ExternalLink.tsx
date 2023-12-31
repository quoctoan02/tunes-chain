import type { FC, HTMLAttributes } from 'react'

interface ExternalLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string
}

const ExternalLink: FC<ExternalLinkProps> = ({ children, ...props }) => {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

export default ExternalLink
