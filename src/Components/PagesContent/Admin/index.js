import React from 'react'
import '../../../App.css'
import Header1 from '../../Header'
import SideNavbar from './SideNavbar'
import AppAdminRoute from '../../AppAdminRoutes'
import { Layout, Space } from 'antd';
const { Header, Sider, Content } = Layout;
const headerStyle = {
  height: 80,
  paddingInline: 0,
 
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
        <Sider style={siderStyle}><SideNavbar/></Sider>
        <Content ><AppAdminRoute/></Content>
      </Layout>
      </Layout>
        

    </div>
  )
}

export default index