import { storageKeys } from '@constants/storage'
import { version } from '@constants/version'
import useSWR from 'swr'

export const useSentryVersion = () => {
  useSWR('sentry version', () => {
    try {
      const localVersion = localStorage.getItem(storageKeys.version)
      if (localVersion?.toString() !== version) {
        localStorage.clear()
        sessionStorage.clear()
        localStorage.setItem(storageKeys.version, version)
      }
    } catch (err) {
      location.reload()
    }
  })
}
