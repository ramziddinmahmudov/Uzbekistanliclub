import React from 'react'
import Home from '../Home/Home'
import Project from "../Projects/ProjectList"
import Profile from "../Profile/Profile"
import Master_Rezident from "../Master_Rezident/Masterrez"
import TopSavol from '../TopQue/TopSavol'
import Hamkorlar from '../Hamkorlar/Hamkorlar'
import Rezzz from '../Rezzz/Rezzz'

function menyu() {
  return (
    <div>
      <Home/>
      <Profile/>
      <Master_Rezident/>
      <Project/>
      <TopSavol/>
      <Hamkorlar/>
      <Rezzz/>
    </div>
  )
}

export default menyu
