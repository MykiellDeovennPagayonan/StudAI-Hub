import { useState, useEffect } from 'react'
import './App.css'
import StudAI from './components/StudAI'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  useEffect(() => {
    if (localStorage.getItem("loggedIn")) {
      setLoggedIn(true)
    }
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/login" element={
          <div className='login-page'>
            <Login
              setLoggedIn={setLoggedIn}/>
          </div>
        } />
        <Route path="/" element={
          <div className='app'>
            <StudAI
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}/>
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App
