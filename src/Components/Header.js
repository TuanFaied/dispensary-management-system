import React from 'react'
import logo from '../Images/logo.png'
import profile from '../Images/1.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './../App.css'
import Dropdown from 'antd/es/dropdown/dropdown';
function  Header() {
  const items=[
    {
      key:'1',
      label:(
        <a target="_blank" href="">
          Settings
        </a>
      ),
    },
    {
      key:'2',
      label:(
        <a target="_blank" href="">
          Log Out
        </a>
      ),
    }

  ]
  return (
    <div className='Header'>
        <img className='logo' width={300} src={logo} alt=''/>
        <div className='userDisplay'>
          <Dropdown
            menu={{
              items,
            }} 
            placement="bottom"
            arrow
          >
            <img style={{
                width:"50px",
                height:"50px",
                borderRadius:"50%",
                objectFit:"cover",
                marginRight:"5px"
            }
            }
            className='profile'
            src={profile} alt='' />
            </Dropdown>
            
            
        </div>
    </div>
  )
}

export default  Header