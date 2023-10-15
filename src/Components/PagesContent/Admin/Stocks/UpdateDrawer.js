import React, { useState } from 'react';
import { EditFilled} from '@ant-design/icons';

import { Button, DatePicker, Drawer, Input,Space,Typography } from 'antd';
import StockSevices from '../../../../Services/StockSevices';

const App = () => {
    const [post,setPost] =useState([
        {m_ID:"", 
        m_name:"",
        unit_price:"",
        expire_date:"",
        quantity:""
        }])
     const handleChange = (e,date)=>{
        const value = e.target ? e.target.value : date;
        setPost({ ...post, [e.target ? e.target.name : 'expire_date']: value });
    } 
    const handleClick=(e)=>{
        e.preventDefault()
        StockSevices.updateMedicine(post).then(res=>console.log(res))
        .catch(err=>console.log(err))
      }
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<EditFilled />}>
       
      </Button>
      <Drawer
        title="Update the Medical Record"
        width={420}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        
      >
        <form onSubmit={handleClick}>
      <Space direction="vertical" style={{maxWidth:"90%"}}>
        <Space direction="vertical">
        <Typography.Text >Medicine ID</Typography.Text>
        <Input name="m_ID" required="required" placeholder="123" onChange={(e)=>handleChange(e)}/>
        </Space>
        <Space direction="vertical">
          <Typography.Text >Name</Typography.Text>
          <Input 
            
            name="m_name"
            required="required"
            placeholder="Enter a Name..."
            onChange={(e)=>handleChange(e)}
            ></Input>

        </Space>
        
        <Space direction="vertical">
          <Typography.Text >Expire Date</Typography.Text>
          <DatePicker name="expire_date" required="required" onChange={(date,dateString) => handleChange(date,dateString)}/>

        </Space>
        <Space direction="vertical">
          <Typography.Text >Quantity</Typography.Text>
          <Input
            
            name="quantity"
            required="required"
            placeholder="Enter quantity"
            onChange={(e)=>handleChange(e)}
            ></Input>

        </Space>
        <Space direction="vertical">
          <Typography.Text >Unit price</Typography.Text>
          <Input
            
            name="unit_price"
            required="required"
            placeholder="Enter an unitPrice"
            onChange={(e)=>handleChange(e)}
            ></Input>

        </Space>
        <Space direction="vertical">
          <Typography.Text ></Typography.Text>
          <Button htmlType="submit" onClick={onClose} type="primary">
              Submit
            </Button>

        </Space>

      </Space>
      </form>
        
      </Drawer>
    </>
  );
};
export default App;