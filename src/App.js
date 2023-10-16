import './App.css';
import Header from './Components/Header';
import Sidebar from "./Components/PagesContent/Admin/SideNavbar";

import PageContentAdmin from './Components/PagesContent/index'
import { Space } from 'antd';
import HomePage from './Components/HomePage/index'
import SignUp from './Components/SignUP/index'
import Login from './Components/Login/index'
import User from './Components/PagesContent/User/index'
import Admin from './Components/PagesContent/Admin/index'
import Pages from './Components/AppRoutes/index'
function App() {
  return (
    <div className="App">
      
      {/* <HomePage/> */} 
      {/* <SignUp/> */}
      {/* <Login/> */}
      <Pages/> 
      {/*<User>*/ }
    
    </div>
  );
}

export default App;
