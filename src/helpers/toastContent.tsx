import { ToastComponent, ToastComponentProps } from '@components/ui'
import { ToastOptions, toast } from 'react-toastify'

export const toastContent = ({ message, type, title }: ToastComponentProps, options?: ToastOptions) => {
  return toast(<ToastComponent type={type} message={message} title={title} />, {
    closeButton: true,
    hideProgressBar: false,
    ...options,
  })
}
