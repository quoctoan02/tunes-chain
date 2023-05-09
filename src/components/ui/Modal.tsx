import { Modal as AntModal, ModalFuncProps } from 'antd'
import { FC, ReactNode } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

interface ModalProps extends ModalFuncProps {
  children: ReactNode
}

const Modal: FC<ModalProps> = ({ children, ...props }) => {
  return (
    <AntModal
      centered
      footer={null}
      destroyOnClose
      closeIcon={<AiOutlineClose className="!text-content  text-xl" />}
      {...props}
    >
      {children}
    </AntModal>
  )
}

export default Modal
