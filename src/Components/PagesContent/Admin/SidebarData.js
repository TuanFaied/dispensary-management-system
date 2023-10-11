import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import DetailsIcon from '@mui/icons-material/SettingsAccessibility';
import InventoryIcon from '@mui/icons-material/Inventory';
import SettingsIcon from '@mui/icons-material/Settings';

export const SidebarData = [
    {
        title: "Dashboard",
        icon : <DashboardIcon/>,
        link : "./Dashboard"
    },
    {
        title: "Schedule",
        icon : <CalendarMonthIcon/>,
        link : "./Schedule"
    },
    {
        title: "POS",
        icon : <PointOfSaleIcon/>,
        link : "./POS"
    },
    {
        title: "Patients Details",
        icon : <DetailsIcon/>,
        link : "./PatientsDetails"
    },
    {
        title: "Stocks",
        icon : <InventoryIcon/>,
        link : "./Stocks"
    },
    {
        title: "Settings",
        icon : <SettingsIcon/>,
        link : "./Settings"
    }
]