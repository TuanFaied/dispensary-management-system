import React from 'react'
import logo from '../Images/logo.png'
import profile from '../Images/1.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function  Header() {
  return (
    <div className='Header'>
        <img className='logo' width={300} src={logo} alt=''/>
        <div className='userDisplay'>
            <img style={{
                width:"50px",
                height:"50px",
                borderRadius:"50%",
                objectFit:"cover"
            }
            }
            className='profile'
            src={profile} alt='' />
            <div className='userDetails' >
                <h3>Faied Ahamadh</h3>
                <p>tuanfaied8@gmail.com</p>
            </div>
            <KeyboardArrowDownIcon/>
        </div>
    </div>
  )
}

export default  Header