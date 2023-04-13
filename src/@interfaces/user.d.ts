interface User {
  id: number
  address: Address
  email: string
  name: string
  username: string
  fullName: string
  avatar: string
  mobile: string
  ref: string
  type: number
  status: number
  lastActive: string
  createdTime: string
  updatedTime: string
  token: string
  login(): Promise<boolean>
  logout(): void
  refreshUserInfo(): void
  reset(): void
}
