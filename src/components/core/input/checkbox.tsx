"use client"

import { cn } from "@utils/style"
import { cva, VariantProps } from "class-variance-authority"
import React from "react"

const checkboxVariants = cva(
  cn(
    "rounded bg-transparent text-primary",
    "focus:ring focus:ring-primary focus:outline-none",
    "focus:shadow focus:shadow-primary",
    "focus-within:ring focus-within:ring-primary",
    "focus-visible:ring focus-visible:ring-primary"
  ),
  {
    variants: {
      size: {
        md: "h-6 w-6",
        sm: "h-6 w-6",
        lg: "h-10 w-10",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof checkboxVariants> {}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <label className="inline-flex cursor-pointer items-center gap-2">
        <input ref={ref} type="checkbox" className={checkboxVariants({ size, className })} {...props} />
        {children}
      </label>
    )
  }
)

Checkbox.displayName = "Checkbox"
