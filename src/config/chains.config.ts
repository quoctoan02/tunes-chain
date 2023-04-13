import { Chain } from "wagmi"
import { bsc, bscTestnet } from "wagmi/chains"

export enum ChainIds {
  MAINNET = bsc.id,
  TESTNET = bscTestnet.id,
}

export const DEFAULT_CHAIN_ID: ChainIds =
  (parseInt(process.env.NEXT_PUBLIC_DEFAULT_CHAIN_ID) as ChainIds) || ChainIds.TESTNET

export const supportedChains: Chain[] = [bsc, bscTestnet]

export const supportedChainIds: number[] = [ChainIds.MAINNET, ChainIds.TESTNET]

export const chainsMap: Partial<Record<ChainIds, Chain>> = supportedChains.reduce((prev, curr, index, arr) => {
  return {
    ...prev,
    [curr["id"]]: curr,
  }
}, {})

export const DEFAULT_CHAIN: Chain = chainsMap[DEFAULT_CHAIN_ID]
