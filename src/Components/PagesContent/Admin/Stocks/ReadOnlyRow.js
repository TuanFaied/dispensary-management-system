import React from 'react'

function ReadOnlyRow(detail,handleEditClick,handleDeleteClick) {
  return (
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

export default ReadOnlyRow