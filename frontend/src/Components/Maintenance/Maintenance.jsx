import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Maintenance.css";
import Computer_icon from "../Assets/computer.png";
import axios from "axios"; // Import Axios library
import { Navbar } from "../Navbar/Navbar";

export const Maintenance = () => {
  const [complaint, setComplaint] = useState("");
  const [systemName, setSystemName] = useState("");
  const navigate = useNavigate();
  const backendAddress = "http://localhost:5000/complaints";
  //console.log("SystemName:",systemName);

  function reset() {
    setComplaint("");
    navigate("../Home");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (complaint.length > 10 && complaint.length < 500) {
      try {
        // Sending data to the backend using Axios
        const result = await axios.post(backendAddress, {
          systemName: systemName,
          complaint: complaint,
        });
        alert(result.data);
        reset();
      } catch (error) {
        alert("Sorry something wrong happened." + error);
      }
    } else {
      alert("Keep complaint length between 10 and 500.");
    }
  }

  return (
    <>
      <Navbar />
      <div className="container1">
        <div className="container2">
          <h1 className="cool-heading">Maintenance</h1>
          <div className="underline"></div>
          <div className="box">
            <form onSubmit={handleSubmit}>
              <div className="Cinput">
                <img
                  src={Computer_icon}
                  alt="Computer Icon"
                  title="Computer icons created by Freepik - Flaticon"
                />
                <input
                  type="text"
                  placeholder="System number?"
                  onChange={(e) => {
                    setSystemName(e.target.value);
                  }}
                />
              </div>
              <div id="ComplaintBox">
                <label htmlFor="Complaint">Complaint:</label>
                <textarea
                  autoFocus
                  id="Complaint"
                  type="text"
                  name="Complaint"
                  placeholder="Enter the problem"
                  value={complaint}
                  onChange={(e) => {
                    setComplaint(e.target.value);
                  }}
                ></textarea>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
