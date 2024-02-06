import React, { useState } from 'react';
import './Login.css'; 
import user_icon from '../Assets/person.png';
import password_icon from '../Assets/password.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Login = () => {
  const navigate = useNavigate();
  const path = "/signup";

  function handleClick() {
    navigate(path);
  }

  const [response, setResponse] = useState(null); // Initialize with null

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await axios.post('http://localhost:5000/login', {
        username: username,
        password: password
      });

      // Set the response state
      setResponse(response.data);

      // Assuming the backend returns a token upon successful login
      const token = response.data.token;

      // You can store the token in local storage or state for future use
      localStorage.setItem('token', token);
      console.log(response.data);

      // Redirect or perform other actions upon successful login
      if (response.data === "Login successful") {
        navigate("/home");
      }
    } catch (error) {
      // Handle login error
      console.error('Login failed:', error.message);
    }
  };

  return (
    <>
      <div className='container'>
        <div className="header">
          <div className="text">Login</div>
        </div>
        <form onSubmit={handleLogin} autoComplete="on">
          <div className="Linputs">
            <div className="Linput">
              <img src={user_icon} alt="User icon" aria-label="User icon" />
              <label htmlFor="name" className='hidden'>Name:</label>
              <input type="text" name="username" id="name" placeholder="Enter your name" required autoComplete="off" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="Linput">
              <img src={password_icon} alt="Password icon" aria-label="Password icon" />
              <label htmlFor="password" className='hidden'>Password:</label>
              <input type="password" name="password" id="password" placeholder="Enter password" required autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            </div>
            <div className='dialog1'>
              <p className="response">{response}</p> {/* Display response */}
            </div>
            <div className='dialog2'>
              <p>Don't have an account?<span className='link' onClick={handleClick}>SignUp</span></p>
            </div>
          <div className="submit-container">
            <button type="submit" className="submit-btn">Login</button>
          </div>
        </form>
      </div>
    </>
  );
};
