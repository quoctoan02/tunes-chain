import { Button } from '@components/ui'
import { ConnectorIds, connectorInstances } from '@config/wagmi.config'
import { wallets } from '@config/wallets.config'
import { Popper } from '@helpers/Popper'
import { useUser } from '@hooks/stores/useUser'
import { useWeb3 } from '@hooks/stores/useWeb3'
import { Modal } from 'antd'
import { useCallback } from 'react'
import { isDesktop } from 'react-device-detect'
import { AiFillQuestionCircle, AiOutlineClose } from 'react-icons/ai'
import { toast } from 'react-toastify'
import { UserRejectedRequestError, useAccount, useConnect, useDisconnect } from 'wagmi'

export const useActive = () => {
  const hasInjectedProvider = typeof window !== 'undefined' && typeof window['ethereum'] !== 'undefined'

  const { chain, signerOrProvider } = useWeb3()
  const { connectAsync, connect: wagmiConnect } = useConnect({ chainId: chain.id })

  const { disconnectAsync } = useDisconnect()
  const { address: account, isConnected, isConnecting } = useAccount()

  const { logout } = useUser()

  const handleConnect = async (connectorId: ConnectorIds) => {
    try {
      const connector = connectorInstances[connectorId]
      console.log('🚀 ~ file: useActive.tsx:28 ~ handleConnect ~ connector:', connector)

      wagmiConnect({
        connector,
        chainId: chain.id,
      })

      // await connectAsync({
      //   connector,
      //   chainId: chain.id,
      // })
    } catch (err) {
      console.log('🚀 ~ file: useActive.tsx:40 ~ handleConnect ~ err:', err)
      if (err instanceof UserRejectedRequestError) {
        toast.error('You have rejected the connect request')
      } else {
        const message = err?.message
        toast.error(message)
      }
    }
  }

  const handleSelectWallet = (wallet: Wallet) => {
    Modal.destroyAll()
    if (wallet.injected) {
      handleConnect(wallet.connectorId)
    } else if (wallet.connectorId === ConnectorIds.WalletConnect) {
      handleConnect(wallet.connectorId)
    } else if (isDesktop) {
      // In Desktop
      if (typeof window.ethereum !== 'undefined' && window.ethereum[wallet.etherId]) {
        handleConnect(wallet.connectorId)
      } else if (wallet.mobileOnly) {
        handleConnect(ConnectorIds.WalletConnect)
      } else {
        window.open(wallet.downloadUrl, '_blank', 'noopener noreferrer')
      }
    } else {
      // In Mobile
      if (typeof window.ethereum !== 'undefined') {
        handleConnect(wallet.connectorId)
      } else if (wallet.deepLink) {
        window.open(wallet.deepLink, '_blank', 'noopener noreferrer')
      } else {
        handleConnect(ConnectorIds.WalletConnect)
      }
    }
  }

  const connect = () => {
    Modal.confirm({
      content: (
        <div className=" w-full rounded-2xl  p-2">
          <h6 className="text-content -mt-3  mb-5 text-lg font-medium">Connect Wallet</h6>
          <div className="grid grid-cols-3 gap-4">
            {wallets.map((wallet) =>
              !wallet.injected || (wallet.injected && hasInjectedProvider) ? (
                <img
                  key={wallet.name}
                  src={wallet.iconURI}
                  alt=""
                  role="button"
                  className="w-full rounded-2xl object-cover transition-all hover:scale-110"
                  onClick={() => handleSelectWallet(wallet)}
                />
              ) : null
            )}
          </div>
        </div>
      ),
      centered: true,
      width: 288,
      icon: null,
      closable: true,
      maskClosable: true,
      footer: null,
      closeIcon: <AiOutlineClose className="!text-content  text-xl" />,
    })
  }

  const disconnectWallet = () => {
    disconnectAsync()
    logout()
    Modal.destroyAll()
    Popper.close()
  }

  const disconnect = useCallback(async () => {
    Modal.confirm({
      content: (
        <div className=" w-full rounded-2xl  p-2">
          <h6 className="text-content mb-5  w-full text-center text-lg font-medium">Disconnect now ?</h6>
          <div className="flex w-full items-center justify-center ">
            <AiFillQuestionCircle className="text-8xl !text-slate-500" />
          </div>
          <div className="mt-6 flex items-center justify-center gap-5">
            <Button
              className="hover:text-primary-500 hover:border-primary-500 w-full dark:text-white"
              type="dashed"
              onClick={() => Modal.destroyAll()}
            >
              Cancel
            </Button>
            <Button className=" w-full dark:text-white" type="primary" onClick={disconnectWallet}>
              OK
            </Button>
          </div>
        </div>
      ),
      centered: true,
      icon: null,
      closable: true,
      footer: null,
      width: 315,
      maskClosable: true,
      closeIcon: <AiOutlineClose className="!text-content text-xl" />,
      zIndex: 2000,
    })

    // const { isConfirmed } = await Popper.fire({
    //   title: 'Confirm',
    //   html: <p className="text-center font-bold">Disconnect now ?</p>,
    //   icon: 'question',
    //   width: 400,
    //   showCancelButton: true,
    // })
    // if (isConfirmed) {
    //   disconnectAsync()
    //   logout()
    // }
  }, [disconnectAsync, logout])

  return { connect, disconnect, isConnecting, isConnected, account, disconnectWallet }
}
