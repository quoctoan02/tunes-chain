import { ContractName, CONTRACTS } from '@constants/contracts'
import { useWeb3 } from '@hooks/stores/useWeb3'
import { Address } from 'wagmi'

export const useContractAddress = () => {
  const { chain } = useWeb3()
  return Object.fromEntries(Object.entries(CONTRACTS).map(([key, object]) => [key, object[chain.id]])) as Record<
    ContractName,
    Address
  >
}
