import React from 'react'
import Testone from './components/Testone'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import Schedule from './pages/Schedule'

function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<Schedule/>} />
    </Routes>
    </div>
  )
}

export default App