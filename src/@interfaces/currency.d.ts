interface Currency {
  name: string
  symbol: string
  decimals: number
  address: Address
  isWETH?: boolean
  isUSD?: boolean
  stored?: boolean
}
