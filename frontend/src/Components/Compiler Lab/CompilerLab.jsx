import React, { useState } from 'react';
import './CompilerLab.css';
import Computer_icon from '../Assets/computer.png';

export const CompilerLab = () => {
  const [filter, setFilter] = useState('');

  const systems = [
    "CSE-CSL-DES-01",
    "CSE-CSL-DES-02",
    "CSE-CSL-DES-03",
    "CSE-CSL-DES-04",
    "CSE-CSL-DES-05",
    "CSE-CSL-DES-06",
    "CSE-CSL-DES-07",
    "CSE-CSL-DES-08",
    "CSE-CSL-DES-09",
    "CSE-CSL-DES-10",
    "CSE-CSL-DES-11",
    "CSE-CSL-DES-12",
    "CSE-CSL-DES-13",
    "CSE-CSL-DES-14",
    "CSE-CSL-DES-15",
    "CSE-CSL-DES-16",
    "CSE-CSL-DES-17",
    "CSE-CSL-DES-18",
  ];

  function handleInputChange(event) {
    setFilter(event.target.value.toUpperCase());
  }

  function filterList(item) {
    const txtValue = item.toUpperCase();
    return txtValue.indexOf(filter) > -1;
  }

  return (
    <>
      <div className='container1'>
        <div className='container2'>
          <h1 className="cool-heading">Compiler Lab</h1>
          <div className="underline"></div>
          <div className='box'>
            <div className='Cinput'>
            <img src={Computer_icon} alt="" title='Computer icons created by Freepik - Flaticon' about='<a href="https://www.flaticon.com/free-icons/computer" title="computer icons">Computer icons created by Freepik - Flaticon</a>'/>
            <input
              type='text'
              placeholder='System name?'
              onChange={handleInputChange}
            />
            </div>
            <ul id='Clist'>
              {systems.map((item, index) => (
                <li key={index} style={{ display: filterList(item) ? '' : 'none' }}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
