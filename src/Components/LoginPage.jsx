import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const LoginPage = () => {

  const [email,setEmail]=useState(" ");
  const [password,setPassword]=useState(" ");
  return (
    <div className='login-container'>
      <div className='login'> 
    <h1>Login</h1>
    
   <div className='login-parameter'>
   <input type="text" placeholder='Email' value={email} className='input' required onChange={(e)=>setEmail(e.target.value)}/>
    <br />
    <input type="text" placeholder='Password' value={password} className='input' required onChange={(e)=>setPassword(e.target.value)}/>
   </div>
    <br />
    <button className='submit'>Log In</button>
    <div className='exist'>
    New to TasteBite?  <span className='account'> <Link className='link' to="/signUp">Create Account</Link></span>
    </div>
    </div>
    </div>
  )
}

export default LoginPage