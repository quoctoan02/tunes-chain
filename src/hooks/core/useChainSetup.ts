import { supportedChains } from '@config/chains.config'
import { useWeb3 } from '@hooks/stores/useWeb3'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { Chain, useSwitchNetwork } from 'wagmi'

export function useChainSetup() {
  const { account, chain, updateChain } = useWeb3()

  const { switchNetworkAsync } = useSwitchNetwork()
  const [isSwitchingChain, setIsSwitchingChain] = useState(false)

  async function selectChain(chain: Chain) {
    try {
      setIsSwitchingChain(true)
      if (account) {
        if (typeof switchNetworkAsync === 'function') {
          const setup = await switchNetworkAsync(chain.id)

          updateChain(setup)
        } else {
          toast.error('An error occurred while switching networks')
        }
      } else {
        updateChain(chain)
      }
    } catch (err) {
      toast.error('Switch network failed')
    } finally {
      setIsSwitchingChain(false)
    }
  }

  return {
    currentChain: chain,
    chains: supportedChains,
    selectChain,
    isSwitchingChain,
  }
}
