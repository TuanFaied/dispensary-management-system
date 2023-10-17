import { Button } from '@mui/material';
import { Input, Space } from 'antd';
import React, { useState,useEffect } from 'react';
import './Settings.css';
import SettingsServices from '../../../../Services/UserSettingServices';

function Settings() {

  const p_ID = 1;
  const [management, setManagement] = useState({
    "p_ID":p_ID,
    p_name: "",
    p_email: "",
    p_password: "",
    
  });
const [password,setPassword]=useState({
  
  confirmPassword: ""
});
  const handleChange = (e,date)=>{
    const value = e.target ? e.target.value : date;
    setManagement({ ...management, [e.target ? e.target.name : 'expire_date']: value });
    setPassword({...password,[e.target ? e.target.name : 'expire_date']: value })
  } 
 
  

  const isPasswordChange = management.p_password !== "" || password.confirmPassword !== "";
  const isSaveEnabled = management.p_name !== "" && management.p_email !=="" &&  (management.p_password !== "" && management.p_password === password.confirmPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    
      
      SettingsServices.updatePatient(management)
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
              name="p_name"
              required
              placeholder="Enter User Name"
              onChange={handleChange}
              
            />
          </Space>
          <Space direction="vertical">
            <label>Email</label>
            <Input
              name="p_email"
              required
              placeholder="...@gmail.com"
              onChange={handleChange}
             
            />
          </Space>
          <Space direction="vertical">
            <label>New Password</label>
            <Input.Password
              name="p_password"
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
