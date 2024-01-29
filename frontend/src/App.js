import React, { useState } from "react";
import "./App.css";
import { Home } from "./Components/Home/Home";
import { LoginSignup } from "./Components/LoginSignup/LoginSignup";
import { NotFoundPage } from "./Components/NotFoundPage/NotFoundPage";
import { CompilerLab } from "./Components/Compiler Lab/CompilerLab";
import { SoftwareLab } from "./Components/Software Lab/SoftwareLab";
import { ProgrammingLab } from "./Components/Programming Lab/ProgrammingLab";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Maintenance } from "./Components/Maintenance/Maintenance";

function App() {
  let [Pdata, setData] = useState("");
  const getData = (data) => {
    setData((Pdata = data));
    console.log("App.js:", Pdata);
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/home/compilerLab"
          element={<CompilerLab handleClick={getData} />}
        />
        <Route path="/home/softwareLab" element={<SoftwareLab />} />
        <Route path="/home/programmingLab" element={<ProgrammingLab />} />
        <Route
          path="/home/Maintenance"
          element={<Maintenance Mdata={Pdata} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
