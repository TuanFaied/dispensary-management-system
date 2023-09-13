import React from 'react'
import { 
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper } from '@mui/material'

function BookedSeatStatus() {
  return (
    <TableContainer component={Paper} sx={{maxHeight:'300px'}}>
        <Table aria-aria-label='simple table' stickyHeader >
            <TableHead>
                <TableRow>
                    <TableCell>Seat No</TableCell>
                    <TableCell>Patient ID</TableCell>
                    <TableCell>Patient Name</TableCell>
                    <TableCell>Status</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    tableData.map((row)=>(
                        <TableRow
                            key={row.id}
                            sx={{'&:last-child td, &:last-child th':{border:0}}}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.Patient_id}</TableCell>
                                <TableCell>{row.Patient_name}</TableCell>
                                <TableCell>{row.Status}</TableCell>
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