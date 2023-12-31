import { cn } from '@utils/style'
import React from 'react'
import Spinner from './Spinner'

const Loader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('bg-body flex w-full items-center justify-center p-32', className)} {...props}>
        <Spinner className="text-primary text-6xl" />
      </div>
    )
  }
)

export default Loader
