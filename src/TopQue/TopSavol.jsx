import React from 'react'
import "./TopSavol.css"

function TopSavol() {
  return (
    <div>
      <h1 className='top-h1'>Top Savollar</h1>
      <div className='top-grid'>
        <div className='bg_img'>
            <p className='pin'>Master Rezedint kim ?</p>
        </div>
        <div className='bg_img1'>
            <p className='pin'>Rezedint kim ?</p>
        </div>
        <div className='bg_img2'>
            <p className='pin'>Media Rezedint kim ?</p>
        </div>
        <div className='bg_img3'>
            <p className='pin'>O'zbekiston forumi qanday...</p>
        </div>
      </div>
    </div>
  )
}

export default TopSavol
