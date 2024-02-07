import React, { useState } from "react";
import "./App.css";
import { Home } from "./Components/Home/Home";
import { Login } from "./Components/Login/Login";
import { NotFoundPage } from "./Components/NotFoundPage/NotFoundPage";
import { CompilerLab } from "./Components/Compiler Lab/CompilerLab";
import { SoftwareLab } from "./Components/Software Lab/SoftwareLab";
import { ProgrammingLab } from "./Components/Programming Lab/ProgrammingLab";
import { Routes, Route } from "react-router-dom";
import { Maintenance } from "./Components/Maintenance/Maintenance";
import { About } from "./Components/About/About";
import { Signup } from "./Components/Signup/Signup";

function App() {
  let [Name, setName] = useState("");
  const getSystem = (data) => {
    setName((Name = data));
    //console.log("App.js:", Name);
  };
  return (
    <div className="App">
      <div className="topnav">
        <a className="active" href="/home/About">
          About us
        </a>
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/home/compilerLab"
          element={<CompilerLab handleClick={getSystem} />}
        />
        <Route
          path="/home/softwareLab"
          element={<SoftwareLab handleClick={getSystem} />}
        />
        <Route
          path="/home/programmingLab"
          element={<ProgrammingLab handleClick={getSystem} />}
        />
        <Route
          path="/home/Maintenance"
          element={<Maintenance SystemName={Name} />}
        />
        <Route path="/home/About" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
