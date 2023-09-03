import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Dashboard from '../PagesContent/Admin/Dashboard'
import PatientDetail from '../PagesContent/Admin/PatientDetail'
import POS from '../PagesContent/Admin/POS'
import Schedule from '../PagesContent/Admin/Schedule'
import Settings from '../PagesContent/Admin/Settings'
import Stocks from '../PagesContent/Admin/Stocks'

function AppRoutes() {
  return (
    
        <Routes>
            <Route path="/Dashboard" element={<Dashboard/>}/>
            <Route path="/PatientsDetails" element={<PatientDetail/>}/>
            <Route path="/pos" element={<POS/>}/>
            <Route path="/schedule" element={<Schedule/>}/>
            <Route path="/settings" element={<Settings/>}/>
            <Route path="/stocks" element={<Stocks/>}/>
        </Routes>
   
  );
}

export default AppRoutes