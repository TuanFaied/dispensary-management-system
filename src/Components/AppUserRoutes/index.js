import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../PagesContent/User/Home/Home'
import MedicalHistory from '../PagesContent/User/MedicalHistory/MedicalHistory'
import Settings from '../PagesContent/User/Settings/Settings'

function index() {
  return (
    <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/MedicalHistory" element={<MedicalHistory/>}/>
        <Route path ="/Settings" element={<Settings/>}/>
    </Routes>
  )
}

export default index