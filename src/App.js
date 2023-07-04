import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import { isLogin, fetchUserData } from './data/api'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import SignIn from './pages/SignIn/SignIn.js'
import User from './pages/User/User.js'
import Error from './pages/Error/Error.js'

const App = () => {
  useEffect(() => {
    if (isLogin()) {
      fetchUserData()
    }
  }, [])

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
