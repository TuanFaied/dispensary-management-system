import React, { useEffect, useState } from 'react'
import { 
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper } from '@mui/material'
import MedicalRecordSevices from '../../../../Services/MedicalRecordSevices';
import { useLocation } from 'react-router-dom';
import useUserStore from '../../../store/useStore';

function MedicalHistory() {
  // const user=props.lo;


  const[record,setRecord]=useState([]);
  const userInfo = useUserStore(state => state.userInfo)
  
  const id = userInfo.p_ID;
  console.log(id);

useEffect(()=>{
  const URL=`http://localhost:8081/User/records/${id}`
  MedicalRecordSevices.getUserRecords(URL).then((res)=>{
    setRecord(res.data)
  })
}, [id])


  return (
    <><div>MedicalHistory</div>
      <TableContainer component={Paper} sx={{ maxHeight: '500px' }}>
        <Table aria-aria-label='simple table' stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{background:"rgb(68, 17, 255)",color:"rgb(248, 248, 248)"}}>Date</TableCell>
              <TableCell sx={{background:"rgb(68, 17, 255)",color:"rgb(248, 248, 248)"}}>Medicine</TableCell>
              <TableCell sx={{background:"rgb(68, 17, 255)",color:"rgb(248, 248, 248)"}}>Discription</TableCell>
              <TableCell sx={{background:"rgb(68, 17, 255)",color:"rgb(248, 248, 248)"}}>Quantity</TableCell>
              <TableCell sx={{background:"rgb(68, 17, 255)",color:"rgb(248, 248, 248)"}}>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {record.map((row, idx) => (
              <TableRow
                key={idx}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>{row.r_date}</TableCell>
                <TableCell>{row.medicine_name}</TableCell>
                <TableCell>{row.discription}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>

      </TableContainer>
    </>
  )
  
}
// const tableData =[
//   {
//       id:1,
//       date:"22/03/2023",
//       medicine:"Panadol",
//       Discription:"after break fast 2",
//       quntity:2,
//       amount:20.23
      

//   },
//   {
//       id:2,
//       date:"22/03/2023",
//       medicine:"Panadol",
//       Discription:"after break fast 2",
//       quntity:2,
//       amount:20.23

//   },
//   {
//       id:3,
//       date:"22/03/2023",
//       medicine:"Panadol",
//       Discription:"after break fast 2",
//       quntity:2,
//       amount:20.23

//   },
//   {
//       id:4,
//       date:"22/03/2023",
//       medicine:"Panadol",
//       Discription:"after break fast 2",
//       quntity:2,
//       amount:20.23
//   },
//   {
//       id:5,
//       date:"22/03/2023",
//       medicine:"Panadol",
//       Discription:"after break fast 2",
//       quntity:2,
//       amount:20.23

//   },
//   {
//       id:6,
//       date:"22/03/2023",
//       medicine:"Panadol",
//       Discription:"after break fast 2",
//       quntity:2,
//       amount:20.23

//   },
//   {
//       id:7,
//       date:"22/03/2023",
//       medicine:"Panadol",
//       Discription:"after break fast 2",
//       quntity:2,
//       amount:20.23
//   },
//   {
//       id:8,
//       date:"22/03/2023",
//       medicine:"Panadol",
//       Discription:"after break fast 2",
//       quntity:2,
//       amount:20.23

//   },
//   {
//       id:9,
//       date:"22/03/2023",
//       medicine:"Panadol",
//       Discription:"after break fast 2",
//       quntity:2,
//       amount:20.23

//   },
//   {
//       id:10,
//       date:"22/03/2023",
//       medicine:"Panadol",
//       Discription:"after break fast 2",
//       quntity:2,
//       amount:20.23

//   },
//   {
//     id:11,
//     date:"22/03/2023",
//     medicine:"Panadol",
//     Discription:"after break fast 2",
//     quntity:2,
//     amount:20.23
// }
  
// ]

export default MedicalHistory