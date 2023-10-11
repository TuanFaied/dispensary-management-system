import React from 'react'
import '../../../App.css'
import Header from '../../Header'
import SideNavbar from './SideNavbar'
import AppAdminRoute from '../../AppAdminRoutes'
import { Space } from 'antd'

function index() {
  return (
    <div className="App">
        <Header/>
        <Space className="SideMenuPageContent">
            <SideNavbar/>
            <AppAdminRoute/>

        </Space>

    </div>
  )
}

export default index