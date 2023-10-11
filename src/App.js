import './App.css';
import Header from './Components/Header';
import Sidebar from "./Components/PagesContent/Admin/SideNavbar";

import PageContent from './Components/PagesContent/index'
import { Space } from 'antd';
import HomePage from './Components/HomePage/index'
import SignUp from './Components/SignUP/index'
import Login from './Components/Login/index';
function App() {
  return (
    <div className="App">
        <Header/>
      <Space className="SideMenuPageContent">
        <Sidebar/>
        <PageContent/>
      </Space>  
      {/* <HomePage/> */}
      {/* <SignUp/> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;
