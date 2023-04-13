import { ChainIds, DEFAULT_CHAIN_ID } from './chains.config'

const API_URLS = {
  [ChainIds.TESTNET]: '',
  [ChainIds.MAINNET]: '',
}

export const API_URL = API_URLS[DEFAULT_CHAIN_ID]
