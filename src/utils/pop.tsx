import { Spinner } from '@components/ui'
import { web3ErrorMsg } from '@constants/web3ErrorMsg'
import { Popper } from '@helpers/Popper'
import { useWeb3 } from '@hooks/stores/useWeb3'
import { HiExternalLink } from 'react-icons/hi'

export const popPendingConfirm = () =>
  Popper.fire({
    title: 'Confirm',
    customClass: {
      icon: '!border-none',
    },
    html: (
      <div className="flex flex-col items-center gap-6">
        <Spinner className="text-primary h-24 w-24" />
        <p className="text-center text-xl font-bold">Waiting for confirmation</p>
        <p className="text-center text-sm font-semibold">Confirm this transaction in your wallet</p>
      </div>
    ),
    showCloseButton: false,
    showConfirmButton: false,
    allowOutsideClick: false,
  })

export const popPending = (msg: string, hash?: string) =>
  Popper.fire({
    title: 'Pending',
    customClass: {
      icon: '!border-none',
    },
    html: (
      <div className="flex flex-col items-center gap-6">
        <Spinner className="text-primary h-24 w-24" />
        {hash && <p className="text-center text-xl font-bold">Transaction is processing</p>}
        <p className="text-center text-sm font-semibold">{msg}</p>
        {hash && (
          <a
            href={useWeb3.getState().chain.blockExplorers.default.url + 'tx/' + hash}
            target="_blank"
            rel="noopener noreferrer"
            className="text-info flex items-center gap-2 text-center text-sm font-semibold"
          >
            <p>View transaction</p>
            <HiExternalLink />
          </a>
        )}
      </div>
    ),
    showCloseButton: false,
    showConfirmButton: false,
    allowOutsideClick: false,
  })

export const popSuccess = (msg: string, hash?: string) =>
  Popper.fire({
    icon: 'success',
    title: 'Success',
    html: (
      <div className="flex flex-col items-center gap-2">
        {hash && <p className="text-center text-xl font-bold">Transaction Submitted</p>}
        <p className="text-center text-sm font-semibold">{msg}</p>
        {hash && (
          <a
            href={useWeb3.getState().chain.blockExplorers.default.url + 'tx/' + hash}
            target="_blank"
            rel="noopener noreferrer"
            className="text-info flex items-center gap-2 text-center text-xs font-medium"
          >
            <p>View transaction</p>
            <HiExternalLink />
          </a>
        )}
      </div>
    ),
    showCloseButton: false,
  })

export const popError = (msg: string, hash?: string) =>
  Popper.fire({
    icon: 'error',
    title: 'Error',
    html: (
      <div className="flex flex-col items-center gap-2">
        {hash && <p className="text-center text-xl font-bold">Transaction Failed</p>}
        <p className="text-center text-sm font-semibold">{msg}</p>
        {hash ? (
          <a
            href={useWeb3.getState().chain.blockExplorers.default.url + 'tx/' + hash}
            target="_blank"
            rel="noopener noreferrer"
            className="text-error flex items-center gap-2 text-center text-xs font-medium"
          >
            <p>View transaction</p>
            <HiExternalLink />
          </a>
        ) : null}
        <p className="text-center text-xs font-medium">Please try again</p>
      </div>
    ),
    showCloseButton: false,
    showConfirmButton: false,
    showDenyButton: true,
    denyButtonText: 'OK',
  })

export const popWeb3Errors = (err: any, defaultMsg: string) => {
  popError(web3ErrorMsg[err.code] || defaultMsg || 'An unexpected error occurred')
}
