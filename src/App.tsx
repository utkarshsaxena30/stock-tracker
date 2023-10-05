import { Navbar } from './components/Navbar/Navbar'
import { ContentArea } from './components/ContentArea/ContentArea'
import { Layout } from 'antd'
import { Footer } from 'antd/es/layout/layout'
import './index.scss'

function App() {
  return (
    <Layout>
      <Navbar />
      <ContentArea />
      <Footer style={{ textAlign: 'center', height: '64px' }}>
        Stock Tracker ©2023 Created by{' '}
        <a href='https://github.com/utkarshsaxena30' target='_blank'>
          utkarshsaxena30
        </a>
      </Footer>
    </Layout>
  )
}

export default App
