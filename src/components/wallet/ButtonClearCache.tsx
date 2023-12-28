import { Button } from '@components/ui'
import { useActive } from '@hooks/core/useActive'
import { sleep } from '@utils/promise'
import { FC } from 'react'
import { AiOutlineClear } from 'react-icons/ai'

interface ButtonClearCacheProps {}

export const ButtonClearCache: FC<ButtonClearCacheProps> = () => {
  const { disconnectWallet } = useActive()

  const handleClearCache = async () => {
    disconnectWallet()
    localStorage.clear()
    sessionStorage.clear()

    await sleep(500)
    window.location.reload()
  }

  return (
    <div className="fixed bottom-4 right-4 z-20 max-xl:hidden">
      <Button
        type="primary"
        size="small"
        className="animate-bounce "
        async
        icon={<AiOutlineClear className="text-lg" />}
        onClick={handleClearCache}
      >
        Clear Cache
      </Button>
    </div>
  )
}
