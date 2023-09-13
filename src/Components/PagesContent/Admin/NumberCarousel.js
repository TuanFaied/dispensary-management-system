import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import NumberBox from './SeatNumberBox';

const NumberCarousel = () => {
    const numRows = 100 / 8; // Calculate the number of rows
    const [selectedNumber, setSelectedNumber] = useState(null);
  
    const handleNumberClick = (number) => {
      setSelectedNumber(number);
    };
  
    const numbers = Array.from({ length: 100 }, (_, index) => index + 1); // Create an array of 100 numbers
  
    return (
      <div>
        <Carousel className="number-carousel" showThumbs={false}>
          {Array.from({ length: numRows }, (_, rowIndex) => (
            <div key={rowIndex} className="number-row">
              {numbers.slice(rowIndex * 8, (rowIndex + 1) * 8).map((number) => (
                <NumberBox
                  key={number}
                  number={number}
                  status={number === selectedNumber ? 'green' : 'blue'}
                  onClick={() => handleNumberClick(number)}
                />
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    );
  };
  

export default NumberCarousel;
