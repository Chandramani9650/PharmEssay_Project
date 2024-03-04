import { useState } from 'react'

import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Navbar from './NavSection/Navbar'

import Login from './HomeSection/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  


   <Navbar/>
   {/* <Login/> */}

 
    </>
  )
}

export default App
