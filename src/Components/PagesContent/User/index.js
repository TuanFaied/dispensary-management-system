import React from 'react'
import Header1 from '../../Header'

import UserSideNavBar from './UserSideNavBar'
import AppUserRoute from '../../AppUserRoutes'
import '../../../App.css'
import { Layout} from 'antd';

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
      <Header style={headerStyle}><Header1 /></Header>
      <Layout hasSider>
      <Sider style={siderStyle} breakpoint="lg"
        theme="light"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}

      ><UserSideNavBar/></Sider>
        <Content ><AppUserRoute  /></Content>
      </Layout>  
        
      </Layout>  
    </div>
  )
}

export default index