import React from "react";
import "./App.css";
import { Home } from "./Components/Home/Home";
import { LoginSignup } from "./Components/LoginSignup/LoginSignup";
import { NotFoundPage } from "./Components/NotFoundPage/NotFoundPage";
import { CompilerLab } from "./Components/Compiler Lab/CompilerLab";
import { SoftwareLab } from "./Components/Software Lab/SoftwareLab";
import { ProgrammingLab } from "./Components/Programming Lab/ProgrammingLab";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/compilerLab" element={<CompilerLab />} />
        <Route path="/home/softwareLab" element={<SoftwareLab />} />
        <Route path="/home/programmingLab" element={<ProgrammingLab />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
