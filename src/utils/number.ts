import { formatUnits } from '@ethersproject/units'
import { BigNumberish } from 'ethers'

export const formatNumber = (value: number, maximumFractionDigits: number = 6, compact: boolean = false) => {
  if (typeof value !== 'number' || isNaN(value)) return value
  return new Intl.NumberFormat('en', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 6,
    compactDisplay: 'short',
    notation: compact ? 'compact' : 'standard',
  }).format(value)
}

export const formatWei = (wei: BigNumberish, decimals: BigNumberish = 18): string => {
  try {
    return new Intl.NumberFormat('en', {
      maximumFractionDigits: 6,
    }).format(+formatUnits(wei, decimals))
  } catch (err) {
    return '_'
  }
}
