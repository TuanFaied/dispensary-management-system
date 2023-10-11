import { Button } from '@mui/material'
import {  Space } from 'antd'
import React from 'react'

function Settings() {
  return (
    <>
    <div>Settings</div>
    <form>
      <Space direction="horizontal">
     <div className="name">
         <label className="label">First Name</label>
         <input className="input" placeholder="Jhon" type="text" name="firstname" />             
      </div>
      <div className="name">
         <label className="label">Last Name</label>
         <input className="input" placeholder="wick" type="text" name="lastname" />             
      </div>
      </Space>
      <Space direction="horizontal">
        <Space direction="vertical" className="gender">
         <label className="label">Gender</label>
        <select id="status" >
          <option value="Male">Male</option>
          <option value="Femle">Female</option>
        </select>             
         </Space>
      <div className="dateogbirth">
         <label className="label">Date of Birth</label>
         <input className="input"  type="date" name="DOB" />             
      </div>
      <div className="name">
         <label className="label">Address</label>
         <input className="input"  type="text" name="DOB" />             
      </div>
      </Space>
      <Space>
      <div className="name">
         <label className="label">First Name</label>
         <input className="input" placeholder="Jhon" type="text" name="firstname" />             
      </div>
      <div className="name">
         <label className="label">Last Name</label>
         <input className="input" placeholder="wick" type="text" name="lastname" />             
      </div>
      </Space>
      <div className="name">
         <label className="label">Current Password</label>
         <input className="input" placeholder="Jhon" type="text" name="firstname" />             
      </div>
      <Space>
      <div className="name">
         <label className="label">New Password</label>
         <input className="input" placeholder="Jhon" type="text" name="firstname" />             
      </div>
      <div className="name">
         <label className="label">Re-endter Password</label>
         <input className="input" placeholder="Jhon" type="text" name="firstname" />             
      </div>
      </Space>
      <div>  </div>
      <Button variant="contained" color="primary">Save changes</Button>
    </form>
    </>
  )
}

export default Settings