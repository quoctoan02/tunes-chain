import { useUser } from '@hooks/stores/useUser'
import { useWeb3 } from '@hooks/stores/useWeb3'
import useSWR from 'swr'

export const useSentryAuth = () => {
  const { signer, chain } = useWeb3()
  const { login } = useUser()

  useSWR(['sentry auth', signer, chain?.id], () => {
    login()
  })
}
