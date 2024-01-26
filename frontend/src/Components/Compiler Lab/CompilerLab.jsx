import React from 'react'
import './CompilerLab.css'
export const CompilerLab = () => {
  return (
    <>
    <div className='container1'>
        <div className='container2'>
        <h1 className="cool-heading">Compiler Lab</h1>
        <div className="underline"></div>
        <h2>The datalist Element</h2>
        <div className='inputs'>
        <form action="/action_page.php">
        <input className='input' list="browsers" name="browser" placeholder='Enter system name:'/>
        <datalist id="browsers">
        <option value="Edge"/>
        <option value="Firefox"/>
        <option value="Chrome"/>
        <option value="Opera"/>
        <option value="Safari"/>
        </datalist>
        <input type="submit"/>
        </form>
        </div>
        </div>
    </div>
    </>
  )
}
