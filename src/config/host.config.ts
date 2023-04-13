import { ChainIds, DEFAULT_CHAIN_ID } from "./chains.config"

const HOSTS = {
  [ChainIds.TESTNET]: "",
  [ChainIds.MAINNET]: "",
}

export const HOST = HOSTS[DEFAULT_CHAIN_ID]
