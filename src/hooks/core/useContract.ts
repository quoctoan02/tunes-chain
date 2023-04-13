import { Erc20__factory, Multicall__factory } from '@constants/typechain'
import { useWeb3 } from '@hooks/stores/useWeb3'
import { useMemo } from 'react'
import { useContractAddress } from './useContractAddress'

export const useErc20Contract = (address: string) => {
  const { signerOrProvider } = useWeb3()
  return useMemo(() => Erc20__factory.connect(address, signerOrProvider), [address, signerOrProvider])
}

export const useMulticallContract = () => {
  const { signerOrProvider } = useWeb3()
  const { MULTICALL } = useContractAddress()
  return useMemo(() => Multicall__factory.connect(MULTICALL, signerOrProvider), [signerOrProvider, MULTICALL])
}
