import { Calendar,theme, Card, Progress, Space, Statistic, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import { 
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper } from '@mui/material'

import DispensaryStatusDropdown from './DispensaryStatusDropdown';
import DashboardServices from '../../../../Services/DashboardServices';

function Dashboard() {
  const stock=[10,12,13,14,50,16];
  const [deatils,setDetails]=useState([])
  const[totalUser,setTotalUser]=useState();
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
    <div>
      
        
        <Typography.Text style={{fontSize:"20px"}} >Welcome Back,</Typography.Text>
        <div>
          <DispensaryStatusDropdown />
        </div>
       <div>
          <Space direction="vertical">
          <Card size="small" >
          <Space direction="horizontal">
            <GroupsIcon 
              style={{
                color:"#11a2d7",
                fontSize: 45,
                padding: 5,
                
              }}
            
            />
            <Statistic  title="Total User"  value={totalUser}/>
          </Space>
          </Card>
          <Card size="small"  >
          <Space direction="vertical" className="progress-space" >
            <Typography.Title level = {2}>Medicine Stocks</Typography.Title>
          
          <Progress percent={stock[0]} status={stock[0] <=10 ? 'exception':"active"} />
          <Progress percent={stock[1]} status={stock[1] <=10 ? 'exception':"active"} />
          <Progress percent={stock[2]} status={stock[2] <=10 ? 'exception':"active"} />
          <Progress percent={stock[3]} status={stock[3] <=10 ? 'exception':"active"} />
          <Progress percent={stock[4]} status={stock[4] <=10 ? 'exception':"active"} />
          </Space>

           </Card>
        
           <Card>
            <Typography.Title level = {2}>Near Expiry Medicines</Typography.Title>
            <TableContainer>
            <TableBody>
              {deatils.map((row)=>(
                <TableRow key={row.m_ID}>
                  <TableCell>{row.m_name}</TableCell>
                  <TableCell>{row.expire_date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            </TableContainer>
            

          </Card>
         </Space>
        </div>
        <div className='calendar' style={wrapperStyle}>
          <Calendar fullscreen={false}  />
        </div>
      
    </div>
  )
}

  

export default Dashboard;