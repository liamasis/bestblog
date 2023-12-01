import { useState } from 'react'
import { NavBar } from './components/NavBar/NavBar'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Home from './components/Home/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {

  return (
  
      <div className="">
        <Router>
          <NavBar />
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/login' element={<Login />}/>
              <Route path='/register' element={<Register />}/>
          </Routes>
        </Router>
      </div>
  
  )
}

export default App
