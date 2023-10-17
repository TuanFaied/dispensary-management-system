import React, { useState } from 'react'
import LoginHeader from './LoginHeader'
import Login from './Login'
import Img from '../../Images/19801.jpg'
import { Space } from 'antd'
import './LoginHeader.css'

function Index() {
  
 
  return (
    <>
      
        
          <LoginHeader />
          <Space className="dire">
            <img className='Img' width={700} src={Img} alt='' />
            <Login />
          </Space>
        
     
    </>
    
    
    
  )
}

export default Index