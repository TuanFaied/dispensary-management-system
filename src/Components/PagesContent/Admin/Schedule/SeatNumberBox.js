import React from 'react';

const SeatNumberBox =({ number, status, onClick }) => {
    const boxStyle = {
      backgroundColor: status,
    };
  return (
    <div className="number-box" style={boxStyle} onClick={onClick}>
      {number}
    </div>
  );
};

export default SeatNumberBox;
