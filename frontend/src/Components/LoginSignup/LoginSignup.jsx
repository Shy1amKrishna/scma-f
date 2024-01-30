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
       <form action='' method='POST'>
       <div className="Linputs">
        <div className="Linput">
         <img src={user_icon} alt="" />
         <input type="text" name='Name'  id='Name' placeholder='Name' autocomplete="given-name" required/>
        </div>
        <div className="Linput">
         <img src={password_icon} alt="" />
         <input type="password" name='Password' id='Password' placeholder='Password' autocomplete="new-password" required/>
        </div>
        </div>
       <div className="submit-container">
        <button className="submit" onClick={onLoginClick}>Login</button>
       </div>
       </form>
    </div>
  </>
  )
}
