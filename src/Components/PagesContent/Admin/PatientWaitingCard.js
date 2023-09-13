import React from 'react';
import {Space, Typography } from 'antd';
 // Import your custom CSS for styling
import '../../../App.css';

const PatientWaitingCard = ({ waitingPatientCount }) => {
  return (
    
    <Space direction="horizontal">
      <div className="indicator2">
        
      </div>
      <Typography.Title level={4}>Patients Waiting</Typography.Title>
      <Typography.Text style={{fontSize:"20px",fontStyle:"inherit",color:"red"}}>{waitingPatientCount}</Typography.Text>
      
    </Space>
    
  );
};

export default PatientWaitingCard;
