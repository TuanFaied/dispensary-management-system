import React, { useEffect, useState } from 'react'
import { 
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper } from '@mui/material'
import { Select } from 'antd'
import UserSettingServices from '../../../../Services/UserSettingServices';

function BookedSeatStatus() {
    const [post,setPost] = useState([]);
  useEffect(()=>{
    UserSettingServices.getAllBooked().then((res)=>{
      setPost(res.data)
    })
  }, [post])

  const handleChange = (status, seat_no) => {
    UserSettingServices.status(status, seat_no)
        .then(res => console.log(res))
        .catch(e => console.log(e))
  }
  return (
    <TableContainer component={Paper} sx={{maxHeight:'300px'}}>
        <Table aria-aria-label='simple table' stickyHeader >
            <TableHead>
                <TableRow>
                    <TableCell>Seat No</TableCell>
                    <TableCell>Patient Name</TableCell>
                    <TableCell>Status</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    post.map((row)=>(
                        <TableRow
                            key={row.id}
                            sx={{'&:last-child td, &:last-child th':{border:0}}}>
                                <TableCell>{row.booked_no}</TableCell>
                                <TableCell>{row.p_name}</TableCell>
                                
                                <TableCell> <Select onChange={(value) => handleChange(value, row.booked_no)} defaultValue="Bookeed" style={{ width: 120 }} 
                                 options={[ { value: '1', label: 'Waitting' },{ value: '2', label: 'Check out' },]}/>
                                </TableCell>
                            </TableRow>
                            
                    ))
                }
            </TableBody>

        </Table>

    </TableContainer>
  )
}
const tableData =[
    {
        id:1,
        Patient_id:"LC0007",
        Patient_name:"Dhahlan",
        Status:"Check Out"

    },
    {
        id:2,
        Patient_id:"LC0125",
        Patient_name:"Asam",
        Status:"Check Out"

    },
    {
        id:3,
        Patient_id:"LC0212",
        Patient_name:"Hanan",
        Status:"Check Out"

    },
    {
        id:4,
        Patient_id:"LC0001",
        Patient_name:"Aafrith",
        Status:"Check Out"

    },
    {
        id:5,
        Patient_id:"LC1234",
        Patient_name:"Rusham",
        Status:"Check Out"

    },
    {
        id:6,
        Patient_id:"LC0119",
        Patient_name:"Shahnoon",
        Status:"Check Out"

    },
    {
        id:7,
        Patient_id:"LC0084",
        Patient_name:"razil",
        Status:"Check Out"

    },
    {
        id:8,
        Patient_id:"LC0054",
        Patient_name:"Aadhil",
        Status:"Check Out"

    },
    {
        id:9,
        Patient_id:"LC0051",
        Patient_name:"Dhahlan",
        Status:"Check Out"

    },
    {
        id:10,
        Patient_id:"LC0417",
        Patient_name:"Dhahlan",
        Status:"Check Out"

    }
    
]

export default BookedSeatStatus