import { api } from "@constants/api"
import { http } from "@helpers/http"

export class AuthService {
  getNonce(address: string) {
    return http.request<string>({
      method: "GET",
      url: api.auth.getNonce,
      params: {
        address,
      },
    })
  }

  login(address: string, sign: string) {
    return http.request<{
      userInfo: User
      token: string
    }>({
      method: "POST",
      url: api.auth.login,
      data: {
        address,
        sign,
      },
    })
  }
}
