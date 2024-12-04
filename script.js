JavaScript Code (script.js)

document.getElementById('connectWalletBtn').addEventListener('click', async () => {
  if (typeof window.ethereum !== 'undefined') {
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const walletAddress = accounts[0];
      document.getElementById('balanceDisplay').innerText = `Connected Wallet: ${walletAddress}`;
      document.getElementById('migrateBtn').disabled = false;
    } catch (error) {
      alert('Error connecting wallet. Please try again.');
    }
  } else {
    alert('Please install MetaMask to use this feature.');
  }
});

document.getElementById('migrateBtn').addEventListener('click', () => {
  const baseWallet = document.getElementById('baseWallet').value;
  if (baseWallet) {
    alert('Migration Successful! Your DIGIT tokens will appear in your Base wallet soon.');
  } else {
    alert('Please enter a valid Base wallet address.');
  }
});
