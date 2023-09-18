import { Chain } from 'wagmi'
import { baseGoerli, bsc, bscTestnet, mainnet } from 'wagmi/chains'

export const DEFAULT_CHAIN_ID: number = (parseInt(process.env.NEXT_PUBLIC_DEFAULT_CHAIN_ID) as number) || baseGoerli.id

export const supportedChains: Chain[] = [bsc, bscTestnet, mainnet, baseGoerli]

export const chainsMap: Partial<Record<number, Chain>> = supportedChains.reduce((prev, curr, index, arr) => {
  return {
    ...prev,
    [curr['id']]: curr,
  }
}, {})

export const DEFAULT_CHAIN: Chain = chainsMap[DEFAULT_CHAIN_ID]
