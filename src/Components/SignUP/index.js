import React from 'react'
import SignUpHeader from './SignUpHeader'
import SignUp from './SignUp'
import { Space } from 'antd'
import Img from '../../Images/11.jpg'
import './SignUpHeader.css'

function index() {
  return (
    <><SignUpHeader />
    <Space className="dire">
    <SignUp />
    <img className='Img' width={700} src={Img} alt=''/>
    </Space>
    
    </>

  )
}

export default index