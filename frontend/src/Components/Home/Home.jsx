import React from 'react';
import './Home.css' 
import { useNavigate } from 'react-router-dom';
export const Home = () => {

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
        <div className='input' onClick={() => handleDivClick('/home/compilerLab')}><h2>Compiler Lab</h2></div>
        <div className='input' onClick={() => handleDivClick('/home/programmingLab')}><h2>Programming Lab</h2></div>
        <div className='input' onClick={() => handleDivClick('/home/softwareLab')}><h2>Software Lab</h2></div>
      </div>
        </div>
      </div>
    </>
  )
}


