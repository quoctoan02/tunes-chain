import { Modal as AntModal, ModalProps as AntModalProps } from "antd"
import { FC, ReactNode } from "react"
import { AiOutlineClose } from "react-icons/ai"

interface ModalProps extends AntModalProps {
  children: ReactNode
}

const Modal: FC<ModalProps> = ({ children, ...props }) => {
  return (
    <AntModal centered footer={null} {...props} closeIcon={<AiOutlineClose className="!text-content  text-xl" />}>
      {children}
    </AntModal>
  )
}

export default Modal
