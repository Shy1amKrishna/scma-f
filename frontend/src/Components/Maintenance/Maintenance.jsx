import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Maintenance.css';
import Computer_icon from '../Assets/computer.png';
import axios from 'axios'; // Import Axios library

export const Maintenance = (props) => {
  const [complaint, setComplaint] = useState("");
  const [systemName, setSystemName] = useState(props.SystemName);
  const navigate = useNavigate();
  const backendAddress = 'http://localhost:5000/complaints';
  //console.log("SystemName:",systemName);

  
  useEffect(() => {
    // Fetch userSystem when props change
    axios.get('http://localhost:5000/getSystem')
      .then(response => {
        setSystemName(response.data);
        //console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [props]); // Add props as a dependency so useEffect runs when props change

  

  function reset() {
    setComplaint("");
    navigate("../Home");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (complaint.length > 10 && complaint.length < 500) {
      try {
        // Sending data to the backend using Axios
        const result = await axios.post(backendAddress, { systemName: systemName, complaint: complaint });
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
      <div className='container1'>
        <div className='container2'>
          <h1 className="cool-heading">Maintenance</h1>
          <div className="underline"></div>
          <div className='box'>
            <form onSubmit={handleSubmit}>
              <div className='Minput'>
                <img src={Computer_icon} alt="" title='Computer icons created by Freepik - Flaticon' about='<a href="https://www.flaticon.com/free-icons/computer" title="computer icons">Computer icons created by Freepik - Flaticon</a>' />
                <h4>{systemName}</h4> {/* Display SystemName */}
              </div>
              <div id='ComplaintBox'>
                <label htmlFor='Complaint'>
                  Complaint:
                </label>
                <textarea autoFocus id='Complaint' type='text' name='Complaint' placeholder='Enter the problem' value={complaint} onChange={(e) => { setComplaint(e.target.value) }}></textarea>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
