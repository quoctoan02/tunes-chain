import { api } from "@constants/api"
import { http } from "@helpers/http"

export class UserService {
  getUser() {
    return http.request<{
      userInfo: User
      token: string
    }>({
      method: "GET",
      url: api.user.get,
      params: {},
    })
  }

  sendOTP(email: string) {
    return http.request<{}>({
      method: "POST",
      url: api.user.getOTP,
      data: {
        email,
      },
    })
  }

  verifyEmail(email: string, code: string) {
    return http.request<{}>({
      method: "POST",
      url: api.user.verifyEmail,
      data: {
        email,
        code,
      },
    })
  }

  getReferralCode() {
    return http.request<{}>({
      method: "GET",
      url: api.user.getReferralCode,
      params: {},
    })
  }
}
