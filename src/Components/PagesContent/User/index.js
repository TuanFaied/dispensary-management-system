import React from 'react'
import Header1 from '../../Header'

import UserSideNavBar from './UserSideNavBar'
import AppUserRoute from '../../AppUserRoutes'
import '../../../App.css'
import { Layout, Space } from 'antd';
const { Header, Sider, Content } = Layout;
const headerStyle = {
  height: 80,
  paddingInline: 0,
 
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  
};
const siderStyle = {
  backgroundColor:"#fff",
};
function index() {
  return (
    <div className="App">
      <Layout>
      <Header style={headerStyle}><Header1/></Header>
      <Layout hasSider>
      <Sider style={siderStyle}><UserSideNavBar/></Sider>
        <Content style={contentStyle}><AppUserRoute/></Content>
      </Layout>  
        
      </Layout>  
    </div>
  )
}

export default index