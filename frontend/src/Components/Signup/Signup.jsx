import React from 'react'
import './Signup.css' 
import user_icon from '../Assets/person.png'
import password_icon from '../Assets/password.png'

export const Signup = () => {

  function onSignupClick(){
    console.log("Signup clicked")
  }


  return (
    <>
    <div className='container'>
       <div className="header">
         <div className="text">Signup</div>
       </div>
       <form action='/Signup' method="post" autoComplete="on"> {/* Changed autocomplete to autoComplete */}
       <div className="Linputs">
        <div className="Linput">
         <img src={user_icon} alt="" />
         <label for="name" className='hidden'>Name:</label>
         <input type="text" name="username" id="name" placeholder="Enter your name" required autocomplete="off"/>
        </div>
        <div className="Linput">
         <img src={password_icon} alt="" />
         <label for="password" className='hidden'>Password:</label>
         <input type="password" name="password" id="password" placeholder="Enter password" required/>
        </div>
        <div className='dialog'>
        <p>Already have an account?<a href="/">Login</a></p>
        </div>
        </div>
       <div className="submit-container">
        <button type="submit" className="submit" onClick={onSignupClick}>Signup</button>
       </div>
       </form>
    </div>
  </>
  )
}
