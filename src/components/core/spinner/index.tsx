"use client"

import { FC, SVGAttributes } from "react"

export const Spinner: FC<SVGAttributes<SVGElement>> = ({ width, height, viewBox, ...props }) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 128 128" {...props}>
      <rect x="0" y="0" width="100%" height="100%" fill="none" />
      <g>
        <circle
          cx="64"
          cy="64"
          r="50"
          fill="none"
          stroke="currentColor"
          strokeWidth={20}
          strokeDasharray="100, 200"
          strokeLinecap="round"
        >
          <animate
            attributeName="stroke-dasharray"
            values="50, 50 ; 1, 400; 150, 200; 1, 400"
            dur="2000ms"
            repeatCount="indefinite"
          />
          <animate attributeName="stroke-width" values="10; 20; 10" dur="2000ms" repeatCount="indefinite" />
        </circle>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 64 64"
          to="360 64 64"
          dur="500ms"
          repeatCount="indefinite"
        />
      </g>
    </svg>
  )
}

Spinner.displayName = "Spinner"
