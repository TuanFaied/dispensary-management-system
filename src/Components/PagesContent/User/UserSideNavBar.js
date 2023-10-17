import React from 'react'
import { useNavigate } from 'react-router-dom'
import SettingsIcon from '@mui/icons-material/Settings';
import  Home   from '@mui/icons-material/Home';
import  History  from '@mui/icons-material/History';
import { Menu } from 'antd'
function UserSideNavBar() {
    const navigete =useNavigate();
  return (
    <Menu 
        onClick = {(item)=>{
            navigete(item.key);
        }}
        items={[
            {
                icon : <Home/>,
                label:"Home",
                key:'/User/Home'   
            },
            {
                icon : <History/>,
                label:"MedicalHistory",
                key:'/User/MedicalHistory'   
            },
            {
                icon : <SettingsIcon/>,
                label:"Settings",
                key:'/User/Settings'   
            },

        ]}
        >

    </Menu>
  )
}

export default UserSideNavBar