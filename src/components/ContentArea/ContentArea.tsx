import { Content } from 'antd/es/layout/layout'
import './styles.scss'
import { StockTable } from '../StockTable/StockTable'
import { Filters } from '../Filters/Filters'
import { FilterProvider } from '../../providers/FilterProvider'

export function ContentArea() {
  return (
    <Content className='content__ContentArea'>
      <FilterProvider>
        <Filters />
        <StockTable />
      </FilterProvider>
    </Content>
  )
}
