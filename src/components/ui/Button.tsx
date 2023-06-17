import { cn } from '@utils/style'
import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd'
import { VariantProps, cva } from 'class-variance-authority'
import { MouseEvent, forwardRef, useState } from 'react'

const buttonVariants = cva(cn(''), {
  variants: {
    size: {
      small: 'h-8 text-sm',
      middle: 'h-10 text-lg',
      large: 'h-12 text-xl',
    },
  },
  defaultVariants: {
    size: 'small',
  },
})
export interface ButtonProps extends AntButtonProps, Omit<VariantProps<typeof buttonVariants>, 'size'> {
  async?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { onClick, children, type = 'default', async = false, disabled = false, size = 'small', className, ...props },
    ref
  ) => {
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
        disabled={isLoading || disabled}
        {...props}
        className={cn(buttonVariants({ size }), className)}
        ref={ref}
      >
        {children}
      </AntButton>
    )
  }
)
