import { api } from "@constants/api"
import { http } from "@helpers/http"

export class BalanceService {
  getBalance() {
    return http.request<Balance[]>({
      method: "GET",
      url: api.balance.get,
      params: {},
    })
  }

  getBalanceHistory(type: number) {
    return http.request<BalanceRecord[]>({
      method: "GET",
      url: api.balance.history,
      params: { type },
    })
  }
}
