import { useState } from 'react'
import './App.css'
import Clock from './Clock'
import BareInput from './BareInput'
import LayOut from './Layout'
import BareButton from './BareButton'
import LoginControl from './LoginControl'
import CorrectlyState from './CorrectlyState'
import ProductList from './ProductList/ProductList'

function App() {
  // const [visible, setVisible] = useState(true)

  return (
    <div className='App'>
      {/* <LoginControl isLoggedIn={false} /> */}
      {/* <CorrectlyState /> */}
      <ProductList />
    </div>
  )
}

export default App
