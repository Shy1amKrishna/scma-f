import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css' 
import user_icon from '../Assets/person.png'
import password_icon from '../Assets/password.png'
import { useNavigate } from 'react-router-dom'

export const Signup = () => {

  const navigate = useNavigate();
  const path = "/"
  
  function handleClick(){
    navigate(path);
  }
  const [response, setResponse] = useState(null); // Initialize with null
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const backendAddress = 'http://localhost:5000/signup';

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(backendAddress, {
        username: username,
        password: password
      });

      // Handle successful signup (e.g., show success message, redirect)
      console.log(response.data);
      // Set the response state
      setResponse(response.data);

    } catch (error) {
      // Handle login error
      console.error('Signup failed:', error.message);
    }
  };

  return (
    <>
    <div className='container'>
       <div className="header">
         <div className="text">Signup</div>
       </div>
       <form onSubmit={handleSignup} autoComplete="on"> {/* Changed autocomplete to autoComplete */}
       <div className="Linputs">
        <div className="Linput">
         <img src={user_icon} alt="" />
         <label htmlFor="name" className='hidden'>Name:</label>
         <input type="text" name="username" id="name" placeholder="Enter your name" required autoComplete="off" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="Linput">
         <img src={password_icon} alt="" />
         <label htmlFor="password" className='hidden'>Password:</label>
         <input type="password" name="password" id="password" placeholder="Enter password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='dialog1'>
        <p className="response">{response}</p> {/* Display response */}
        </div>
        <div className='dialog2'>
        <p>Already have an account?<span className='link' onClick={handleClick}>Login</span></p>
        </div>
        </div>
       <div className="submit-container">
        <button type="submit" className="submit-btn">Signup</button>
       </div>
       </form>
    </div>
  </>
  )
}
