// CryptocurrencyPrices.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/CryptocurrencyPrices.css';
import WalletIntegration from './WalletIntegration';
import PopulationGraph from './PopulationGraph';

const CryptocurrencyPrices = () => {
  const [bitcoinPrices, setBitcoinPrices] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
        setBitcoinPrices(response.data.bpi);
      } catch (error) {
        console.error('Error fetching cryptocurrency prices:', error);
      }
    };

    fetchData();
  }, []);

  const renderBitcoinPrices = () => {
    if (!bitcoinPrices) {
      return <div>Loading...</div>;
    }

    return (
      <div className="bitcoin-prices-container">
        {Object.keys(bitcoinPrices).map(currency => (
          <div key={currency} className="bitcoin-price-card">
            <h3>{currency}</h3>
            <p>{bitcoinPrices[currency].rate}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="cryptocurrency-prices">
        <center><h2>Cryptocurrency Prices</h2></center>
      {renderBitcoinPrices()}
      <center>
        <PopulationGraph/>
      <WalletIntegration/>
      </center>
    </div>
  );
};

export default CryptocurrencyPrices;