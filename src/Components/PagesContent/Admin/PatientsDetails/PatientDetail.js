import React from 'react'
import { Typography } from 'antd'
import { 
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper } from '@mui/material'
  


function PatientDetail() {
  return (
    <>
    <TableContainer component={Paper} sx={{ maxHeight: '500px', maxWidth: "100%" }}>
      <Table aria-aria-label='simple table' stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>User Profile</TableCell>
            <TableCell>User ID</TableCell>
            <TableCell>User Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Mobile No</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {UserData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>{row.avatar}</TableCell>
              <TableCell>{row.Patient_id}</TableCell>
              <TableCell>{row.Patient_name}</TableCell>
              <TableCell>{row.Email}</TableCell>
              <TableCell>{row.Mobileno}</TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>

    </TableContainer></>
  )
}
const UserData =[
  {
      id:1,
      Patient_id:"LC0007",
      Patient_name:"Dhahlan",
      Email:"simple@gmail",
      Mobileno:"0723423423",
     

  },
  {
      id:2,
      
      Patient_id:"LC0125",
      Patient_name:"Asam",
      Email:"simple2@gmail",
      Mobileno:"0723423423"

  },
  {
      id:3,

      Patient_id:"LC0212",
      Patient_name:"Hanan",
      Email:"simple3@gmail",
      Mobileno:"0723423423"

  },
  {
      id:4,

      Patient_id:"LC0001",
      Patient_name:"Aafrith",
      Email:"simple4@gmail",
      Mobileno:"0723423423"

  },
  {
      id:5,

      Patient_id:"LC1234",
      Patient_name:"Rusham",
      Email:"simple5@gmail",
      Mobileno:"0723423423"

  },
  {
      id:6,

      Patient_id:"LC0119",
      Patient_name:"Shahnoon",
      Email:"simple6@gmail",
      Mobileno:"0723423423"

  },
  {
      id:7,

      Patient_id:"LC0084",
      Patient_name:"razil",
      Email:"simple7@gmail",
      Mobileno:"0723423423"

  },
  {
      id:8,

      Patient_id:"LC0054",
      Patient_name:"Aadhil",
      Email:"simple8@gmail",
      Mobileno:"0723423423"

  },
  {
      id:9,

      Patient_id:"LC0051",
      Patient_name:"Dhahlan",
      Email:"simple9@gmail",
      Mobileno:"0723423423"

  },
  {
      id:10,

      Patient_id:"LC0417",
      Patient_name:"Dhahlan",
      Email:"simple10@gmail",
      Mobileno:"0723423423"

  }
  
]

export default PatientDetail