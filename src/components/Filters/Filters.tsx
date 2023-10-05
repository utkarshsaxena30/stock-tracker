import { DownOutlined } from '@ant-design/icons'
import { Button, Dropdown, MenuProps, Space } from 'antd'
import { useFilterProvider } from '../../providers/FilterProvider'

const items = [
  {
    label: '1 second',
    key: '1',
  },
  {
    label: '3 seconds',
    key: '3',
  },
  {
    label: '1 minute',
    key: '60',
  },
]

const getItemLabel = (key: string) => {
  return items.find((item) => item?.key === key)?.label ?? 'Undefined'
}

export function Filters() {
  const { timeInterval, setTimeInterval } = useFilterProvider()

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    setTimeInterval(e.key)
  }

  return (
    <div style={{ width: 'max-content' }}>
      <Dropdown menu={{ items, onClick: handleMenuClick }}>
        <Button>
          <Space>
            <span>Time Interval: {getItemLabel(timeInterval)}</span>
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </div>
  )
}
