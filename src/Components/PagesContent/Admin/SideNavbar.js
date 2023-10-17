import React from 'react'
import '../../../App.css'
import {SidebarData} from './SidebarData'
import { useNavigate } from 'react-router-dom'

import { Menu } from 'antd'
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import DetailsIcon from '@mui/icons-material/SettingsAccessibility';
import InventoryIcon from '@mui/icons-material/Inventory';
import SettingsIcon from '@mui/icons-material/Settings';


function SideNavbar() {
    const navigate = useNavigate();
  return (

    <Menu 
    
    onClick={(item) =>{
        navigate(item.key);

        }}
        items={[
            {
                icon : <DashboardIcon/>,
                label:"Dashboard",
                key:'/Admin/Dashboard'
            },
            {
                icon : <CalendarMonthIcon/>,
                label:"Schedule",
                key:'/Admin/Schedule'
            },
            {
                icon : <PointOfSaleIcon/>,
                label:"POS",
                key:'/Admin/POS'
            },
            {
                icon : <DetailsIcon/>,
                label:"Patients Details",
                key:'/Admin/PatientsDetails'
            },
            {
                icon : <InventoryIcon/>,
                label:"Stocks",
                key:'/Admin/Stocks'
            },
            {
                icon : <SettingsIcon/>,
                label:"Settings",
                key:'/Admin/Settings'
            }

    ]}>

    </Menu>
  
    
  )
}

export default SideNavbar