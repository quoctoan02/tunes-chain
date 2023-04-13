import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd'
import { FC, MouseEvent, useState } from 'react'

interface ButtonProps extends AntButtonProps {
  async?: boolean
}

const Button: FC<ButtonProps> = ({ onClick, children, async = false, ...props }) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleAsyncClick = async (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    setIsLoading(true)
    // @ts-ignore
    await onClick(e)
    setIsLoading(false)
  }

  return (
    <AntButton onClick={async ? handleAsyncClick : onClick} loading={isLoading} disabled={isLoading} {...props}>
      {children}
    </AntButton>
  )
}

export default Button
