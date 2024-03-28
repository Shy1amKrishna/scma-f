import React, { useEffect, useState } from "react";
import Logo from "../Assets/SCMA_logo.png";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [userName, setUserName] = useState(localStorage.getItem("userName")); //fetching username from local storage
  const [isLogged, setLogged] = useState(localStorage.getItem("isLogged")); //fetching logged state fron local storage
  const [mode, setMode] = useState(localStorage.getItem("Mode")); //fetching Mode fron local storage
  const navigate = useNavigate();

  useEffect(() => {
    setLogged(localStorage.getItem("isLogged"));
    setUserName(localStorage.getItem("userName"));
    setMode(localStorage.getItem("Mode"));
    //console.log("username = " + userName + " logged = " + isLogged);
  }, [userName, isLogged, mode]);

  const LogOut = () => {
    localStorage.setItem("userName", "");
    localStorage.setItem("isLogged", "false");
    localStorage.setItem("systemName", "");
    localStorage.setItem("Mode", "");
    localStorage.setItem("Lab", "");
    setUserName("");
    setLogged("false");
    navigate("/");
    //console.log("username = " + userName + " logged = " + isLogged);
  };
  return (
    <div className="navbar">
      <img
        className="logo"
        src={Logo}
        alt="logo"
        onClick={() => {
          navigate("/");
        }}
      />
      <nav>
        <ul className="nav_links">
          {isLogged === "true" && mode === "User" ? (
            <li>
              <a href="/MyComplaints">My complaints</a>
            </li>
          ) : null}
          {isLogged === "true" && mode === "Admin" ? (
            <li>
              <a href="/signup">Add admin</a>
            </li>
          ) : null}
          <li>
            <a href="/About">About us</a>
          </li>
        </ul>
      </nav>
      {isLogged === "true" ? (
        <a className="cta" href="/">
          <p>{userName}</p>
          <button id="button" onClick={LogOut}>
            Logout
          </button>
        </a>
      ) : null}
    </div>
  );
};
