import { Space,Card } from 'antd'
import Typography from 'antd/es/typography/Typography'
import React from 'react'
import BookedPatientsCard from './BookedPatientsCard';
import PatientWaitingCard from './PatientWaitingCard';
import CheckOutCard from './CheckOutCard';
import NumberCarousel from './NumberCarousel';

import { Button } from '@mui/material';
import BookedSeatStatus from './BookedSeatStatus';

function Schedule() {
  const bookedPatientCount = 26;
  const waitingPatientCount = 7;
  const checkOutCount = 10;
  return (
    <div>
    
      
      <div>
      <Typography.Title >Reserve your seat</Typography.Title>
      <Space direction="horizontal">
        <Card size="small" >
          <Space direction="horizontal" >
          <BookedPatientsCard bookedPatientCount={bookedPatientCount} />
          </Space>
        </Card>
        <Card size="small" >
          <PatientWaitingCard waitingPatientCount={waitingPatientCount} />
        </Card>
        <Card size="small" >
          <CheckOutCard checkOutCount={checkOutCount} />
        </Card>
      </Space>
      
      </div>
      <div className="seatbox">
      
      <NumberCarousel />
      </div>
      <Space>
      <Button variant="contained" color="warning">Patient Waiting</Button>
      <Button variant="contained" color="error">Check Out</Button>
      <select id="status" >
        <option value="Doctor In">Doctor In</option>
        <option value="Doctor Out">Doctor Out</option>
      </select>
      <Button variant="contained">BOOK NOW</Button>


      </Space>
      <BookedSeatStatus/>
      
    </div>
  )
}

export default Schedule