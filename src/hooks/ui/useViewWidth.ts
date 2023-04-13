import { useEffect, useState } from "react"

export const useViewWidth = () => {
  const [viewWidth, setViewWidth] = useState<number>(undefined)

  useEffect(() => {
    setViewWidth(window.innerWidth)
    window.addEventListener("resize", () => setViewWidth(window.innerWidth))
  }, [])

  return viewWidth
}
