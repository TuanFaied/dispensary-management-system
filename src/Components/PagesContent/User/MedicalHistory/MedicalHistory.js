import React from 'react'
import { 
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper } from '@mui/material'

function MedicalHistory() {
  return (
    <><div>MedicalHistory</div>
      <TableContainer component={Paper} sx={{ maxHeight: '580px' }}>
        <Table aria-aria-label='simple table' stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Medicine</TableCell>
              <TableCell>Discription</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.medicine}</TableCell>
                <TableCell>{row.Discription}</TableCell>
                <TableCell>{row.quntity}</TableCell>
                <TableCell>{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>

      </TableContainer>
    </>
  )
  
}
const tableData =[
  {
      id:1,
      date:"22/03/2023",
      medicine:"Panadol",
      Discription:"after break fast 2",
      quntity:2,
      amount:20.23
      

  },
  {
      id:2,
      date:"22/03/2023",
      medicine:"Panadol",
      Discription:"after break fast 2",
      quntity:2,
      amount:20.23

  },
  {
      id:3,
      date:"22/03/2023",
      medicine:"Panadol",
      Discription:"after break fast 2",
      quntity:2,
      amount:20.23

  },
  {
      id:4,
      date:"22/03/2023",
      medicine:"Panadol",
      Discription:"after break fast 2",
      quntity:2,
      amount:20.23
  },
  {
      id:5,
      date:"22/03/2023",
      medicine:"Panadol",
      Discription:"after break fast 2",
      quntity:2,
      amount:20.23

  },
  {
      id:6,
      date:"22/03/2023",
      medicine:"Panadol",
      Discription:"after break fast 2",
      quntity:2,
      amount:20.23

  },
  {
      id:7,
      date:"22/03/2023",
      medicine:"Panadol",
      Discription:"after break fast 2",
      quntity:2,
      amount:20.23
  },
  {
      id:8,
      date:"22/03/2023",
      medicine:"Panadol",
      Discription:"after break fast 2",
      quntity:2,
      amount:20.23

  },
  {
      id:9,
      date:"22/03/2023",
      medicine:"Panadol",
      Discription:"after break fast 2",
      quntity:2,
      amount:20.23

  },
  {
      id:10,
      date:"22/03/2023",
      medicine:"Panadol",
      Discription:"after break fast 2",
      quntity:2,
      amount:20.23

  },
  {
    id:11,
    date:"22/03/2023",
    medicine:"Panadol",
    Discription:"after break fast 2",
    quntity:2,
    amount:20.23
}
  
]

export default MedicalHistory