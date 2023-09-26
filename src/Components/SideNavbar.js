import React from 'react'
import '../App.css'
import {SidebarData} from './SidebarData'
import { useNavigate } from 'react-router-dom'
import profile from '../Images/1.png'
import { Menu, Space } from 'antd'
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
                key:'/Dashboard'
            },
            {
                icon : <CalendarMonthIcon/>,
                label:"Schedule",
                key:'/Schedule'
            },
            {
                icon : <PointOfSaleIcon/>,
                label:"POS",
                key:'/POS'
            },
            {
                icon : <DetailsIcon/>,
                label:"Patients Details",
                key:'/PatientsDetails'
            },
            {
                icon : <InventoryIcon/>,
                label:"Stocks",
                key:'/Stocks'
            },
            {
                icon : <SettingsIcon/>,
                label:"Settings",
                key:'/Settings'
            }

    ]}>

    </Menu>
  
    
  )
}

export default SideNavbar