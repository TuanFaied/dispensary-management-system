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
            <TableCell>User Profile</TableCell>
            <TableCell>User ID</TableCell>
            <TableCell>User Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Mobile No</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patient.map((row) => (
            <TableRow
              key={row.p_ID}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>{row.avatar}</TableCell>
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

