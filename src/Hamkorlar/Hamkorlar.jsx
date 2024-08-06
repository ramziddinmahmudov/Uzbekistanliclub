import React from 'react'
import "./Hamkorlar.css";
import logo from "/hamkor.png"
import logo1 from "/hamkor4.png"
import logo2 from "/hamkor2.png"
import logo3 from "/hamkor3.png"

function Hamkorlar() {
  return (
    <div className='marginb'>
      <h1 className='hamkorlar-h1'>Hamkorlar</h1>
      <div className='grids'>
        <img src={logo} alt="" className='imgs'/>
        <img src={logo1} alt="" className='imgs'/>
        <img src={logo2} alt="" className='imgs'/>
        <img src={logo3} alt="" className='imgs'/>
      </div>
    </div>
  )
}

export default Hamkorlar
