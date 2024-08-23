import React, { useContext, useState } from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {
    const [menu,setMenu] = useState("");

    const {getTotalCartAmount} = useContext(StoreContext)

    return (
    <div className='navbar'>
        <Link to="/"><img src={assets.logo} alt="" className='logo' /></Link>
        <ul className="navbar-menu">
            <Link to='/' onClick={() => setMenu("home")} className={menu==="home"?"active":""}>home</Link>
            <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
            <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
            <a href='#footer' onClick={() => setMenu("contact us")} className={menu==="contact us"?"active":""}>contact us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" className="search-icon" />
            <div className="navbar-cart">
                <Link to="/cart"><img src={assets.basket_icon} alt="" className="cart-icon" /></Link>
                <div className={getTotalCartAmount()===0?"":"box"}>

                </div>
            </div>
            <button onClick={() => setShowLogin(true)}>sign up</button>
        </div>
    </div>
  )
}

export default Navbar