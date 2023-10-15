import { Button } from '@mui/material';
import { Input, Space } from 'antd';
import React from 'react';
import './Settings.css'

function Settings() {

  return (
    <div className="centered-form " >
      <form>
        <Space direction="vertical">
        <Space direction="vertical">
        <label>Name</label>
        <Input/>
        </Space >
        <Space direction="vertical">
        <label>Email</label>
        <Input/>
        </Space>
        <Space direction="vertical">
        <label>Current Password</label>
        <Input.Password/>
        </Space>
        <div>
        <Space direction="horizontal">
          <Space direction="vertical">
            <label>New Password </label>
            <Input.Password/>
          </Space>
          <Space direction="vertical">
            <label>New Password </label>
            <Input.Password/>
          </Space>
        </Space>
        </div>
        <br/>
        <Space style={{textAlign:"center" }}>
        <Button variant="contained">Save Change</Button>
        </Space>
        </Space>
      </form>

      
      
    </div>
  )
}

export default Settings