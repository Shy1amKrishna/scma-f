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
import { Navbar } from "./Components/Navbar/Navbar";
import { Modes } from "./Components/Modes/Modes";

function App() {
  let [Name, setName] = useState(""); //system name
  let [userName, setUserName] = useState(""); //username
  let [logged, isLogged] = useState(""); //login confirmation

  //for getting system name from different labs
  const getSystem = (data) => {
    setName((Name = data));
  };

  // for getting confirmation from login
  const setLogged = (data) => {
    isLogged((logged = data));
  };

  const setUser = (data) => {
    setUserName((userName = data));
  };

  return (
    <div className="App">
      <Navbar isLogged={logged} userName={userName} />
      <Routes>
        <Route path="/" element={<Modes />} />
        <Route
          path="/login"
          element={<Login setLogged={setLogged} setUser={setUser} />}
        />
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
        <Route path="/About" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
