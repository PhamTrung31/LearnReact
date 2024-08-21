import { useState } from 'react'
import './App.css'
import Clock from './Clock'
import BareInput from './BareInput'
import LayOut from './Layout'
import BareButton from './BareButton'

function App() {
  const [visible, setVisible] = useState(true)

  return (
    <div className='App'>
      {/* <button onClick={() => setVisible(false)}>Hide Clock component</button>
       {visible && <Clock />} */}
      <LayOut>
        <h1>This is layout</h1>
        <BareInput type='text' value='100' autoFocus />{' '}
        {/* //missing onChange when using functional. will learn later */}
        <BareButton />
      </LayOut>
    </div>
  )
}

export default App
