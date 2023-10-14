import { Calendar,theme, Card, Progress, Space, Statistic, Typography } from 'antd'
import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups';


import DispensaryStatusDropdown from './DispensaryStatusDropdown';

function Dashboard() {
  const stock =50;
  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  
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
            <Statistic  title="Total User"  value={100}/>
          </Space>
          </Card>
          <Card size="small"  >
          <Space direction="vertical" className="progress-space" >
            <Typography.Title level = {2}>Medicine Stocks</Typography.Title>
          <Progress percent={stock} status={stock <=10 ? 'exception':"active"} />
          <Progress percent={stock} status={stock <=10 ? 'exception':"active"} />
          <Progress percent={stock} status={stock <=10 ? 'exception':"active"} />
          <Progress percent={stock} status={stock <=10 ? 'exception':"active"} />
          <Progress percent={stock} status={stock <=10 ? 'exception':"active"} />
          </Space>

           </Card>
        
           <Card>
            <Typography.Title level = {2}>Near Expiry Medicines</Typography.Title>

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