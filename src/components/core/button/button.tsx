"use client"

import { cn } from "@utils/style"
import { cva, VariantProps } from "class-variance-authority"
import React from "react"
import { Spinner } from "../spinner"

const buttonVariants = cva(cn("btn"), {
  variants: {
    size: {
      md: "btn-md",
      sm: "btn-sm",
      lg: "btn-lg",
    },
    variant: {
      default: "btn-default",
      primary: "btn-primary",
      "primary-outlined": "btn-primary-outlined",
      outlined: "btn-outlined",
      ghost: "btn-ghost",
    },
    shape: {
      normal: "btn-normal",
      pill: "btn-pill",
      rounded: "btn-rounded",
      square: "btn-square",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    shape: "normal",
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /* Shows loading spinner */
  loading?: boolean
  /* Makes button disabled */
  disabled?: boolean
  /* The label to show in the button when loading is true */
  loadingText?: string
  /* Set the original html type of button */
  type?: "button" | "reset" | "submit"
  /* Adds icon before button label */
  leftIcon?: React.ReactElement
  /* Adds icon after button label */
  rightIcon?: React.ReactElement
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      disabled: _disabled,
      loading,
      loadingText = "Proccessing",
      type,
      leftIcon,
      rightIcon,
      children,
      className,
      color,
      variant,
      size,
      shape,
      ...props
    },
    ref
  ) => {
    const disabled = _disabled || loading

    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className, shape }))}
        disabled={disabled}
        {...props}
      >
        {leftIcon && !loading ? leftIcon : null}
        {loading && <Spinner className={cn(loadingText ? "relative" : "absolute", loadingText ? `mr-2` : "mr-0")} />}
        {loading ? loadingText || <span className="opacity-0">{children}</span> : children}
        {rightIcon && !loading ? rightIcon : null}
      </button>
    )
  }
)

Button.displayName = "Button"
