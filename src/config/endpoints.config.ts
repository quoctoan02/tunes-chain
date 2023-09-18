import { bsc, goerli } from 'wagmi/chains'
import { DEFAULT_CHAIN_ID } from './chains.config'

const API_URLS = {
  [bsc.id]: '',
  [goerli.id]: '',
}

export const API_URL = API_URLS[DEFAULT_CHAIN_ID]
