import React, { Fragment, useEffect, useState } from 'react'
import { DatePicker, Input, Space,Typography } from 'antd'
import { Button } from '@mui/material'
import UpdateFeild from './UpdateDrawer'
import { 
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper } from '@mui/material'
import StockSevices from '../../../../Services/StockSevices';

function Stocks() {

  const [post,setPost] =useState([
    {m_ID:"", 
    m_name:"",
    unit_price:"",
    expire_date:"",
    quantity:""
    }])
    const handleChange = (e,date)=>{
      const value = e.target ? e.target.value : date;
      setPost({ ...post, [e.target ? e.target.name : 'expire_date']: value });
    } 

  const[mdata,setmData]=useState([]) // m stand for medical
  useEffect(()=>{
    StockSevices.getAllMedicine().then((res)=>{
      setmData(res.data)
    })
  })
  const handleClick=(e)=>{
    e.preventDefault()
    StockSevices.createMedicine(post).then(res=>console.log(res))
    .catch(err=>console.log(err))
  }
  

  return (
    <div>
      
      <form onSubmit={handleClick}>
      <Space direction="horizontal" style={{maxWidth:"90%"}}>
        <Space direction="vertical">
        <Typography.Text >Medicine ID</Typography.Text>
        <Input name="m_ID" required="required" placeholder="123" onChange={(e)=>handleChange(e)}/>
        </Space>
        <Space direction="vertical">
          <Typography.Text >Name</Typography.Text>
          <Input 
            
            name="m_name"
            required="required"
            placeholder="Enter a Name..."
            onChange={(e)=>handleChange(e)}
            ></Input>

        </Space>
        
        <Space direction="vertical">
          <Typography.Text >Expire Date</Typography.Text>
          <DatePicker name="expire_date" required="required" onChange={(date,dateString) => handleChange(date,dateString)}/>

        </Space>
        <Space direction="vertical">
          <Typography.Text >Quantity</Typography.Text>
          <Input
            
            name="quantity"
            required="required"
            placeholder="Enter quantity"
            onChange={(e)=>handleChange(e)}
            ></Input>

        </Space>
        <Space direction="vertical">
          <Typography.Text >Unit price</Typography.Text>
          <Input
            
            name="unit_price"
            required="required"
            placeholder="Enter an unitPrice"
            onChange={(e)=>handleChange(e)}
            ></Input>

        </Space>
        <Space direction="vertical">
          <Typography.Text ></Typography.Text>
          <Button type="submit" variant="contained" color="warning">ADD</Button>

        </Space>

      </Space>
      </form>
      <br></br>
      <form >
        
        <TableContainer component={Paper} sx={{ maxHeight: '500px', maxWidth: "100%" }}>
      <Table aria-aria-label='simple table' stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Medicine ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Expire Date</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Unit Price</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
           {mdata.map((row) => (
            <TableRow
              key={row.m_ID}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>{row.m_ID}</TableCell>
              <TableCell>{row.m_name}</TableCell>
              <TableCell>{row.expire_date}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>{row.unit_price}</TableCell>
              <TableCell><UpdateFeild/></TableCell>
            </TableRow>
          ))} 
        </TableBody>

      </Table>

    </TableContainer>
      </form>


    </div>
  )
}


export default Stocks