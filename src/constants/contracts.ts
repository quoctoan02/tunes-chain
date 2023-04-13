import { ChainIds } from '@config/chains.config'
import { Address } from 'wagmi'

export type ContractName = '0' | 'MULTICALL'

export const CONTRACTS: Record<ContractName, Record<ChainIds, Address>> = {
  0: {
    [ChainIds.TESTNET]: '0x0000000000000000000000000000000000000000',
    [ChainIds.MAINNET]: '0x0000000000000000000000000000000000000000',
  },
  MULTICALL: {
    [ChainIds.TESTNET]: '0xd808400fbf312aca5c7487cd30b0d1386e04bc78',
    [ChainIds.MAINNET]: '0x1ee38d535d541c55c9dae27b12edf090c608e6fb',
  },
}
