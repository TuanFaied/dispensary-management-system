import React from 'react'
import Home_Header from './Home_Header'
import { Button } from '@mui/material'
import { Avatar, Card, Space } from 'antd'

import Hospital from '../../Images/hospital.png'
import Queue from '../../Images/voting.png'
import Doctor from '../../Images/doctor.png'
import './HomeHeader.css'

function index() {
  
  return (
    <><Home_Header />
    
    <Space className="front" direction="vertical">
      <h1 className='h1'>Your in<span className='blue'> Right</span>  Place</h1>
      <h1 className='h2'>at the <span className='blue'>Right</span> time</h1>
      <Space className="buttonSL">
      <Button variant="contained" href='/SignUp'>Sign Up</Button>
    <Button variant="contained" href='/LogIn'>Log In</Button>
    </Space>
    <h2 className='h2' style={{margin:"60px 10px 10px 10px"}}>Our Key Features</h2>
    <Space>
      <Card>
        <Card.Meta style={{ 
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          marginTop:-40,
          
        }}
          avatar={<Avatar src={Hospital} style={{background:"#1d92bc"}}></Avatar>}
          title={"Newest Technologies"}
          >
          </Card.Meta>
          <p>We offering technologies to our patients</p>
      </Card>
      <Card>
        <Card.Meta style={{ 
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          marginTop:-40,
          
        }}
          avatar={<Avatar src={Doctor} style={{background:"#1d92bc"}}></Avatar>}
          title={"Experianced Doctor"}
          >
          </Card.Meta>
          <p>Board-certified doctors with specialization in various medical fields, ensuring comprehensive patient care.Expertise in both conventional and alternative therapies, providing patients with a range of treatment options.</p>
      </Card>
      <Card>
        <Card.Meta style={{ 
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          marginTop:-40,
          
        }}
          avatar={<Avatar src={Queue} style={{background:"#1d92bc"}}></Avatar>}
          title={"Don't wait logest Queue"}
          >
          </Card.Meta>
          <p>Implementing a digital queue system to reduce waiting times and enhance patient flow.Real-time updates on queue status through mobile apps or text notifications to minimize patient wait stress.</p>
      </Card>
    </Space>
    </Space>
    </>
  )
}

export default index