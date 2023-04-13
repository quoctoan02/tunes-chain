interface Balance {
  currencyId: number
  balance: string
  symbol: string
}

interface BalanceRecord {
  id: number
  balanceChange: string
  balanceAfter: string
  balanceBefore: string
  currencyId: number
  symbol: string
  type: number
  reasonId: null
  userId: number
  updatedTime: string
  createdTime: string
}
