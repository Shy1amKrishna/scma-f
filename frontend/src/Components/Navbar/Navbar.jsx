import React from 'react'
import "./Navbar.css";

export const Navbar = (props) => {
    const userName = props.userName;
    const isLoggedIn = props.isLogged;
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
