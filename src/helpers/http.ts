import { API_URL } from "@config/endpoints.config"
import { useUser } from "@hooks/stores/useUser"
import { useWeb3 } from "@hooks/stores/useWeb3"
import axios, { AxiosError, AxiosInstance } from "axios"
import { camelizeKeys, decamelizeKeys } from "humps"
import jwtDecode from "jwt-decode"
import { toast } from "react-hot-toast"

export const http: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {},
})

http.interceptors.request.use((config) => {
  const { token } = useUser.getState()
  const { account } = useWeb3.getState()
  const isTokenExpired = token ? jwtDecode<{ exp: number }>(token).exp * 1000 < Date.now() : true
  if (account && token) {
    if (isTokenExpired) {
      toast.error("Session is expired, Please login again")
    } else {
      config.headers["Authorization"] = "Bearer " + token
    }
  }
  config.data = decamelizeKeys(config.data)
  config.params = decamelizeKeys(config.params)
  return config
})

http.interceptors.response.use(
  (response) => {
    const data = response.data.data
    if (Object.keys(data).length === 1) {
      response.data = data[Object.keys(data)[0]]
    } else {
      response.data = data
    }
    response.data = camelizeKeys(response.data)
    return Promise.resolve(response)
  },
  (error: AxiosError) => {
    error.response.statusText = error.response.data["error_code"] || "Connection lost"
    error.response.data = null
    return Promise.resolve(error.response)
  }
)
