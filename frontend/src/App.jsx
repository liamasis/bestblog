import { useState } from 'react'
import { NavBar } from './components/NavBar/NavBar'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Home from './components/Home/Home'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.scss';
import { Provider } from 'react-redux'
import store from './store'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {

  return (
    <>
      <Provider store={store}>
        <Router>
          <NavBar />
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/login' element={<Login />}/>
              <Route path='/register' element={<Register />}/>
          </Routes>
        </Router>
      </Provider>
    </>
  )
}

export default App
