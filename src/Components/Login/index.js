import React, { useState } from 'react'
import LoginHeader from './LoginHeader'
import Login from './Login'
import Img from '../../Images/19801.jpg'
import { Space } from 'antd'
import './LoginHeader.css'
import Admin from '../PagesContent/Admin/index'
function Index() {
  const[post,setPost]=useState(false);
 
  return (
    <>
      {post ? (
        <Admin />
      ) : (
        <>
          <LoginHeader />
          <Space className="dire">
            <img className='Img' width={700} src={Img} alt='' />
            <Login />
          </Space>
        </>
      )}
    </>
    
    
    
  )
}

export default Index