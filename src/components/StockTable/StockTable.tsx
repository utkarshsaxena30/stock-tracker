import { Table, TableProps } from 'antd'
import { useMemo } from 'react'
import { useFilterProvider } from '../../providers/FilterProvider'

type RecordType = {
  time: string
  price: string
}

const Columns: TableProps<RecordType>['columns'] = [
  {
    key: 'time',
    title: 'Time',
    dataIndex: 'time',
  },
  {
    key: 'price',
    title: 'Price',
    dataIndex: 'price',
  },
]

const getData = (timeInterval: string) => {
  const data: RecordType[] = new Array(500).fill(null).map((_, index) => ({
    time: `${index * +timeInterval}`,
    price: `${index * 10}`,
  }))

  return data
}

export function StockTable() {
  const { timeInterval } = useFilterProvider()
  const data = useMemo(() => getData(timeInterval), [timeInterval])

  return (
    <Table
      bordered={true}
      virtual
      columns={Columns}
      scroll={{ y: 400 }}
      rowKey='time'
      dataSource={data}
      pagination={false}
    />
  )
}
