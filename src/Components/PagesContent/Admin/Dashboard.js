import { Card, Space, Statistic, Typography } from 'antd'
import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups';

function Dashboard() {
  return (
    <div>
        <Typography.Title level = {5.4}> Dashboard</Typography.Title>
        <Typography.Text style={{fontSize:"20px"}} >Welcome Back,</Typography.Text>
       <div> <Space direction="horizontal">
          <Card>
            <GroupsIcon/>
            <Statistic title="Total User" value={100}/>


          </Card>
        </Space>
      </div>
    </div>
  )
}

export default Dashboard