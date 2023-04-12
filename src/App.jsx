import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Headers/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Outlet></Outlet>
    
    </>
  )
}

export default App
