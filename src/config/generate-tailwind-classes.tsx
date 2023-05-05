import { cn } from '@utils/style'

const classes = [
  'ant-progress',
  'ant-segmented',
  'ant-btn',
  'ant-modal',
  'ant-popconfirm-buttons',
  'ant-modal-confirm-btns',
  'ant-typography',
]

export const generateTailwindClasses = () => {
  return <div className={cn(classes, 'hidden')}></div>
}
