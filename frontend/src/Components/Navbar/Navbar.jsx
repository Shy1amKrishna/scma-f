import React from 'react'
import "./Navbar.css";
import { useState,useEffect } from 'react';
import axios from 'axios';


export const Navbar = (props) => {
    const backendAddress = 'http://localhost:5000/userNavbar';
    //const userName = props.userName;
    const reload = props.key;
    const isLoggedIn = props.isLogged;
    const [userName, setUserName] = useState(null);

    useEffect(() => {
      axios.get(backendAddress)
        .then(response => {
          setUserName(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, [reload]); // Empty dependency array means this effect runs once after the component mounts
  

  return (
    <>
      <div className="topnav">
        <a className="active" href="/About">
          About us
        </a>
        {isLoggedIn ? <div className="userData">{userName}</div> : null}
      </div>
    </>
  )
}
