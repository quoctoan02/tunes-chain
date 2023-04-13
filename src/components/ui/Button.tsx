import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd'
import { FC, MouseEvent, useState } from 'react'

interface ButtonProps extends AntButtonProps {
  async?: boolean
}

const Button: FC<ButtonProps> = ({ onClick, children, type = 'primary', async = false, ...props }) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleAsyncClick = async (e: MouseEvent<HTMLButtonElement>) => {
    setIsLoading(true)
    await onClick(e)
    setIsLoading(false)
  }

  return (
    <AntButton
      // @ts-ignore
      onClick={async ? handleAsyncClick : onClick}
      type={type}
      loading={isLoading}
      disabled={isLoading}
      {...props}
    >
      {children}
    </AntButton>
  )
}

export default Button
