import React from "react";
import "./Modes.css";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar2/Navbar";

export const Modes = () => {
  const navigate = useNavigate();

  const handleUserClick = (path) => {
    localStorage.setItem("Mode", "User");
    navigate(path);
  };

  const handleAdminClick = (path) => {
    localStorage.setItem("Mode", "Admin");
    navigate(path);
  };

  return (
    <>
      <Navbar />
      <div className="Mcontainer1">
        <div className="Mcontainer2">
          <h1 className="cool-heading">SCMA</h1>
          <div className="inputs">
            <div className="input" onClick={() => handleUserClick("/login")}>
              <h2>USER</h2>
            </div>
            <div className="input" onClick={() => handleAdminClick("/login")}>
              <h2>ADMIN</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
