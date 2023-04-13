"use client"

import { Float, FloatProps } from "@headlessui-float/react"
import { cn } from "@utils/style"
import React from "react"

export interface TooltipProps extends Omit<FloatProps, "children" | "className"> {
  children?: React.ReactElement | string
  message?: React.ReactNode
  className?: string
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  message,
  portal = true,
  shift = 10,
  arrow = 0,
  flip = 10,
  offset = 8,
  placement = "bottom",
  className,
  ...props
}) => {
  const [show, setShow] = React.useState<boolean>(false)

  const triggerProps: React.HTMLAttributes<HTMLDivElement> = {
    onMouseEnter: () => setShow(true),
    onFocus: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onBlur: () => setShow(false),
    onClickCapture: () => setShow((prev) => !prev),
  }

  const Trigger =
    typeof children === "string" ? (
      <span {...triggerProps}>{children}</span>
    ) : (
      React.cloneElement(children, {
        ...triggerProps,
        ...children.props,
      })
    )

  return (
    <Float
      portal={portal}
      shift={shift}
      arrow={arrow}
      flip={flip}
      offset={offset}
      placement={placement}
      show={show}
      enter="ease-out duration-200"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
      {...props}
    >
      {Trigger}
      <div className="border-muted rounded border">
        <Float.Arrow className="bg-component border-muted absolute h-3 w-3 rotate-45 border" />
        <div className={cn("bg-component relative rounded px-4 py-2 shadow", className)}>{message}</div>
      </div>
    </Float>
  )
}
