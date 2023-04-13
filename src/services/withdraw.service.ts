import { api } from "@constants/api"
import { http } from "@helpers/http"
import { BigNumberish } from "ethers"

export class WithdrawService {
  requestWithDraw(currencyId: number, quantity: string) {
    return http.request<{
      expTime: BigNumberish
      sign: { v: BigNumberish; r: BigNumberish; s: BigNumberish }
      value: BigNumberish
      withdrawal: { id: BigNumberish }
    }>({
      method: "POST",
      url: api.withdraw.requestWithdraw,
      data: {
        currencyId,
        quantity,
      },
    })
  }

  getLastWithdraw() {
    return http.request<string>({
      method: "GET",
      url: api.withdraw.lastWithdraw,
      params: {},
    })
  }
}
