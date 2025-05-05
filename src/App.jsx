import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
      
    </BrowserRouter>
  )
}

export default App