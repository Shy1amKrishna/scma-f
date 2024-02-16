import React from 'react';
import './Modes.css' 
import { useNavigate } from 'react-router-dom';
export const Modes = () => {

  const navigate = useNavigate();

  const handleDivClick = (path) => {
    navigate(path);
  };

  return (
    <>
      
      <div className='container1'>
        <div className='container2'>
        <h1 className="cool-heading">SCMA</h1>
      <div className='inputs'>
        <div className='input' onClick={() => handleDivClick('/login')}><h2>User</h2></div>
        <div className='input' onClick={() => handleDivClick('/login')}><h2>Admin</h2></div>
        <div className='input' onClick={() => handleDivClick('/login')}><h2>Superviser</h2></div>
      </div>
        </div>
      </div>
    </>
  )
}


