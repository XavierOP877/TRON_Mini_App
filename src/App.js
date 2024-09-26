import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const contractAddress = 'TY5sn2NZnFzQ9q2EfGQq5EveL1gcVsnq7Z'; // Replace with the deployed contract address

  // Connect the TronLink Wallet
  const connectWallet = async () => {
    if (window.tronLink) {
      try {
        await window.tronLink.request({ method: 'tron_requestAccounts' });
        if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
          const address = window.tronWeb.defaultAddress.base58;
          setWalletAddress(address);
          setIsWalletConnected(true);
          console.log("Wallet connected:", address);
        } else {
          alert('TronLink is installed, but the wallet is not connected!');
        }
      } catch (error) {
        console.error('Connection to TronLink was rejected:', error);
      }
    } else {
      alert('Please install TronLink Wallet!');
    }
  };

  // Send TRC20 tokens using the contract address directly
  const sendTokens = async () => {
    if (!window.tronWeb.isAddress(recipientAddress)) {
      alert('Invalid recipient address.');
      return;
    }

    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      alert('Please enter a valid amount.');
      return;
    }

    try {
      const decimals = 6; // Adjust according to the token's decimals
      const amountInSun = (amount * Math.pow(10, decimals)).toString();

      // Connect to the deployed contract
      const contract = await window.tronWeb.contract().at(contractAddress);

      // Call the transfer function in the TRC20 contract
      const transaction = await contract.transfer(recipientAddress, amountInSun).send();

      console.log('Transaction successful:', transaction);
      alert('Tokens transferred successfully!');
    } catch (error) {
      console.error('Transfer failed:', error);
      alert(`Transfer failed: ${error.message || 'Unknown error'}`);
    }
  };

  return (
    <div className="App">
      <div className="container">
        {!isWalletConnected ? (
          <button className="connect-btn" onClick={connectWallet}>
            Connect Wallet
          </button>
        ) : (
          <div>
            <p>Wallet Connected: {walletAddress}</p>
            <div className="input-container">
              <input
                type="text"
                placeholder="Recipient Address"
                value={recipientAddress}
                onChange={(e) => setRecipientAddress(e.target.value)}
              />
              <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <button className="send-btn" onClick={sendTokens}>
                Send Tokens
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
