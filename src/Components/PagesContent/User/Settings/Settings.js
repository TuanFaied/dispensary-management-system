import { Button } from '@mui/material';
import { Input, Space } from 'antd';
import React, { useState,useEffect } from 'react';
import './Settings.css';
import SettingsServices from '../../../../Services/SettingsServices';

function Settings() {
  const [management, setManagement] = useState({
    "mg_ID":"LF001",
    mg_name: "",
    mg_email: "",
    mg_password: "",
    
  });
const [password,setPassword]=useState({
  
  confirmPassword: ""
});
  const handleChange = (e,date)=>{
    const value = e.target ? e.target.value : date;
    setManagement({ ...management, [e.target ? e.target.name : 'expire_date']: value });
    setPassword({...password,[e.target ? e.target.name : 'expire_date']: value })
  } 
 
  

  const isPasswordChange = management.mg_password !== "" || password.confirmPassword !== "";
  const isSaveEnabled = management.mg_name !== "" && management.mg_email !=="" &&  (management.mg_password !== "" && management.mg_password === password.confirmPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    
      
      SettingsServices.updateManagement(management)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    
  }

  return (
    <div className="centered-form">
      <form onSubmit={handleSubmit}>
        <Space direction="vertical">
          <Space direction="vertical">
            <label>Name</label>
            <Input
              name="mg_name"
              required
              placeholder="Enter User Name"
              onChange={handleChange}
              
            />
          </Space>
          <Space direction="vertical">
            <label>Email</label>
            <Input
              name="mg_email"
              required
              placeholder="...@gmail.com"
              onChange={handleChange}
             
            />
          </Space>
          <Space direction="vertical">
            <label>New Password</label>
            <Input.Password
              name="mg_password"
              onChange={handleChange}
              
            />
          </Space>
          {isPasswordChange && (
            <div>
              <Space direction="horizontal">
               
                <Space direction="vertical">
                  <label>Confirm Password</label>
                  <Input.Password
                    name="confirmPassword"
                    onChange={handleChange}
                   
                  />
                </Space>
              </Space>
            </div>
          )}
          <br />
          <Space style={{ textAlign: "center" }}>
            <Button type="submit" variant="contained" disabled={!isSaveEnabled}>
              Save Change
            </Button>
          </Space>
        </Space>
      </form>
    </div>
  )
}

export default Settings;
