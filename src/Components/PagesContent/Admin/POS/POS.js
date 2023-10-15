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
function POS() {
  const [data,setData] =useState([
    {userid:"", 
    medicine:"",
    quantity:"",
    discription:"",
    price:"",
    date:""}])

  const handleClick=()=>{
    const newData = {
      userid: "",
      medicine: "",
      quantity: "",
      discription: "",
      price: "",
      date: ""
    };
    setData([...data, newData]);
  }
  const handleChange = (e,i)=>{
    const {name,value}=e.target
    const onchangeval = [...data]
    onchangeval[i][name]=value
    setData(onchangeval)
  }
  

  const[record,setRecord]=useState([]);
  useEffect(()=>{
    MedicalRecordSevices.getRecords().then((res)=>{
      setRecord(res.data)
    })
    
  })

  return (
    <div>
      <form>
        {data.map((item,i) => (
        <Space direction="horizontal" key={i}>
          <Space direction="vertical">
            <label>User Id</label>
            <Input name="userid" value={item.userid} onChange={(e)=>handleChange(e,i)}/>
          </Space>
          <Space direction="vertical">
            <label>Medicine</label>
            <Input name="medicine" value={item.medicine} onChange={(e)=>handleChange(e,i)} autoSize/>
          </Space>
          <Space direction="vertical">
            <label>Discription</label>
            <TextArea  name="discription" value={item.discription} onChange={(e)=>handleChange(e,i)} autoSize/>
          </Space><Space direction="vertical">
            <label>Quantity</label>
            <Input name="quantity" value={item.quantity} onChange={(e)=>handleChange(e,i)}/>
          </Space>
          <Space direction="vertical">
            <label>Price</label>
            <Input name="price" value={item.price} onChange={(e) => handleChange(e, i)} />
          </Space>
          <Space direction="vertical">
            <label>Date</label>
            <DatePicker value={item.date} onChange={(date) => handleChange({ target: { name: "date", value: date } }, i)}/>
          </Space>
  
        </Space>
        ))}

        <Space>
          
        </Space>
        <Space style={{display:"flex",justifyContent:"center",marginTop:"15px"}} >
          <Button variant="contained" onClick={handleClick}>Add</Button>
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
              key={row.p_ID}
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

