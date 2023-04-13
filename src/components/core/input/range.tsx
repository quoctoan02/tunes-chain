"use client"

import { cn } from "@utils/style"
import React from "react"

export interface RangeProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Range = React.forwardRef<HTMLInputElement, RangeProps>(({ className, children, ...props }, ref) => {
  return <input ref={ref} type="range" className={cn("cursor-pointer", className)} {...props} />
})

Range.displayName = "Range"
