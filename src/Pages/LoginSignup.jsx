import React from 'react'
import { Link, useNavigate } from 'react-router-dom'; 

import './CSS/LoginSignup.css'
const LoginSignup = () => {
  const navigate = useNavigate();

  const handleSellerLogin = () => {
    navigate('/seller-dashboard');
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password"  placeholder='Password'/>
        </div>
        

        <p className="loginsignupp">Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>I agree to the Terms and Conditions</p>
        </div>
        <button onClick={handleSellerLogin}>Continue</button>
        
       
      </div>
      
    </div>
  )
}

export default LoginSignup
