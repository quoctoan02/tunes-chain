import { cn } from "@utils/style"
import React from "react"

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex",
          "[&>button:only-child]:rounded",
          "[&>button:first-child]:rounded-r-none",
          "[&>button:last-child]:rounded-l-none",
          "[&>button:not(:last-child):not(:first-child)]:rounded-none",
          "[&>button:not(:last-child)]:border-r-0",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

ButtonGroup.displayName = "ButtonGroup"
