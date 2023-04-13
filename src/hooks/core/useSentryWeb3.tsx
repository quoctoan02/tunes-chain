import Empty from "@components/ui/Empty"
import { Popper } from "@helpers/Popper"
import { useWeb3 } from "@hooks/stores/useWeb3"
import { popWeb3Errors } from "@utils/pop"
import { Button } from "antd"
import { useCallback, useState } from "react"
import { toast } from "react-toastify"
import useSWR from "swr"
import { useAccount, useNetwork, useProvider, useSigner, useSwitchNetwork } from "wagmi"
import { useActive } from "./useActive"

export const useSentryWeb3 = () => {
  const { chain } = useNetwork()
  const { switchNetworkAsync } = useSwitchNetwork()
  const { disconnect } = useActive()
  const { address } = useAccount()
  const { data: signer } = useSigner()
  const provider = useProvider()
  const { chain: internalChain, updateAccount, updateSigner, updateSignerOrProvider } = useWeb3()

  const [isConnecting, setIsConnecting] = useState(false)

  const setupChain = useCallback(async () => {
    try {
      setIsConnecting(true)
      await switchNetworkAsync(internalChain.id)
      setIsConnecting(false)
      Popper.close()
    } catch (err) {
      setIsConnecting(false)
      toast.error(err?.message)
      popWeb3Errors(err, "Switch network failed")
    }
  }, [internalChain, switchNetworkAsync, disconnect])

  useSWR(["sentry chain", chain, setupChain, isConnecting], () => {
    if (chain?.unsupported === true) {
      Popper.fire({
        title: "Check your network",
        html: (
          <div className="flex flex-col items-center gap-2">
            <Empty>Please switch your network to continue.</Empty>
            <Button
              disabled={isConnecting}
              loading={isConnecting}
              className="w-full"
              type="primary"
              onClick={setupChain}
            >
              Switch network
            </Button>
            <Button disabled={isConnecting} className="w-full" type="default" onClick={disconnect}>
              Disconnect
            </Button>
          </div>
        ),
        showConfirmButton: false,
        showCancelButton: false,
        allowOutsideClick: false,
        showCloseButton: false,
      })
    }
  })
  useSWR(["sentry account", address], () => updateAccount(address))
  useSWR(["sentry signer", signer], () => updateSigner(signer))
  useSWR(["sentry signer or provider", signer, provider], () => updateSignerOrProvider(signer || provider))
}
