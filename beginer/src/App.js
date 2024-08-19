import { useState } from 'react'
import './App.css'
import Clock from './Clock'
import BareInput from './BareInput'

function App() {
  const [visible, setVisible] = useState(true)

  return (
    // <div className='App'>
    //   <button onClick={() => setVisible(false)}>Hide Clock component</button>
    //   {visible && <Clock />}
    // </div>

    <BareInput type='text' value='100' autoFocus /> //missing onChange when using functional. will learn later
  )
}

export default App
