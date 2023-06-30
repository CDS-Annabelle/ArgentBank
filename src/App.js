import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import User from './pages/Profile/User'
import Footer from './components/Footer/Footer';

const App = () => {
  return (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path='/profil' element={<User/>} />  
      <Route path="/*" element={<Error />} />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
