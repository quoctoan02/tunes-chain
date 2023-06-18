import { cn } from '@utils/style'

const classes = [
  'ant-progress',
  'ant-segmented',
  'ant-btn',
  'ant-modal',
  'ant-popconfirm-buttons',
  'ant-modal-confirm-btns',
  'ant-typography',
  'ant-input-wrapper',
  // 'text-overflow-1',
  // 'text-overflow-2',
  // 'text-overflow-3',
]

export const generateTailwindClasses = () => {
  return <div className={cn(classes, 'hidden h-0 w-0 overflow-hidden')}></div>
}
