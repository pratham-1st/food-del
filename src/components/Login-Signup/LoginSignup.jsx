import React, { useState } from 'react'
import './LoginSignup.css'
import { assets } from '../../assets/assets'

const LoginSignup = ({setShowLogin}) => {

    const [currState, setCurrState] = useState("Login")

  return (
    <div className='login-signup'>
        <form className="login-signup-container">
            <div className="login-signup-title">
                <h2>{currState}</h2>
                <img onClick={() => setShowLogin(false)} src={assets.cross_icon}  />
            </div>
            <div className="login-signup-input">
                {currState==="Login"?<></> :  <input type="text" placeholder='Your Name' required />}
               
                <input type="email" placeholder='Your Email' required />
                <input type="password" placeholder='Your Password' required />
            </div>
            <button>{currState==="Sign Up"? "Create account" : "Login"}</button>
            <div className="login-signup-check">
                <input type="checkbox" />
                <p>By continuing, I agree to the use of terms & privacy policy</p>
            </div>
            {currState==="Login"
            ?<p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
            :<p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>}
           
        </form>
    </div>
  )
}

export default LoginSignup