import { popError, popPending, popPendingConfirm, popSuccess, popWeb3Errors } from '@utils/pop'
import { ethers } from 'ethers'
import { useCallback } from 'react'
import useSWR from 'swr'
import { useSigner } from 'wagmi'
import { useErc20Contract } from '../core/useContract'

export const useAllowance = (_address: string, _spender: string) => {
  const { data: signer } = useSigner()

  const erc20Contract = useErc20Contract(_address)

  const { data: allowance, mutate: refreshAllowance } = useSWR(['allowance', signer, erc20Contract], async () => {
    try {
      if (signer) {
        const account = await signer.getAddress()
        return await erc20Contract.allowance(account, _spender)
      }
      return null
    } catch (err) {
      return null
    }
  })

  const approve = useCallback(async () => {
    try {
      popPendingConfirm()
      const tx = await erc20Contract.approve(_spender, ethers.constants.MaxUint256)
      popPending('Approval is pending', tx.hash)
      const txn = await tx.wait()
      if (txn.status) {
        await refreshAllowance()
        popSuccess(txn.transactionHash)
      } else {
        popError('Approve failed', txn.transactionHash)
      }
    } catch (err) {
      popWeb3Errors(err, 'Approve failed')
    }
  }, [erc20Contract])

  return { allowance, approve, refreshAllowance }
}
