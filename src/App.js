import { Margin } from '@mui/icons-material';
import './App.css';
import Header from './Components/Header';
import Sidebar from "./Components/SideNavbar";
import profile from './Images/1.png'


function App() {
  return (
    <div className="App">
      <Header/>
      <div>
      <Sidebar/>
      <img style={{

        width:"150px",
        height:"150px",
        borderRadius:"50%",
        objectFit:"cover",


        }
        }
        className='profile1'
        src={profile} alt='' />
      
      </div>
    </div>
  );
}

export default App;
