import React from 'react'
import Header from '../../Header'
import { Space } from 'antd'
import UserSideNavBar from './UserSideNavBar'
import AppUserRoute from '../../AppUserRoutes'
import '../../../App.css'
function index() {
  return (
    <div className="App">
        <Header/>
        <Space className="SideMenuPageContent">
            <UserSideNavBar/>
            <AppUserRoute/>

        </Space>
    </div>
  )
}

export default index