import { Space,Card } from 'antd'
import Typography from 'antd/es/typography/Typography'
import React,{ useEffect, useState } from 'react'
import BookedPatientsCard from './BookedPatientsCard';
import PatientWaitingCard from './PatientWaitingCard';
import CheckOutCard from './CheckOutCard';
import useUserStore from '../../../store/useStore';
import UserSettingServices from '../../../../Services/UserSettingServices';

import { Button } from '@mui/material';
import BookedSeatStatus from './BookedSeatStatus';

function Schedule() {
  const handleDelete=()=>{
    UserSettingServices.reset()
  }
  const [post,setPost] = useState([]);
  useEffect(()=>{
    UserSettingServices.getAllBooked().then((res)=>{
      setPost(res.data)
    })
  }, [post])
  const userInfo = useUserStore(state => state.userInfo)
  const getWaitting = () =>{
    return post.filter(post=>post.patient_waitting === 1)
  }
  const getCheckout = () =>{
    return post.filter(post=>post.patient_waitting === 2)
  }

  const bookedRecord = () => {
    return post.filter(post => post.p_name === userInfo.p_name)[0]
  }

  const handleBook =()=>{
    UserSettingServices.booking({
      booked_no: post.length + 1,
      patient_waitting: 0,
      p_name: userInfo.p_name,
      check_out: 0
    })
    .then((res) => 
    {
      setPost([...post, res.data])
    })
    .catch(e => console.log(e))
  }
  return (
    <div>
    
      
      <div>
      <Typography.Title >Reserve your seat</Typography.Title>
      <Space direction="horizontal">
        <Card size="small" >
          <Space direction="horizontal" >
          <BookedPatientsCard bookedPatientCount={post.length} />
          </Space>
        </Card>
        <Card size="small" >
          <PatientWaitingCard waitingPatientCount={getWaitting().length} />
        </Card>
        <Card size="small" >
          <CheckOutCard checkOutCount={getCheckout().length} />
        </Card>
      </Space>
      
      </div>
      <div className="seatbox">
  
      </div>
      <Space >
      
        
      <Button variant="contained" onClick={handleDelete}>Reset</Button>


      </Space>
      <BookedSeatStatus/>
      
    </div>
  )
}

export default Schedule