import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Navbar.css';

export const Navbar = (props) => {
  const backendAddress = 'http://localhost:5000/userNavbar';
  const [isLoggedIn, setLoggedIn] = useState(props.isLogged);
  const [userName, setUserName] = useState(props.userName);

  useEffect(() => {
    // Fetch user data when props change
    axios.get(backendAddress)
      .then(response => {
        setUserName(response.data.userNavbar);
        setLoggedIn(response.data.userLogged);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [props]); // Add props as a dependency so useEffect runs when props change

  return (
    <div className="topnav">
      <a className="active" href="/About">
        About us
      </a>
      {isLoggedIn ? <div className="userData">{userName}</div> : null}
    </div>
  );
};
