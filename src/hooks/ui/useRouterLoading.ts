import Router from "next/router"
import { useState } from "react"
import useSWR from "swr"

export const useRouterLoading = () => {
  const [loading, setLoading] = useState(false)

  useSWR("route loading", () => {
    Router.events.on("routeChangeStart", () => setLoading(true))
    Router.events.on("routeChangeComplete", () => setLoading(false))
    Router.events.on("routeChangeError", () => setLoading(false))
  })

  return loading
}
