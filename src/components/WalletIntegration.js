import React, { useState } from 'react';
import Web3 from 'web3';

const WalletIntegration = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const connectWallet = async () => {
    try {
      // Check if MetaMask is installed and available
      if (window.ethereum) {
        // Request the user to connect their wallet
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        
        // Create a Web3 instance
        const web3 = new Web3(window.ethereum);
        
        // Check if wallet is connected
        if (web3.eth.net.isListening()) {
          setIsConnected(true);
          setErrorMessage('');
        } else {
          setIsConnected(false);
          setErrorMessage('Failed to connect wallet. Please try again.');
        }
      } else {
        setIsConnected(false);
        setErrorMessage('MetaMask is not installed. Please install MetaMask to connect your wallet.');
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
      setIsConnected(false);
      setErrorMessage('An error occurred while connecting your wallet. Please try again.');
    }
  };

  return (
    <div>
      <h2>MetaMask Wallet Integration</h2>
      {isConnected ? (
        <p>Wallet connected successfully!</p>
      ) : (
        <>
          <button onClick={connectWallet}>Connect Wallet</button>
          {errorMessage && <p>{errorMessage}</p>}
        </>
      )}
    </div>
  );
};

export default WalletIntegration;