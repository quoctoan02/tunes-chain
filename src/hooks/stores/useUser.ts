import { SIGN_MESSAGE } from "@constants/auth"
import { storageKeys } from "@constants/storage"
import { Service } from "@services/app.service"
import { popPending, popSuccess, popWeb3Errors } from "@utils/pop"
import { toast } from "react-toastify"
import { create } from "zustand"
import { persist } from "zustand/middleware"
import { useWeb3 } from "./useWeb3"

export const useUser = create<Partial<User>>()(
  persist(
    (set, get) => ({
      reset() {
        set({
          token: null,
          id: null,
          email: null,
          username: null,
          address: null,
          name: null,
        })
      },

      async login() {
        const { signer } = useWeb3.getState()
        // Check connection
        if (!signer) {
          return false
        }
        const account = await signer.getAddress()
        const { address } = get()
        // Check if changed account
        const hasChangedAccount = account && address && address?.toLowerCase() !== account.toLowerCase()
        if (hasChangedAccount) {
          get().logout()
        }
        // Check token exp
        const { token } = get()
        // const isTokenValid = token && jwtDecode<{ exp: number }>(token).exp * 1000 < Date.now()
        const isTokenValid = !!token
        if (isTokenValid) {
          return true
        }

        const { data: nonce } = await Service.auth.getNonce(account)
        // Check nonce
        if (!nonce) {
          toast.error("Failed to get nonce")
          return false
        }
        try {
          popPending("Please confirm the sign message on your wallet to log in")
          const sign = await signer.signMessage(`${SIGN_MESSAGE} ${nonce}`)
          const { data, statusText } = await Service.auth.login(account, sign)
          if (!data) {
            toast.error(statusText)
            return false
          }
          popSuccess("Logged in successfully")
          const { userInfo, token } = data
          set({ ...userInfo, token })
          return true
        } catch (err) {
          popWeb3Errors(err, "Sign message failed")
          return false
        }
      },

      logout() {
        get().reset()
      },

      async refreshUserInfo() {
        const { data, statusText } = await Service.user.getUser()
        if (data) {
          const { userInfo } = data
          set((states) => ({ ...states, ...userInfo }))
        } else toast.error(statusText)
      },
    }),
    {
      name: storageKeys.user,
    }
  )
)
