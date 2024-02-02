import React from 'react'
import './LoginSignup.css' 
import user_icon from '../Assets/person.png'
import password_icon from '../Assets/password.png'

export const LoginSignup = () => {

  function onLoginClick(){
    console.log("Login clicked")
  }

  return (
    <>
    <div className='container'>
       <div className="header">
         <div className="text">Login</div>
         <div className="underline"></div>
       </div>
       <form action='/Home' autoComplete="on"> {/* Changed autocomplete to autoComplete */}
       <div className="Linputs">
        <div className="Linput">
         <img src={user_icon} alt="" />
         <input type="text" name='username'  id='Name' placeholder='Name' autoComplete="username" required/> {/* Changed name to 'username' and added autoComplete="username" */}
        </div>
        <div className="Linput">
         <img src={password_icon} alt="" />
         <input type="password" name='current-password' id='Password' placeholder='Password' autoComplete="current-password" required/> {/* Changed name to 'current-password' and added autoComplete="current-password" */}
        </div>
        </div>
       <div className="submit-container">
        <button type="submit" className="submit" onClick={onLoginClick}>Login</button>
       </div>
       </form>
    </div>
  </>
  )
}
