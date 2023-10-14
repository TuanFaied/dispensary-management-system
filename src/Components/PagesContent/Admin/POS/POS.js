import { Button } from '@mui/material'
import { Input, Space,Typography } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React, { useState } from 'react'

function POS() {
  const [data,setData] =useState([{seatNo:"", medicine:"",quantity:"",discribtion:"",price:""}])

  const handleClick=()=>{
    setData([...data,{seatNo:"", medicine:"",quantity:"",discribtion:"",price:""}])
  }

  const handleChange = (e,i)=>{
    const {name,value}=e.target
    const onchangeval = [...data]
    onchangeval[i][name]=value
    setData(onchangeval)

  }

  const handleDelete=(i)=>{
    const deleteVal = [...data]
    deleteVal.splice(i,1)
    setData(deleteVal)
  }
  const calculateTotalPrice = (seatNo) => {
    let totalPrice = 0;
    data.forEach((item) => {
      if (item.seatNo === seatNo) {
        totalPrice += parseFloat(item.price) * parseInt(item.quantity);
      }
    });
    return totalPrice.toFixed(2);
  };

  const handlePurchase = ()=>{
    console.log('Purchased Date',data);
    setData([{ seatNo: '', medicine: '', quantity: '', discribtion: '', price: '' }]);
  }

  
  return (
    <div>
      
      
        
      
      
      

      <table style={{ overflow:"hidden", maxWidth:"90%"}}>
        <thead>
          <th >Seat NO</th>
          <th>Medicine</th>
          <th>Quantity</th>
          <th>discription</th>
          <th>Price</th>
        </thead>
        <tbody>
          {
            data.map((val,i)=>
            
            <tr>
              
              <td >
              <Input name="seatNo" value={val.seatNo} onChange={(e)=>handleChange(e,i)} style={{
                 width: '100%'}} />
              </td>
              <td>
              <TextArea name="medicine" value={val.medicine} onChange={(e)=>handleChange(e,i)}  autoSize style={{
                 width: '100%'}}/>
              </td>
              <td>
              <Input name="quantity" value={val.quantity} onChange={(e)=>handleChange(e,i)}  />
              </td>
              <td style={{textOverflow:"clip"}}>
              <TextArea name="discribtion" value={val.discribtion} onChange={(e)=>handleChange(e,i)}  autoSize style={{
                 width: '100%'}}/>
              </td>
              <td>
              <Input name="price" value={val.price} onChange={(e)=>handleChange(e,i)}  />
              </td>
              <td>
              <Button onClick={()=>handleDelete(i)}>Delete</Button>
              </td>
            </tr>
            
            )

          }
        </tbody>
      </table>
      <br/>
      <Space>
            <Button onClick={handleClick} variant="contained"  >add</Button>
            <br />
            <Typography.Text>Total Price for Seat 1: {calculateTotalPrice('1')}</Typography.Text>
            <Button onClick={handlePurchase} variant="contained" style={{ background: 'green', color: 'white' }}>
          Purchase
        </Button>
      </Space>
      


      <p>{JSON.stringify(data)}</p>







    </div>
  )
}

export default POS

{/* <Space direction="horizontal">

        <Space>
        <Typography.Text style={{fontSize:"18px",fontFamily:"sans-serif",margin:"0px  0px 0px"  }} >Seat NO</Typography.Text>
        </Space>
        <Space>
        <Typography.Text style={{fontSize:"18px",fontFamily:"sans-serif",margin:"0px 32px 0px 0px"  }} >Medicine</Typography.Text>
        </Space>
        <Space>
        <Typography.Text style={{fontSize:"18px",fontFamily:"sans-serif",margin:"0px 32px 0px 0px"  }}>Quantity</Typography.Text>
        </Space>
        <Space>
        <Typography.Text style={{fontSize:"18px",fontFamily:"sans-serif",margin:"0px 32px 0px 0px"  }}>Discribtion</Typography.Text>
        </Space>
        <Space>
        <Typography.Text style={{fontSize:"18px",fontFamily:"sans-serif",margin:"0px 32px 0px 0px"  }}>Price</Typography.Text>
        </Space>

      </Space>
      <br></br>
      {
        data.map((val,i)=>
        <Space direction="horizontal">
          <Space direction="vertical">
            
            <Input name="seatNo" value={val.seatNo} onChange={(e)=>handleChange(e,i)} style={{
            width: '100%',}} />

          </Space>
          
          <Space direction="vertical">
            
            <TextArea name="medicine" value={val.medicine} onChange={(e)=>handleChange(e,i)}  autoSize style={{
            width: '100%',
          }}/>

          </Space>
          <Space direction="vertical">
            
            <Input name="quantity" value={val.quantity} onChange={(e)=>handleChange(e,i)}  />

          </Space>
          <Space direction="vertical">
         
            <TextArea name="discribtion" value={val.discribtion} onChange={(e)=>handleChange(e,i)}  autoSize style={{
            width: '100%',
          }}/>

          </Space>
          <Space direction="vertical">
           
            <Input name="price" value={val.price} onChange={(e)=>handleChange(e,i)}  />

          </Space>
          <Space direction="vertical">
            <Button onClick={()=>handleDelete(i)}>Delete</Button>
          </Space>
          
        </Space>
        
        )
        
      }
      <br/>
      <Space>
            <Button onClick={handleClick} variant="contained"  >add</Button>
      </Space> */}