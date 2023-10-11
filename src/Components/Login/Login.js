import React, { useState } from 'react'
import './LoginHeader.css'
import AdminLogin from './AdminLogin'
import UserLogin from './UserLogin'
import { Button } from '@mui/material'

function Login() {
    const [showAdminLogin,setShowAdminLogin] = useState(false)
    const handleAdminButtonClick = () => {
        setShowAdminLogin(true);
      };
    
      const handleUserButtonClick = () => {
        setShowAdminLogin(false);
      };
  return (
    <div className="container">
        <div className="app-wrapper">
            <div>
                <h2 className="title">Wellcome Back!!!</h2>
                <Button variant={showAdminLogin ?"outlined" : "contained"} color="primary"
                    onClick={handleUserButtonClick} >User</Button>
                <Button variant={showAdminLogin ?"contained" : "outlined" } color="success"
                    onClick={handleAdminButtonClick}>Admin</Button>

            </div>
            { showAdminLogin ? <AdminLogin/> : <UserLogin/>}

        </div>
    </div>
  )
}

export default Login