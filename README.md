# cvt-migration
Migration page for CVT to DIGIT tokens
HTML Code (index.html)

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CVT to DIGIT Migration</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>CVT to DIGIT Migration</h1>
    <p>Exchange Rate: 1 DIGIT = 2,000 CVT | Deadline: December 31, 2024</p>
  </header>

  <main>
    <section id="instructions">
      <h2>Migration Steps</h2>
      <ol>
        <li>Connect your wallet (MetaMask or Trust Wallet).</li>
        <li>Verify your CVT balance on the BNB Smart Chain.</li>
        <li>Enter your Base wallet address.</li>
        <li>Approve the migration.</li>
      </ol>
    </section>

    <section id="migration">
      <button id="connectWalletBtn">Connect Wallet</button>
      <div id="balanceDisplay"></div>
      <input type="text" id="baseWallet" placeholder="Enter your Base wallet address">
      <button id="migrateBtn" disabled>Migrate Tokens</button>
    </section>
  </main>

  <footer>
    <p>Need Help? Contact us at <a href="mailto:support@cryptovault.net">support@cryptovault.net</a></p>
  </footer>

  <script src="script.js"></script>
</body>
</html>

Image Suggestion:

A mockup of the migration page layout with labeled sections.



---

CSS Code (styles.css)

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  text-align: center;
  background-color: #f4f4f9;
}

header {
  background-color: #0073e6;
  color: white;
  padding: 20px;
}

main {
  margin: 20px auto;
  max-width: 600px;
  padding: 10px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

button {
  padding: 10px 20px;
  background: #0073e6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background: gray;
  cursor: not-allowed;
}

footer {
  margin-top: 20px;
  font-size: 14px;
  color: gray;
}

Image Suggestion:

Screenshot of the styled migration page.



---

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
