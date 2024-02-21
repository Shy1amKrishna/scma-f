import React from "react";
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
//import { Navbar } from "./Components/Navbar/Navbar";
import { Modes } from "./Components/Modes/Modes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Modes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/compilerLab" element={<CompilerLab />} />
        <Route path="/home/softwareLab" element={<SoftwareLab />} />
        <Route path="/home/programmingLab" element={<ProgrammingLab />} />
        <Route path="/home/Maintenance" element={<Maintenance />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
