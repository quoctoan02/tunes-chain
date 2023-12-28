import { Button } from '@components/ui'
import { supportedChains } from '@config/chains.config'
import { useChainSetup } from '@hooks/core/useChainSetup'
import { Dropdown, MenuProps } from 'antd'
import { FC } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { BsCheckLg } from 'react-icons/bs'
import { HiGlobe } from 'react-icons/hi'

export const ChainSelector: FC = () => {
  const { currentChain, chains, selectChain, isSwitchingChain } = useChainSetup()

  const items: MenuProps['items'] = chains.map((chainItem) => {
    return {
      key: chainItem.id,
      label: (
        <div className="flex items-center gap-2">
          {chainItem.name}
          {currentChain?.id === chainItem?.id && <BsCheckLg className="text-success-500" />}
        </div>
      ),
      icon: <HiGlobe />,
      className: '',
      onClick: () => {
        if (currentChain?.id === chainItem?.id) return
        selectChain(chainItem)
      },
    }
  })

  if (supportedChains.length <= 1) return null

  return (
    <Dropdown menu={{ items }} disabled={isSwitchingChain}>
      <Button className="gap-2 px-2" type="default" loading={isSwitchingChain}>
        <HiGlobe />
        {currentChain?.name}
        <BiChevronDown className="text-xl" />
      </Button>
    </Dropdown>
  )
}
