import { web3ErrorMsg } from "@constants/web3ErrorMsg"
import { toast } from "react-hot-toast"

export const toastWeb3Errors = (err: any, defaultMsg: string) => {
  toast.error(web3ErrorMsg[err.code] || defaultMsg || "An unexpected error occurred")
}
