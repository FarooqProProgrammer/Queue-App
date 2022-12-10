import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import View from './pages/View'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/view/:id" element={<View/>}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default App