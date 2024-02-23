import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [userName, setUserName] = useState(localStorage.getItem("userName")); //fetching username from local storage
  const [isLogged, setLogged] = useState(localStorage.getItem("isLogged")); //fetching logged state fron local storage
  const navigate = useNavigate();

  useEffect(() => {
    setLogged(localStorage.getItem("isLogged"));
    setUserName(localStorage.getItem("userName"));
    //console.log("username = " + userName + " logged = " + isLogged);
  }, [userName, isLogged]);

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
    <div className="topnav">
      <a className="active" href="/About">
        About us
      </a>
      {isLogged === "true" ? (
        <div className="userData" onClick={LogOut}>
          {userName}
        </div>
      ) : null}
    </div>
  );
};
