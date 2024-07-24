import React, { useState } from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
    const [menu,setMenu] = useState("");

    return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className='logo' />
        <ul className="navbar-menu">
            <li onClick={() => setMenu("home")} className={menu==="home"?"active":""}>home</li>
            <li onClick={() => setMenu("menu")} className={menu==="menu"?"active":""}>menu</li>
            <li onClick={() => setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</li>
            <li onClick={() => setMenu("contact us")} className={menu==="contact us"?"active":""}>contact us</li>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" className="search-icon" />
            <div className="navbar-cart">
                <img src={assets.basket_icon} alt="" className="cart-icon" />
                <div className="box">

                </div>
            </div>
            <button>sign up</button>
        </div>
    </div>
  )
}

export default Navbar