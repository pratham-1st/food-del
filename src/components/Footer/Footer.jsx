import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-container'>
            <div className="footer-left">
                <img src={assets.logo} className='footer-image'/>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam eveniet quas nam quos consequuntur delectus in saepe, sunt reprehenderit incidunt?</p>
                <div className="social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className='footer-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-8050480504</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 @ Tomato.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer