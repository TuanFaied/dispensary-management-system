import React, { Fragment, useEffect, useState } from 'react'
import { Input, Space,Typography } from 'antd'
import { Button } from '@mui/material'
import data from "./mock.json"
import { nanoid } from "nanoid";
import ReadOnlyRow from './ReadOnlyRow';
import EditTableRow from './EditTableRow';
import { 
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper } from '@mui/material'
import StockSevices from '../../../../Services/StockSevices';

function Stocks() {
  const [detail,setDetail] = useState(data)
  const [addFormData,setAddFormData] = useState({
    name:"",
    expireDate:"",
    quantity:"",
    unitPrice:""
  })

  const [editFormData, setEditFormData] = useState({
    name:"",
    expireDate:"",
    quantity:"",
    unitPrice:""
  })

  const [editDetailId, setEditDetailId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };
  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit =(event)=>{
    event.preventDefault();

    const newDetail ={
      id: nanoid(),
      name: addFormData.name,
      expireDate : addFormData.expireDate,
      quantity : addFormData.quantity,
      unitPrice : addFormData.unitPrice
    }

    const newDetails = [...detail,newDetail]
    setDetail(newDetails)
  }

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedDetail = {
      id: editDetailId,
      name: editFormData.name,
      expireDate: editFormData.expireDate,
      quantity: editFormData.quantity,
      unitPrice: editFormData.unitPrice
    };

    const newDetails = [...detail];

    const index = detail.findIndex((detail) => detail.id === editDetailId);

    newDetails[index] = editedDetail;

    setDetail(newDetails);
    setEditDetailId(null);
  };

  function handleEditClick(event, contact) {
    event.preventDefault();
    setEditDetailId(contact.id);

    const formValues = {
      name: contact.name,
      expireDate: contact.expireDate,
      quantity: contact.quantity,
      unitPrice: contact.unitPrice
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditDetailId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...detail];

    const index = detail.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setDetail (newContacts);
  };
  const[mdata,setmData]=useState([])
  useEffect(()=>{
    StockSevices.getAllMedicine().then((res)=>{
      setmData(res.data)
    })
  })
  

  return (
    <div>
      
      <form onSubmit={handleAddFormSubmit}>
      <Space direction="horizontal" style={{maxWidth:"90%"}}>
        <Space direction="vertical">
          <Typography.Text >Name</Typography.Text>
          <Input 
            type="text"
            name="name"
            required="required"
            placeholder="Enter a Name..."
            onChange={handleAddFormChange}
            ></Input>

        </Space>
        
        <Space direction="vertical">
          <Typography.Text >Expire Date</Typography.Text>
          <Input
            type="text"
            name="expireDate"
            required="required"
            placeholder="Enter an expire date"
            onChange={handleAddFormChange}
          >
          </Input>

        </Space>
        <Space direction="vertical">
          <Typography.Text >Quantity</Typography.Text>
          <Input
            type="text"
            name="quantity"
            required="required"
            placeholder="Enter quantity"
            onChange={handleAddFormChange}
            ></Input>

        </Space>
        <Space direction="vertical">
          <Typography.Text >Unit price</Typography.Text>
          <Input
            type="text"
            name="unitPrice"
            required="required"
            placeholder="Enter an unitPrice"
            onChange={handleAddFormChange}
            ></Input>

        </Space>
        <Space direction="vertical">
          <Typography.Text ></Typography.Text>
          <Button type="submit" variant="contained" color="warning">ADD</Button>

        </Space>

      </Space>
      </form>
      <br></br>
      <form onSubmit={handleEditFormSubmit}>
        
        <TableContainer component={Paper} sx={{ maxHeight: '500px', maxWidth: "100%" }}>
      <Table aria-aria-label='simple table' stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Medicine ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Expire Date</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Unit Price</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
           {mdata.map((row) => (
            <TableRow
              key={row.m_ID}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>{row.m_ID}</TableCell>
              <TableCell>{row.m_name}</TableCell>
              <TableCell>{row.expire_date}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>{row.unit_price}</TableCell>
            </TableRow>
          ))} 
        </TableBody>

      </Table>

    </TableContainer>
      </form>


    </div>
  )
}
/* const ReadOnlyRow = (detail,handleEditClick,handleDeleteClick)=>{
  return(
  <tr>
      <td>{detail.id}</td>
      <td>{detail.name}</td>
      <td>{detail.expireDate}</td>
      <td>{detail.quantity}</td>
      <td>{detail.unitPrice}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, detail)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(detail.id)}>
          Delete
        </button>
      </td>
  </tr>
  )
}

const EditTableRow = (editFormData,handleEditFormChange,handleCancelClick) =>{
  return(
  <tr>
    <td>
    <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="name"
          value={editFormData.name}
          onChange={handleEditFormChange}
        ></input>
    </td>
    <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an expire date..."
          name="expireDate"
          value={editFormData.expireDate}
          onChange={handleEditFormChange}
        ></input>
    </td>
    <td>
        <input
          type="text"
          required="required"
          placeholder="Enter quantity..."
          name="quantity"
          value={editFormData.quantity}
          onChange={handleEditFormChange}
        ></input>
    </td>
    <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an unit price..."
          name="unitPrice"
          value={editFormData.unitPrice}
          onChange={handleEditFormChange}
        ></input>
    </td>
    <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
    </td>
  </tr>
  ) 
}

*/

export default Stocks