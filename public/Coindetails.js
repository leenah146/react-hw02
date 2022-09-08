import React from 'react';

const CoinDetails = ({ coin,sympol,rank,price,market}) => {
  return (
    <div className='mt-4'>
      <div className='row mt-5'>
          <h1>{coin}</h1>
          <h1>{sympol}</h1>
          <h1>{rank}</h1>
          <h1>{price}</h1>
          <h1>{market}</h1>
        </div>
      </div>
  );
};

export default CoinDetails;