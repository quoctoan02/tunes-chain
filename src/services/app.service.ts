import { AuthService } from './auth.service'
import { BalanceService } from './balance.service'
import { UserService } from './user.service'
import { WithdrawService } from './withdraw.service'

export const Service = {
  auth: new AuthService(),
  user: new UserService(),
  balance: new BalanceService(),
  withdraw: new WithdrawService(),
}
