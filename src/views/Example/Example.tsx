import { UserOutlined } from '@ant-design/icons'
import { Container } from '@components/Layout'
import { Button } from '@components/ui'
import { toastContent } from '@helpers/toastContent'
import {
  Avatar,
  Badge,
  Breadcrumb,
  Card,
  Checkbox,
  Collapse,
  Divider,
  Dropdown,
  Form,
  Input,
  InputNumber,
  MenuProps,
  Pagination,
  Popconfirm,
  Popover,
  Progress,
  Radio,
  Rate,
  Segmented,
  Select,
  Slider,
  Space,
  Statistic,
  Steps,
  Switch,
  Table,
  Tabs,
  TabsProps,
  Tag,
  Tooltip,
  Transfer,
  Typography,
  message,
  notification,
  theme,
} from 'antd'
import { NotificationPlacement } from 'antd/es/notification/interface'
import { SliderMarks } from 'antd/es/slider'
import { FC, createContext, useState } from 'react'
import ButtonExample from './ButtonExample'
import CascaderExample from './CascaderExample'
import ModalExample from './ModalExample'
import TableExample from './TableExample'

interface ExampleProps {}

const Context = createContext({ name: 'Default' })

const { useToken } = theme

const Example: FC<ExampleProps> = (props) => {
  const [open, setOpen] = useState(false)

  const { theme, token } = useToken()

  // console.log({ theme, token })

  const [messageApi, contextHolderMessage] = message.useMessage()
  const [notificationApi, contextHolderNotification] = notification.useNotification()

  const openNotification = (placement: NotificationPlacement) => {
    notificationApi.success({
      message: `Notification ${placement}`,
      description: <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>,
      placement,
    })
  }

  const confirm = () => {
    message.info('Clicked on Yes.')
  }

  return (
    <Container size="md" className="flex flex-col gap-4 py-20">
      <ButtonExample />
      <Typography.Paragraph
        copyable={{
          text: 'Text was copied',
          tooltips: ['Click here to copy', 'Copied!!'],
        }}
      >
        Copy Text
      </Typography.Paragraph>

      <ModalExample />

      <div className="flex items-center gap-4">
        <Button
          className="bg-success-500"
          onClick={() => toastContent({ message: 'Toast message custom', type: 'success' })}
        >
          Toast Success
        </Button>
        <Button className="bg-sky-500" onClick={() => toastContent({ message: 'Toast message custom', type: 'info' })}>
          Toast Info
        </Button>
        <Button
          className="bg-error-500"
          onClick={() => toastContent({ message: 'Toast message custom', type: 'error' })}
        >
          Toast Error
        </Button>
      </div>

      <Dropdown menu={{ items }} placement="bottom" arrow>
        <Button type="primary">Dropdown</Button>
      </Dropdown>
      <Breadcrumb
        items={[
          {
            title: 'Home',
          },
          {
            title: <a href="">Application Center</a>,
          },
          {
            title: <a href="">Application List</a>,
          },
          {
            title: 'An Application',
          },
        ]}
      />

      <Button
        type="primary"
        onClick={() => {
          messageApi.success('Hello world')
          openNotification('topRight')
        }}
      >
        {contextHolderNotification}
        {contextHolderMessage}
        Show Message
      </Button>

      <Popconfirm
        placement="topLeft"
        title="Hello World"
        description={' Lorem ipsum dolor sit amet consectetur adipisicing elit'}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button type="primary">Pop Confirm</Button>
      </Popconfirm>

      <Progress percent={30} />
      <Divider />
      <Divider>Text Content</Divider>
      <Pagination defaultCurrent={6} total={500} />

      <Steps
        current={1}
        items={[
          {
            title: 'Finished',
            description: 'Description',
          },
          {
            title: 'In Progress',
            description: 'Description',
            subTitle: 'Left 00:00:08',
          },
          {
            title: 'Waiting',
            description: 'Description',
          },
        ]}
      />

      <CascaderExample />
      <div className="form">
        <Checkbox>Checkbox</Checkbox>

        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item label="Number" name="number" rules={[{ required: true, message: 'Please input your number!' }]}>
            <InputNumber min={1} max={10} defaultValue={3} />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>

          <Radio.Group>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
          </Radio.Group>

          <Rate />

          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
              { value: 'Yiminghe', label: 'yiminghe' },
              { value: 'disabled', label: 'Disabled', disabled: true },
            ]}
          />
        </Form>
      </div>
      <Slider range marks={marks} defaultValue={[26, 37]} />
      <div className="">
        <Switch defaultChecked />
      </div>
      <Transfer
        dataSource={mockData}
        titles={['Source', 'Target']}
        targetKeys={initialTargetKeys}
        //   selectedKeys={selectedKeys}
        //   onChange={onChange}
        //   onSelectChange={onSelectChange}
        //   onScroll={onScroll}
        render={(item) => item.title}
      />
      <Avatar size={64} icon={<UserOutlined />} />
      <Badge count={99}>
        <Avatar shape="square" size="large" />
      </Badge>

      <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>

      <Collapse
        defaultActiveKey={['1']}
        //   onChange={onChange}
      >
        <Collapse.Panel header="This is panel header 1" key="1">
          <p>{' A dog is a type of domesticated animal.'}</p>
        </Collapse.Panel>
        <Collapse.Panel header="This is panel header 2" key="2">
          <p>{'  Known for its loyalty and faithfulness,'}</p>
        </Collapse.Panel>
        <Collapse.Panel header="This is panel header 3" key="3">
          <p>{'  it can be found as a welcome guest in many households across the world.'}</p>
        </Collapse.Panel>
      </Collapse>

      <Popover
        content={
          <div>
            <p>Content</p>
            <p>Content</p>
          </div>
        }
        title="Title"
      >
        <Button type="primary">Hover me</Button>
      </Popover>

      <Segmented options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />

      <Statistic title="Active Users" value={112893} />

      <Table dataSource={dataSource} columns={columns} />

      <Tabs defaultActiveKey="1" items={tabItems} />

      <Space size={[0, 8]} wrap>
        <Tag>Tag 1</Tag>
        <Tag>Tag 2</Tag>
        <Tag>Tag 3</Tag>
      </Space>

      <Tooltip title="Thanks for using antd. Have a nice day!">
        <Button>Tooltip</Button>
      </Tooltip>

      <TableExample />
    </Container>
  )
}

interface RecordType {
  key: string
  title: string
  description: string
}

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    ),
  },
]

const marks: SliderMarks = {
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>100°C</strong>,
  },
}

const mockData: RecordType[] = Array.from({ length: 20 }).map((_, i) => ({
  key: i.toString(),
  title: `content${i + 1}`,
  description: `description of content${i + 1}`,
}))

const initialTargetKeys = mockData.filter((item) => Number(item.key) > 10).map((item) => item.key)

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
]

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
]

const tabItems: TabsProps['items'] = [
  {
    key: '1',
    label: `Tab 1`,
    children: `Content of Tab Pane 1`,
  },
  {
    key: '2',
    label: `Tab 2`,
    children: `Content of Tab Pane 2`,
  },
  {
    key: '3',
    label: `Tab 3`,
    children: `Content of Tab Pane 3`,
  },
]

export default Example
