import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

export const Navbar = (props) => {
  const [isLoggedIn, setLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === true ? true : props.isLogged //for getting logstate from localstorage
  );
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || props.userName //for getting username from localstorage
  );

  useEffect(() => {
    setLoggedIn(
      localStorage.getItem("isLoggedIn") === "true" ? true : props.isLogged
    );
    setUserName(localStorage.getItem("userName") || props.userName);
  }, [props]);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
    //if (userName !== "") {
    localStorage.setItem("userName", userName);
    //}
    console.log("logged = " + isLoggedIn + " username = " + userName);
  }, [isLoggedIn, userName]);

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const LogOut = () => {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.setItem("userName", "");
    setLoggedIn(false);
    props.setLogged(false);
    setUserName("");
    handleNavigation("/");
    console.log("logged = " + isLoggedIn + " username = " + userName);
  };

  return (
    <div className="topnav">
      <a className="active" href="/About">
        About us
      </a>
      {isLoggedIn ? (
        <div className="userData" onClick={LogOut}>
          {userName}
        </div>
      ) : null}
    </div>
  );
};
