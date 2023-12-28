import { Address } from 'wagmi'

export const truncateAddress = (address: Address, long?: boolean) =>
  long
    ? address?.toLowerCase()?.slice(0, 4) + '...' + address?.toLowerCase()?.slice(-4)
    : '0x...' + address?.toLowerCase()?.slice(-4)

export const convertApiErrorMessage = (statusText: string) => {
  const isSnakeCase = /^[A-Z]+(?:_[A-Z]+)*$/.test(statusText)

  if (!isSnakeCase) return statusText

  return statusText.replaceAll('_', ' ')
}
