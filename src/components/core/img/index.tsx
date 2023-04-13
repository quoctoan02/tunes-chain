"use client"

import React from "react"

export const Img = React.forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>(
  ({ src, onError, ...props }, ref) => {
    return (
      <img
        ref={ref}
        src={src || "/unknown.png"}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null
          currentTarget.src = "/unknown.png"
        }}
        {...props}
      />
    )
  }
)

Img.displayName = "Img"
