import React from 'react';
import {Space, Typography } from 'antd';
 // Import your custom CSS for styling


const CheckOutCard = ({ checkOutCount }) => {
  return (
    
    <Space direction="horizontal">
      <div className="indicator3">
        
      </div>
      <Typography.Title level={4}>Check Out</Typography.Title>
      <Typography.Text style={{fontSize:"20px",fontStyle:"inherit",color:"red"}}>{checkOutCount}</Typography.Text>
      
    </Space>
    
  );
};

export default CheckOutCard;
