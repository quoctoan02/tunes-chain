import { ToastOptions, toast } from "react-toastify"
import Toastify, { ToastifyProps } from "./Toastify"

export const toastContent = ({ message, type, title }: ToastifyProps, options?: ToastOptions) => {
  return toast(<Toastify type={type} message={message} title={title} />, {
    closeButton: true,
    hideProgressBar: false,
    ...options,
  })
}
