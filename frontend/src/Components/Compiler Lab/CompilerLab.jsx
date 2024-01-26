import React, { useState } from 'react';
import './CompilerLab.css';

export const CompilerLab = () => {
  const [filter, setFilter] = useState('');

  const systems = [
    "CSL-DES-01",
    "CSL-DES-02",
    "CSL-DES-03",
    "CSL-DES-04",
    "CSL-DES-05",
    "CSL-DES-06",
    "CSL-DES-07",
    "CSL-DES-08",
    "CSL-DES-09",
    "CSL-DES-10",
    "CSL-DES-11",
    "CSL-DES-12",
    "CSL-DES-13",
    "CSL-DES-14",
    "CSL-DES-15",
    "CSL-DES-16",
    "CSL-DES-17",
    "CSL-DES-18",
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
            <input
              type='text'
              id='Cinput'
              placeholder='System name?'
              onChange={handleInputChange}
            />
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
