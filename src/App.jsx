import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginSignup from './components/Login-Signup/LoginSignup'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginSignup setShowLogin={setShowLogin}/> : <></>}
    <div className='frontend'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/cart' element={<Cart/>} />
        <Route  path='/order' element={<PlaceOrder/>} />
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App