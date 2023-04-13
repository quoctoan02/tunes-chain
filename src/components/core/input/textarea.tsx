"use client"

import { cn } from "@utils/style"
import { cva, VariantProps } from "class-variance-authority"
import React from "react"

const textareaVariants = cva(
  cn(
    "rounded p-3 transition-all",
    "focus:ring focus:ring-primary focus:outline-none",
    "focus:shadow focus:shadow-primary",
    "focus-within:ring focus-within:ring-primary",
    "focus-visible:ring focus-visible:ring-primary"
  ),
  {
    variants: {
      variant: {
        filled: "bg-muted",
        outlined: "bg-transparent border border-muted ",
      },
    },
    defaultVariants: {
      variant: "filled",
    },
  }
)

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, ...props }, ref) => {
    return <textarea ref={ref} className={textareaVariants({ variant, className })} {...props} />
  }
)

Textarea.displayName = "Textarea"
