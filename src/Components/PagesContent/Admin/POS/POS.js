import { Button } from '@mui/material'
import { DatePicker, Input, Space,Typography } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React, { useEffect, useState } from 'react'
import { 
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper } from '@mui/material'

import MedicalRecordSevices from '../../../../Services/MedicalRecordSevices'
import AddMedicalRecordService from '../../../../Services/AddMedicalRecordService'
function POS() {
  const [post,setPost] =useState([
    {u_ID:"", 
    medicine_name:"",
    quantity:"",
    discription:"",
    amount:"",
    r_date:""}])

  const handleClick=(e)=>{
    e.preventDefault()
    AddMedicalRecordService.createRecords(post).then(res=>console.log(res))
    .catch(err=>console.log(err))
  }
  const handleChange = (e,date)=>{
    const value = e.target ? e.target.value : date;
    setPost({ ...post, [e.target ? e.target.name : 'r_date']: value });
  }
  

  const[record,setRecord]=useState([]);
  useEffect(()=>{
    MedicalRecordSevices.getRecords().then((res)=>{
      setRecord(res.data)
    })
    
  },[])

  return (
    <div>
      <form onSubmit={handleClick}>
        
        <Space direction="horizontal" >
          <Space direction="vertical">
            <label>User Id</label>
            <Input name="u_ID" required="required"  onChange={(e)=>handleChange(e)}/>
          </Space>
          <Space direction="vertical">
            <label>Medicine</label>
            <Input name="medicine_name" required="required" onChange={(e)=>handleChange(e)} autoSize/>
          </Space>
          <Space direction="vertical">
            <label>Discription</label>
            <TextArea  name="discription" required="required" onChange={(e)=>handleChange(e)} autoSize/>
          </Space><Space direction="vertical">
            <label>Quantity</label>
            <Input name="quantity" required="required"  onChange={(e)=>handleChange(e)}/>
          </Space>
          <Space direction="vertical">
            <label>Price</label>
            <Input name="amount" required="required" onChange={(e) => handleChange(e)} />
          </Space>
          <Space direction="vertical">
            <label>Date</label>
            <DatePicker name="r_date" required="required" onChange={(date,dateString) => handleChange(date,dateString)}/>
          </Space>
  
        </Space>
        

        <Space>
          
        </Space>
        <Space style={{display:"flex",justifyContent:"center",marginTop:"15px"}} >
          <Button variant="contained" type="submit" >Add</Button>
        </Space>
      </form>
      <br/>
      <TableContainer component={Paper} sx={{ maxHeight: '500px', maxWidth: "100%" }}>
      <Table aria-aria-label='simple table' stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>User ID</TableCell>
            <TableCell>Medicine</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Discription</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {record.map((row) => (
            <TableRow
              key={row.r_ID}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      
              <TableCell>{row.u_ID}</TableCell>
              <TableCell>{row.medicine_name}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>{row.discription}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.r_date}</TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>

    </TableContainer>

    </div>
  )
}

export default POS

