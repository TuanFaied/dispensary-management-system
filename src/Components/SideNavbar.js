import React from 'react'
import '../App.css'
import {SidebarData} from './SidebarData'
import { useNavigate } from 'react-router-dom'



function SideNavbar() {
    const navigate = useNavigate();
  return (
    <div className='Sidebar'>

        <h2 style={ {
            textAlign:'center',
            marginTop:"140px"
            } } >Good Morning</h2>
        <p style={ {textAlign:'center', fontSize:"20px"} }>Faied ahamadh</p>
        <ul className='Sidebarlist'>
            {SidebarData.map((val, key) =>{
                return (
                    <li
                        
                        key={key}
                        className='row'
                        id = {window.location.pathname === val.link ? 'active' :''}
                        onClick={() => {
                            window.location.pathname = val.link ;
                            navigate(val.link);
                        }}
                    >
                        <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>

                    </li>


                );
            }
            )}

        </ul>
    </div>
  )
}

export default SideNavbar