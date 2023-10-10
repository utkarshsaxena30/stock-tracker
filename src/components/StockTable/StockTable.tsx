import { Table, TableProps, message } from 'antd'
import { useEffect, useMemo, useState } from 'react'
import { useFilterProvider } from '../../providers/FilterProvider'

type RecordType = {
  time: string
  spot: string
  // futurePrice: string
  ce: string
  pe: string
  ce_divergence: 'yes' | 'no'
  pe_divergence: 'yes' | 'no'
  // futureDivergence: number
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
  // {
  //   key: 'futurePrice',
  //   title: 'Future Price',
  //   dataIndex: 'futurePrice',
  // },
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
    key: 'ce_divergence',
    title: 'ce_divergence',
    dataIndex: 'ce_divergence',
  },
  {
    key: 'pe_divergence',
    title: 'pe_divergence',
    dataIndex: 'pe_divergence',
  },
  // {
  //   key: 'futureDivergence',
  //   title: 'Future Divergence',
  //   dataIndex: 'futureDivergence',
  // },
]

// const getData = (timeInterval: string) => {
//   const data: RecordType[] = new Array(500).fill(null).map((_, index) => ({
//     time: `${index * +timeInterval}`,
//     spot: `${index}_spot`,
//     futurePrice: `${index}_futurePrice`,
//     ce: `${index}_ce`,
//     pe: `${index}_pe`,
//     bullish: index & 1 ? 'yes' : 'no',
//     bearish: !(index & 1) ? 'yes' : 'no',
//     futureDivergence: index * 10,
//   }))

//   return data
// }

export function StockTable() {
  const { symbol, strike } = useFilterProvider()
  const [data, setData] = useState<RecordType[]>([])

  const memoizedData = useMemo(() => data, [data])

  useEffect(() => {
    const getDataFromServer = async () => {
      const response = await fetch(
        `http://127.0.0.1:8000/options?stock=${symbol}&strike=${strike}&expiry=2023-10-26&time_interval=1`
      )

      if (!response.ok) {
        message.error('GET API options/stock unsuccessful')
        return
      }

      const text = await response.text()
      const json = text ? JSON.parse(text) : {}

      setData(json)
    }

    getDataFromServer()
  }, [symbol, strike])

  return (
    <Table
      bordered={true}
      virtual
      columns={Columns}
      scroll={{ y: 400 }}
      rowKey='time'
      dataSource={memoizedData}
      pagination={false}
    />
  )
}
