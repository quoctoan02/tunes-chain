import { ENV, Env } from './env.config'

const API_URLS = <const>{
  [Env.development]: '',
  [Env.staging]: '',
  [Env.production]: '',
}

export const API_URL = API_URLS[ENV]
