import { useSentryAuth } from '@hooks/core/useSentryAuth'
import { useSentryTheme } from '@hooks/core/useSentryTheme'
import { useSentryVersion } from '@hooks/core/useSentryVersion'
import { useSentryWeb3 } from '@hooks/core/useSentryWeb3'
import { FC } from 'react'

export const GlobalHooks: FC = () => {
  useSentryWeb3()
  useSentryAuth()
  useSentryVersion()
  useSentryTheme()
  return null
}
