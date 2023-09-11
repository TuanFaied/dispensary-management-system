import React, { useState } from 'react';

const DispensaryStatusDropdown = () => {
  const [status, setStatus] = useState('open');

  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="status-dropdown">
      <label htmlFor="status">Dispensary Status:</label>
      <select id="status" value={status} onChange={handleChange}>
        <option value="open">Open</option>
        <option value="close">Close</option>
      </select>
      <div className={`status-box ${status === 'open' ? 'open' : 'close'}`}>
        {status === 'open' ? 'We are Open' : 'We are Close'}
      </div>
    </div>
  );
};

export default DispensaryStatusDropdown;
