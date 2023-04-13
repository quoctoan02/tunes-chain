"use client"

import { cn } from "@utils/style"
import React from "react"

export const ExternalLink = React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>(
  ({ className, children, target, rel, ...props }, ref) => {
    return (
      <a
        ref={ref}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("text-sky-500 hover:text-sky-600", className)}
        {...props}
      >
        {children}
      </a>
    )
  }
)

ExternalLink.displayName = "ExternalLink"
