import { SearchOutlined } from '@ant-design/icons'
import { Button } from '@components/ui'
import { Tooltip } from 'antd'
import type { FC } from 'react'

interface ButtonExampleProps {}

const ButtonExample: FC<ButtonExampleProps> = (props) => {
  return (
    <div className="">
      <div className="flex flex-wrap items-center gap-4">
        <Button className="" type="primary">
          Primary Button
        </Button>
        <Button className="" type="default">
          Default Button
        </Button>
        <Button type="dashed">Dashed Button</Button>
        <Button className="" type="primary" disabled>
          Disabled Button
        </Button>
        <Tooltip title="search">
          <Button shape="circle" type="primary" icon={<SearchOutlined />} />
        </Tooltip>
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
        <Button type="primary" loading>
          Loading
        </Button>
      </div>
    </div>
  )
}

export default ButtonExample
