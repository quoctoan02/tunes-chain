'use client'

import { cn } from '@utils/style'
import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'

const containerVariants = cva('mx-auto w-full px-4 md:px-6', {
  variants: {
    size: {
      default: 'max-w-screen-default',
      mobile: 'max-w-screen-mobile',
      tablet: 'max-w-screen-tablet',
      retina: 'max-w-screen-retina',
      fhd: 'max-w-screen-fhd',
      qhd: 'max-w-screen-qhd',
      uhd: 'max-w-screen-uhd',
      xs: 'max-w-screen-xs',
      sm: 'max-w-screen-sm',
      md: 'max-w-screen-md',
      lg: 'max-w-screen-lg',
      xl: 'max-w-screen-xl',
      '2xl': 'max-w-screen-2xl',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof containerVariants> {
  className?: string
  size?: 'mobile' | 'tablet' | 'retina' | 'fhd' | 'qhd' | 'uhd' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(({ children, className, size, ...props }, ref) => {
  const classes = cn(containerVariants({ size, className }))

  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  )
})

Container.displayName = 'Container'

export default Container
