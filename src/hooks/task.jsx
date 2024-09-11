


import React, { useState } from 'react';

const ButtonList = () => {
  
  const [status, setStatus] = useState('');
  console.log(status)
  
  const handleCardClick = (number) => {
    if (number % 2 === 0) {
      setStatus('Even');
    } else {
      setStatus('Odd');
    }
  };

  
  const button = [];
  for (let i = 1; i <= 100; i++) {
    button.push(
      <button  key={i} 
      onClick={() => handleCardClick(i)} >
       
      
       {i}
        </button>
    );
  }

  return (
    <div>
      <h1>{status ? `The number is ${status}` : ''}</h1>

      <div>
        {button}
      </div>
    </div>
  );
};

export default ButtonList;