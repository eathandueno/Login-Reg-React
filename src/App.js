import React, { useState, useEffect} from 'react'
import './globals.css'
import Registration from './components/Registration';
import { LoginForm } from './components/LoginForm';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

const App = () => {
    const [active, setActive] = useState("Login")
    const [loggedIn, setLoggedIn] = useState(false)
    
    return (
      <>
      {loggedIn ? (
        <div>Welcome </div>
      ) : (
        <div>
          <Navbar />
          <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/Login' element={<LoginForm />} />
          <Route path='/Registration' element={<Registration />} />
          </Routes>
        </div> 
        
        

      )}
      
      
      </>
    )
    }
  
export default App