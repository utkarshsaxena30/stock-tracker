import { Table, TableProps } from 'antd'
import { useMemo } from 'react'
import { useFilterProvider } from '../../providers/FilterProvider'

type RecordType = {
  time: string
  spot: string
  futurePrice: string
  ce: string
  pe: string
  bullish: 'yes' | 'no'
  bearish: 'yes' | 'no'
  futureDivergence: number
}

const Columns: TableProps<RecordType>['columns'] = [
  {
    key: 'time',
    title: 'Time',
    dataIndex: 'time',
  },
  {
    key: 'spot',
    title: 'Spot',
    dataIndex: 'spot',
  },
  {
    key: 'futurePrice',
    title: 'Future Price',
    dataIndex: 'futurePrice',
  },
  {
    key: 'ce',
    title: 'CE',
    dataIndex: 'ce',
  },
  {
    key: 'pe',
    title: 'PE',
    dataIndex: 'pe',
  },
  {
    key: 'bullish',
    title: 'Bullish',
    dataIndex: 'bullish',
  },
  {
    key: 'bearish',
    title: 'Bearish',
    dataIndex: 'bearish',
  },
  {
    key: 'futureDivergence',
    title: 'Future Divergence',
    dataIndex: 'futureDivergence',
  },
]

const getData = (timeInterval: string) => {
  const data: RecordType[] = new Array(500).fill(null).map((_, index) => ({
    time: `${index * +timeInterval}`,
    spot: `${index}_spot`,
    futurePrice: `${index}_futurePrice`,
    ce: `${index}_ce`,
    pe: `${index}_pe`,
    bullish: index & 1 ? 'yes' : 'no',
    bearish: !(index & 1) ? 'yes' : 'no',
    futureDivergence: index * 10,
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
