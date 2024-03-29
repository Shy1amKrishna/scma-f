import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
export const Home = () => {
  const navigate = useNavigate();

  const CompilerLabClick = (path) => {
    localStorage.setItem("Lab", "Compiler Lab");
    navigate(path);
  };

  const SoftwareLabClick = (path) => {
    localStorage.setItem("Lab", "Software Lab");
    navigate(path);
  };

  const ProgrammingLabClick = (path) => {
    localStorage.setItem("Lab", "Programming Lab");
    navigate(path);
  };

  //const isLogged = localStorage.getItem("isLogged");

  return (
    <>
      <Navbar />
      <div className="container1">
        <div className="container2">
          <h1 className="cool-heading">LABS</h1>
          <div className="inputs">
            <div
              className="input"
              onClick={() => CompilerLabClick("/Maintenance")}
            >
              <h2>Compiler Lab</h2>
            </div>
            <div
              className="input"
              onClick={() => ProgrammingLabClick("/Maintenance")}
            >
              <h2>Programming Lab</h2>
            </div>
            <div
              className="input"
              onClick={() => SoftwareLabClick("/Maintenance")}
            >
              <h2>Software Lab</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
