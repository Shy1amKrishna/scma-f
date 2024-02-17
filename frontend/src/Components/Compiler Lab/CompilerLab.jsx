import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CompilerLab.css';
import ComputerIcon from '../Assets/computer.png'; // Renamed variable to follow convention

export const CompilerLab = (props) => {
  const [filter, setFilter] = useState('');
  const [systems, setSystems] = useState([]);
  const navigate = useNavigate();
  const path = "/home/Maintenance";

  // Function to handle input change for filtering
  const handleInputChange = (event) => {
    setFilter(event.target.value.toUpperCase());
  }

  // Function to handle click event on system name
  const handleClick = async (event) => {
    const systemName = event.target.textContent;
    navigate(path);
    props.handleClick(systemName);
    try{
      await axios.post('http://localhost:5000/systemName', {
        systemName: systemName
      });
    } catch (error) {
      // Handle systemName send error
      alert("Sorry something wrong happened.\n" + error)
      console.error('send systemName failed:', error.message);
    }
  }
  
  useEffect(() => {
    // Fetch systems from MongoDB using Axios
    const fetchSystems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/systems');
        setSystems(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchSystems();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  // Function to filter list based on input
  const filterList = (item) => {
    const txtValue = item.toUpperCase();
    return txtValue.includes(filter);
  }

  return (
    <div className='container1'>
      <div className='container2'>
        <h1 className="cool-heading">Compiler Lab</h1>
        <div className='box'>
          <div className='Cinput'>
            <img src={ComputerIcon} alt="Computer Icon" title='Computer icons created by Freepik - Flaticon' />
            <input
              type='text'
              placeholder='System number?'
              onChange={handleInputChange}
            />
          </div>
          <ul id='Clist'>
            {systems.map((item, index) => (
              <li onClick={handleClick} key={index} style={{ display: filterList(item.name) ? '' : 'none' }}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
