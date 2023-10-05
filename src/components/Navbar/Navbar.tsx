import { Header } from 'antd/es/layout/layout'
import './styles.scss'
import { StockOutlined } from '@ant-design/icons'

export function Navbar() {
  return (
    <Header className='header__Navbar'>
      <div className='logo_title__Navbar'>
        <StockOutlined />
        <span>Stock Tracker</span>
      </div>
    </Header>
  )
}
