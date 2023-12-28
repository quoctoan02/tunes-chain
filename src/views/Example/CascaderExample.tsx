import { Cascader } from 'antd'
import type { FC } from 'react'

interface CascaderExampleProps {}

interface Option {
  value: string | number
  label: string
  children?: Option[]
}

const CascaderExample: FC<CascaderExampleProps> = (props) => {
  const onChange = (value: string[]) => {
    console.log(value)
  }

  return (
    <div>
      <Cascader options={options} onChange={onChange} placeholder="Please select" />
    </div>
  )
}

const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
]

export default CascaderExample

// #f7f0ff
