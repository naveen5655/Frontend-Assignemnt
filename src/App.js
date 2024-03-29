import React from 'react';
import CryptocurrencyPrices from './components/CryptocurrencyPrices';
import Sidebar from './components/Sidebar';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <CryptocurrencyPrices />
     
    </div>
  );
};

export default App;