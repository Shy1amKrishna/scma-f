import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MyComplaints.css";
import ComputerIcon from "../Assets/computer.png"; // Renamed variable to follow convention
import { Navbar } from "../Navbar/Navbar";

export const MyComplaints = () => {
  const loggedUser = localStorage.getItem("userName");
  const [filter, setFilter] = useState("");
  //const [filter, setFilter] = useState(loggedUser.toUpperCase());
  const [systems, setSystems] = useState([]);

  // Function to handle input change for filtering
  const handleInputChange = (event) => {
    setFilter(event.target.value.toUpperCase());
  };

  useEffect(() => {
    // Fetch systems from MongoDB using Axios
    const fetchSystems = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/mycomplaints/" + loggedUser
        );
        setSystems(response.data);
        //console.log("Data:\n" + JSON.stringify(response.data));
      } catch (error) {
        console.error("Error fetching data:", error);
        return <h2>Error fetching data. Please try again later.</h2>;
      }
    };
    fetchSystems();
  }, [loggedUser]); // Empty dependency array ensures useEffect runs only once on component mount

  // Function to filter list based on input
  const filterList = (item) => {
    if (!item) return false;
    const txtValue = item.toUpperCase();
    return txtValue.includes(filter);
  };

  if (systems.length === 0) {
    return (
      <>
        <Navbar />
        <div className="container1">
          <div className="container2">
            <h1 className="cool-heading">My Complaints</h1>
            <h2>You haven't made any complaints yet.</h2>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container1">
        <div className="container2">
          <h1 className="cool-heading">my complaints</h1>
          <div className="box">
            <div className="Cinput">
              <img
                src={ComputerIcon}
                alt="Computer Icon"
                title="Computer icons created by Freepik - Flaticon"
              />
              <input
                type="text"
                placeholder="Search here!"
                onChange={handleInputChange}
              />
            </div>
            <ul id="Clist" style={{ listStyleType: "none", padding: 0 }}>
              {systems.map((item, index) => (
                <li
                  key={index}
                  style={{
                    display:
                      filterList(item.UserName) ||
                      filterList(item.Lab) ||
                      filterList(item.SystemName) ||
                      filterList(item.Complaint) ||
                      filterList(item.Status) ||
                      filterList(item.Date)
                        ? ""
                        : "none",
                  }}
                >
                  <div style={{ marginBottom: "10px" }}>
                    <strong>User name:</strong> {item.UserName}
                  </div>
                  <div style={{ marginBottom: "10px" }}>
                    <strong>Lab:</strong> {item.Lab}
                  </div>
                  <div style={{ marginBottom: "10px" }}>
                    <strong>System name:</strong> {item.SystemName}
                  </div>
                  <div style={{ marginBottom: "10px" }}>
                    <strong>Complaint:</strong> {item.Complaint}
                  </div>
                  <div style={{ marginBottom: "10px" }}>
                    <strong>Date:</strong> {item.Date}
                  </div>
                  <div style={{ marginBottom: "10px" }}>
                    <strong>Status:</strong> {item.Status}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
