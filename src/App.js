import { useEffect, useState } from 'react';
import './App.css';
import CoinDetails from './component/Coindetails';
import Coinlist from './component/Coinlist';
import Spinner from './component/Spinner';
import rank from './component/Cointop';
import Cointop from './component/Cointop';




function App() {
  const [coin,setCoin]=useState('')
  const [rank,setRank]=useState('');
  const [symbol,setSymbol]=useState('');
  const [market,setMarket]=useState('');
  const [coinimg,setCoinimg]=useState('');
  const [price,setPrice]=useState('');
  const [coinList,setCoinList]=useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  const fetchCoinData = async () => {
    const request = await fetch('https://api.coincap.io/v2/assets')
    const data=await request.json()
    setCoin(data.id);
    setRank(data.rank);
    setSymbol(data.symbol);
    setMarket(data.marketCapUsd);
    setPrice(data.priceUsd);
  
   const coinMap = data.data.map((coinlist) => {
        return {
       value:coinlist.id,
     label:coinlist.name,
        };
      });
    setCoinList(coinMap);
   }  
    fetchCoinData();
 
  },[]);


  const onSelect = async (option) => {
    setLoading(true);
    const request = await fetch(
      'https://api.coincap.io/v2/assets/' + option.value
    );
    const data = await request.json();
    setCoin(option.label);
    setRank(data.rank);
    setSymbol(data.symbol);
    setMarket(data.marketCapUsd);
    setPrice(data.priceUsd);

    
  };
  
  return (
    <div className='container text-center mt-5'>
    {loading ? (
      <Spinner />
    ) : (
      <>
        <Coinlist
          coin={coin}
          onSelect={onSelect}
          coinList={coinList}
        />
        <CoinDetails coin={coin} symbol={symbol} rank={rank} price={price} market={market} />
      </>
    )}
   <Cointop {...coinList}/>
  

  
  </div>
  );
}

export default App;
