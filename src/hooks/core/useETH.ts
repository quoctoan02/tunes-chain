import { useWeb3 } from "@hooks/stores/useWeb3"
import useSWR from "swr"

export const useETH = () => {
  const { signer } = useWeb3()

  const { data: ETH } = useSWR(
    ["ETH", signer],
    async () => {
      try {
        if (signer) {
          return await signer.getBalance()
        }
        return null
      } catch (err) {
        return null
      }
    },
    {
      refreshInterval: 10000,
    }
  )

  return ETH
}
