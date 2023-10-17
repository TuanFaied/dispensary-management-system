import React from 'react'
import Header1 from '../../Header'

import UserSideNavBar from './UserSideNavBar'
import AppUserRoute from '../../AppUserRoutes'
import '../../../App.css'
import { Layout, Space } from 'antd';
import { useLocation } from 'react-router-dom'
const { Header, Sider, Content } = Layout;
const headerStyle = {
  height: 80,
  paddingInline: 0,
 
};

const siderStyle = {
  backgroundColor:"#fff",
};
function index() {
const loc = new useLocation();
const userarray = loc.state.users;
  return (
    <div className="App">
      <Layout>
      <Header style={headerStyle}><Header1/></Header>
      <Layout hasSider>
      <Sider style={siderStyle}><UserSideNavBar/></Sider>
        <Content ><AppUserRoute/></Content>
      </Layout>  
        
      </Layout>  
    </div>
  )
}

export default index