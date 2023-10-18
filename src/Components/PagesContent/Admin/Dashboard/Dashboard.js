import { Calendar,theme, Card, Progress, Space, Statistic, Typography } from 'antd'
import React, { useEffect, useState } from 'react'

import GroupsIcon from '@mui/icons-material/Groups';
import { 
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
   } from '@mui/material'
import './Dashboard.css'
import DashboardServices from '../../../../Services/DashboardServices';



function Dashboard() {
  
  const [deatils,setDetails]=useState([])
  const[totalUser,setTotalUser]=useState();
  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  useEffect(()=>{
    DashboardServices.getTotalUser().then((res)=>{
      setTotalUser(res.data)
    })
    DashboardServices.getAllMedicine().then((res)=>{
      setDetails(res.data)
    })
    
    

  })
  
  return (
  
      
        <>
        
        <Space >
        <Typography.Text style={{fontSize:"20px"}} >Welcome Back,</Typography.Text>
        </Space>
       <div className="space-align-container">
       <div className="space-align-block">
       <Space align="start">
       
       <Card size="default">
          <Space direction="horizontal">
          <GroupsIcon 
            style={{
              color: "#11a2d7",
              fontSize: 45,
              padding: 5,
            }}
          />
              <Statistic title="Total User" value={totalUser} />
            </Space>
        </Card>
         </Space>
    </div>
          <br></br>
          <div className="space-align-block1">
            <Space direction="horizontal" >
            <Card size="small"  >
              <Space direction="vertical" className="progress-space" >
                <Typography.Title level = {2}>Medicine Stocks</Typography.Title>
              {deatils.map((r)=>(
                <Progress percent={r.quantity/2} status={r.quantity <=10 ? 'exception':"active"} />
              ))}
              </Space>
            </Card>
                    
            <Card>
              <Typography.Title level = {2}>Near Expiry Medicines</Typography.Title>
              <TableContainer>
              <TableBody>
                {deatils.slice(0,2).map((row)=>(
                  <TableRow key={row.m_ID}>
                    <TableCell>{row.m_name}</TableCell>
                    <TableCell>{row.expire_date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              </TableContainer>
              

            </Card>
            
            <div style={wrapperStyle}>
              <Calendar fullscreen={false} onPanelChange={onPanelChange} />
            </div>
          
          </Space>
          </div>
        </div>
        </>
       
  )
}

  

export default Dashboard;