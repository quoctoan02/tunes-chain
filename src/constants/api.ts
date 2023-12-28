export const api = {
  auth: {
    getNonce: '/auth/get-nonce/',
    login: '/auth/login/',
  },
  user: {
    get: '/user/get/',
    getOTP: '/user/get-verify-email-code/',
    verifyEmail: '/user/verify-email/',
    getReferralCode: '/user/get-referral-code/',
  },
  balance: {
    get: '/balance/get/',
    history: '/balance/history/',
  },
  withdraw: {
    requestWithdraw: '/withdrawal/request-withdrawal/',
    lastWithdraw: '/withdrawal/last-withdrawal/',
  },
}
