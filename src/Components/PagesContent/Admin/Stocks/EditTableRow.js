import React from 'react'

function EditTableRow(editFormData,handleEditFormChange,handleCancelClick) {
  return (
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

export default EditTableRow