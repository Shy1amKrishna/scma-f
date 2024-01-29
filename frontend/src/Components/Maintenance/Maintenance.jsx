import React, { useState } from 'react';
import './Maintenance.css';
import Computer_icon from '../Assets/computer.png';
export const Maintenance = (props) => {
  
  let [systemName, SetSystemName] = useState('')

  

  const systems = [
    "Problem 01",
    "Problem 02",
    "Problem 03",
    "Problem 04",
    "Problem 05",
    "Problem 06",
    "Problem 07",
    "Problem 08",
    "Problem 09",
    "Problem 10",
    "Problem 11",
    "Problem 12",
    "Problem 13",
    "Problem 14",
    "Problem 15",
    "Problem 16",
    "Problem 17",
    "Other",
  ];

  

  function handleClick(event) {
    SetSystemName(systemName = event.target.textContent);
    console.log(systemName);
  }

  return (
    <>
      <div className='container1'>
        <div className='container2'>
          <h1 className="cool-heading">Maintenance</h1>
          <div className="underline"></div>
          <div className='box'>
            <div className='Cinput'>
            <img src={Computer_icon} alt="" title='Computer icons created by Freepik - Flaticon' about='<a href="https://www.flaticon.com/free-icons/computer" title="computer icons">Computer icons created by Freepik - Flaticon</a>'/>
            <h4>{props.Mdata}</h4>
            </div>
            <ul id='Clist'>
              {systems.map((item, index) => (
                <li onClick={handleClick} key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
