import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Dashboard from '../PagesContent/Admin/Dashboard/Dashboard'
import PatientDetail from '../PagesContent/Admin/PatientsDetails/PatientDetail'
import POS from '../PagesContent/Admin/POS/POS'
import Schedule from '../PagesContent/Admin/Schedule/Schedule'
import Settings from '../PagesContent/Admin/Settings/Settings'
import Stocks from '../PagesContent/Admin/Stocks/Stocks'

function AppRoutes() {
  return (
    
        <Routes>
            <Route path="/Admin/Dashboard" element={<Dashboard/>}/>
            <Route path="/Admin/PatientsDetails" element={<PatientDetail/>}/>
            <Route path="/Admin/pos" element={<POS/>}/>
            <Route path="/Admin/schedule" element={<Schedule/>}/>
            <Route path="/Admin/settings" element={<Settings/>}/>
            <Route path="/Admin/stocks" element={<Stocks/>}/>
        </Routes>
   
  );
}

export default AppRoutes