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
        <div className='Cinputs'>
        <form action="/action_page.php">
        <input className='Cinput' list="Systems" name="Systems" placeholder='Enter system name:'/>
        <datalist id="Systems">
        <option value="System1"/>
        <option value="System2"/>
        <option value="System3"/>
        <option value="System4"/>
        <option value="System5"/>
        </datalist>
        <input className='Cinputs' type="submit"/>
        </form>
        </div>
        </div>
    </div>
    </>
  )
}
