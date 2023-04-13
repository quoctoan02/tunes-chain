import { FC } from "react"
import { Toaster } from "react-hot-toast"

export const ToasterContainer: FC = () => {
  return (
    <Toaster
      toastOptions={{
        position: "bottom-center",
        className: "!bg-component !text-content",
      }}
    />
  )
}
