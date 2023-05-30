import { CONTRACTS } from '@constants/contracts'
import { useWeb3 } from '@hooks/stores/useWeb3'
import { Address } from 'wagmi'

export function useContractAddress() {
  const { chain } = useWeb3()
  return Object.fromEntries(
    Object.entries(CONTRACTS).map(([key, object]) => [key, object[chain.id as keyof typeof object]])
  ) as Record<keyof typeof CONTRACTS, Address>
}
