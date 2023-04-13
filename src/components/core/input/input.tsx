"use client"

import { cn } from "@utils/style"
import { cva, VariantProps } from "class-variance-authority"
import React from "react"

const inputVariants = cva(cn("input"), {
  variants: {
    size: {
      sm: "input-sm",
      md: "input-md",
      lg: "input-lg",
    },
    variant: {
      filled: "input-filled",
      outlined: "input-outlined",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "filled",
  },
})

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix" | "subfix" | "size">,
    VariantProps<typeof inputVariants> {
  prefix?: React.ReactNode
  subfix?: React.ReactNode
  addonBefore?: React.ReactNode
  addonAfter?: React.ReactNode
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, prefix, subfix, addonBefore, addonAfter, size, variant, ...props }, ref) => {
    const isGroup: boolean = !!prefix || !!subfix || !!addonBefore || !!addonAfter
    if (isGroup)
      return (
        <span
          role="input"
          className={cn(
            "input-group",
            props.disabled && "input-group-disabled",
            inputVariants({ size, variant, className })
          )}
          onClick={(e) => e.currentTarget.getElementsByTagName("input")[0].focus()}
        >
          {!!addonBefore && <span className="input-group-addon-before">{addonBefore}</span>}
          {!!prefix && <span className="input-group-prefix">{prefix}</span>}
          <input ref={ref} {...props} />
          {!!subfix && <span className="input-group-subfix">{subfix}</span>}
          {!!addonAfter && <span className="input-group-addon-after">{addonAfter}</span>}
        </span>
      )
    return <input ref={ref} className={inputVariants({ size, variant, className })} {...props} />
  }
)

Input.displayName = "Input"
