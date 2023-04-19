import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h3 className='text-3xl'>Hello world</h3>
      <button className="btn btn-accent">Button</button>
    </div>
  )
}

export default App
