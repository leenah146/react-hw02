import React from 'react'
import Coinitem from './Coinitem';

const Cointop =({coinpop}) => {
  return (
 <>
    <ul>
       {coinpop.map((item, index) =>  {
        if(coinpop.rank.value<10){
    return <Coinitem key={index} item={item}/>
        }
       })}
    </ul>
    </>
  )
}

export default Cointop;