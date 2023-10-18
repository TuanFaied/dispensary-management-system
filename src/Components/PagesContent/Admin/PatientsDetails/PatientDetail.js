import React, { useState,useEffect } from 'react'
import { 
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper } from '@mui/material'
import PatientSevices from '../../../../Services/PatientSevices'
import { Typography } from 'antd';
  


function PatientDetail() {
  const[patient,setPatient] = useState([]);

  useEffect(() => {
    PatientSevices.getPatients().then((res) => {
      setPatient(res.data);
    });
  });
  return (
    <><Typography.Text style={{marginBottom:"100px"}}>Patient Details</Typography.Text>
    
    <TableContainer component={Paper} sx={{ maxHeight: '500px', maxWidth: "100%" }}>
      <Table aria-aria-label='simple table' stickyHeader>
        <TableHead>
          <TableRow>
           
            <TableCell sx={{background:"rgb(68, 17, 255)",color:"rgb(248, 248, 248)"}}>User ID</TableCell>
            <TableCell sx={{background:"rgb(68, 17, 255)",color:"rgb(248, 248, 248)"}}>User Name</TableCell>
            <TableCell sx={{background:"rgb(68, 17, 255)",color:"rgb(248, 248, 248)"}}>Email</TableCell>
            <TableCell sx={{background:"rgb(68, 17, 255)",color:"rgb(248, 248, 248)"}}>Mobile No</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patient.map((row) => (
            <TableRow
              key={row.p_ID}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              
              <TableCell>{row.p_ID}</TableCell>
              <TableCell>{row.p_name}</TableCell>
              <TableCell>{row.p_email}</TableCell>
              <TableCell>{row.mobile_no}</TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>

    </TableContainer></>
  )
}

export default PatientDetail

