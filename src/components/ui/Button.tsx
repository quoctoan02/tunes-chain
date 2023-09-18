import { cn } from '@utils/style'
import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd'
import { VariantProps, cva } from 'class-variance-authority'
import { MouseEvent, forwardRef, useState } from 'react'

const buttonVariants = cva(cn(''), {
  variants: {
    size: {
      small: cn('h-8 text-sm'),
      middle: cn('h-10 text-lg'),
      large: cn('h-12 text-xl'),
    },
    type: {
      text: cn(''),
      link: cn(''),
      default: cn('enabled:hover:text-primary-500 enabled:hover:border-primary-500'),
      ghost: cn(''),
      primary: cn('bg-primary-500 enabled:hover:bg-primary-600 shadow-sm'),
      secondary: cn('!bg-red-500 border-red-500'),
      dashed: cn('enabled:hover:text-primary-500 enabled:hover:border-primary-500 '),
    },
  },
  defaultVariants: {
    size: 'small',
    type: 'default',
  },
})
export interface ButtonProps extends Omit<AntButtonProps, 'type'>, Omit<VariantProps<typeof buttonVariants>, 'size'> {
  async?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ onClick, children, type, async = false, disabled = false, size = 'small', className, ...props }, ref) => {
    const [isLoading, setIsLoading] = useState(false)

    const buttonType = ['default', 'primary', 'dashed', 'link', 'text'].find(
      (btnType) => btnType === type
    ) as AntButtonProps['type']

    const handleAsyncClick = async (e: MouseEvent<HTMLButtonElement> & MouseEvent<HTMLAnchorElement>) => {
      if (!onClick) return

      setIsLoading(true)
      await onClick(e)
      setIsLoading(false)
    }

    return (
      <AntButton
        onClick={async ? handleAsyncClick : onClick}
        type={buttonType}
        loading={isLoading}
        disabled={isLoading || disabled}
        {...props}
        className={cn(buttonVariants({ size, type }), className)}
        ref={ref}
      >
        {children}
      </AntButton>
    )
  }
)
