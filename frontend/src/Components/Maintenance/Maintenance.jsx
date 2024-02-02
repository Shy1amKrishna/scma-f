import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Maintenance.css';
import Computer_icon from '../Assets/computer.png';



export const Maintenance = (props) => {
  let [complaint,setComplaint] = useState("");
  const navigate = useNavigate();

function reset() {
  let textarea = document.getElementById("Complaint");
  textarea.value = "";
  alert("Compalint Submitted")
  navigate("../Home");
}

  

  
function handleSubmit() {
  if (complaint.length > 10 && complaint.length < 500) {
    try{
      console.log(props.SystemName);//sending to backend here
      console.log(complaint); //sending to backend here
      reset("Complaint")
    }catch(e){
      alert("Sorry something wrong happened.",e);
    }
    
  }else{
    alert("Keep complaint length between 10 and 500.")
  }
}

  return (
    <>
      <div className='container1'>
        <div className='container2'>
          <h1 className="cool-heading">Maintenance</h1>
          <div className="underline"></div>
          <div className='box'>
            <div className='Minput'>
            <img src={Computer_icon} alt="" title='Computer icons created by Freepik - Flaticon' about='<a href="https://www.flaticon.com/free-icons/computer" title="computer icons">Computer icons created by Freepik - Flaticon</a>'/>
            <h4>{props.SystemName}</h4>
            </div>
            <div id='ComplaintBox'>
               <label htmlFor='Complaint'>
                Complaint:
               </label>
               <textarea autoFocus id='Complaint' type='text' name='Complaint' placeholder='Enter the problem' onChange={(e)=>{setComplaint(e.target.value)}}></textarea>
               <button type="submit" onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
