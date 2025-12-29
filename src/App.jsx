import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import NavBar from './Components/NavBar'
import ScrollProgress from './Components/Scrollbar'
import Cursor from './Components/Cursor'

const App = () => {
  return (
    <div>
      <Cursor/>
      <ScrollProgress/>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
