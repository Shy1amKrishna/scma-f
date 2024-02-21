import React from "react";
import "./Modes.css";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";

export const Modes = () => {
  const navigate = useNavigate();

  const handleDivClick = (path) => {
    navigate(path);
  };

  return (
    <>
      <Navbar />
      <div className="container1">
        <div className="container2">
          <h1 className="cool-heading">SCMA</h1>
          <div className="inputs">
            <div className="input" onClick={() => handleDivClick("/login")}>
              <h2>USER</h2>
            </div>
            <div className="input" onClick={() => handleDivClick("/login")}>
              <h2>ADMIN</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
