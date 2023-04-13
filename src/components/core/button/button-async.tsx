"use client"

import React from "react"
import { Button, ButtonProps } from "./button"

export interface ButtonAsyncProp extends Omit<ButtonProps, "onClick"> {
  onClick?(e: any): Promise<any>
}

export const ButtonAsync = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ onClick, loading, children, ...props }, ref) => {
    const [asyncLoading, setAsyncLoading] = React.useState(false)

    const asyncClick = async (e) => {
      setAsyncLoading(true)
      onClick && (await onClick(e))
      setAsyncLoading(false)
    }

    const buttonLoading = asyncLoading || loading

    return (
      <Button ref={ref} onClick={asyncClick} loading={buttonLoading} {...props}>
        {children}
      </Button>
    )
  }
)

ButtonAsync.displayName = "ButtonAsync"
