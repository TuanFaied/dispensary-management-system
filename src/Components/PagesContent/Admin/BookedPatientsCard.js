import React from 'react';
import { Card, Space, Typography } from 'antd';
 // Import your custom CSS for styling
import '../../../App.css';

const BookedPatientsCard = ({ bookedPatientCount }) => {
  return (
    
    <Space direction="horizontal">
      <div className="indicator">
        
      </div>
      <Typography.Title level={4}>Patients Schedule</Typography.Title>
        <Typography.Text style={{fontSize:"20px",fontStyle:"in",color:"red"}}>{bookedPatientCount}</Typography.Text>
      
        
      
    </Space>
    
  );
};

export default BookedPatientsCard;
