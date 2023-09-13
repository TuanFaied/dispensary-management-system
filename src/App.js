import './App.css';
import Header from './Components/Header';
import Sidebar from "./Components/SideNavbar";

import PageContent from './Components/PagesContent/index'
import { Space } from 'antd';


function App() {
  return (
    <div className="App">
      <Header/>
      <Space className="SideMenuPageContent">
        <Sidebar/>
        <PageContent/>
      </Space>

    </div>
  );
}

export default App;
