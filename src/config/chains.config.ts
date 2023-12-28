import { Chain } from 'wagmi'
import { baseGoerli, bsc, bscTestnet, fantom, fantomTestnet, mainnet } from 'wagmi/chains'
import { ENV, Env } from './env.config'

const chainsConfig = <const>{
  [Env.development]: baseGoerli,
  [Env.staging]: bsc,
  [Env.production]: bsc,
}

const supportedChainsConfig = {
  [Env.development]: [baseGoerli, bsc, bscTestnet, fantom, fantomTestnet, baseGoerli],
  [Env.staging]: [baseGoerli, bsc, mainnet, bsc, bscTestnet, fantom, fantomTestnet],
  [Env.production]: [bsc],
}

export const supportedChains: Chain[] = supportedChainsConfig[ENV]

export const DEFAULT_CHAIN: Chain = chainsConfig[ENV]
