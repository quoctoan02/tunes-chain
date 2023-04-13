import { useTheme } from "@hooks/stores/useTheme"
import useSWR from "swr"

export const useSentryTheme = () => {
  const { theme, toggle } = useTheme()

  useSWR(["sentry theme", theme], () => {
    document.documentElement.setAttribute("data-theme", theme)
  })

  useSWR(["system sentry theme"], () => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)")

    matchMedia.addEventListener("change", (event) => {
      toggle(event.matches ? "dark" : "light")
    })
  })
}
