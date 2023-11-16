import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Slider from './components/Slider.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
   
      <div>
          <Header/>
          <Slider/>  
      </div>
 
  )
}

export default App
