import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import  Signup  from './pages/Signup'
import  Login  from './pages/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Routes>
       
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
    </>
  )
}

export default App

