<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>NFT Marketplace</title>
</head>

<body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 20px;">

<h1>🖼️ NFT Marketplace (Hardhat + React + Ethereum)</h1>

<p>
Project ini adalah <b>NFT Marketplace berbasis blockchain Ethereum</b> untuk pembelajaran smart contract development.
</p>

<hr>

<h2>🧠 Teknologi yang Digunakan</h2>

<ul>
  <li>Solidity ^0.8.x</li>
  <li>Hardhat (Local Blockchain)</li>
  <li>Ethers.js v6</li>
  <li>React + Vite (Frontend)</li>
  <li>MetaMask (Wallet)</li>
  <li>OpenZeppelin ERC721</li>
</ul>

<hr>

<h2>🚀 Fitur Utama</h2>

<h3>🔗 Blockchain Features</h3>
<ul>
  <li>Mint NFT (ERC-721)</li>
  <li>List NFT dengan harga ETH</li>
  <li>Buy NFT menggunakan ETH</li>
  <li>Transfer ownership otomatis</li>
  <li>Penyimpanan listing di smart contract</li>
  <li>Hanya owner yang bisa mint NFT</li>
</ul>

<h3>💻 Frontend Features</h3>
<ul>
  <li>Connect MetaMask wallet</li>
  <li>Mint NFT</li>
  <li>List NFT ke marketplace</li>
  <li>Check listing NFT</li>
  <li>Buy NFT langsung dari UI</li>
</ul>

<hr>

<h2>🏗️ Struktur Project</h2>

<pre>
nft-marketplace/
│
├── contracts/   → Smart Contract (Hardhat)
├── scripts/     → Deploy & interaction scripts
├── frontend/    → React + Vite UI
└── README.html
</pre>

<hr>

<h2>⚙️ Cara Menjalankan Project (Local)</h2>

<h3>1. Clone Repository</h3>
<pre>
git clone https://github.com/USERNAME/nft-marketplace.git
cd nft-marketplace
</pre>

<h3>2. Install Dependencies (Smart Contract)</h3>
<pre>
cd contracts
npm install
</pre>

<h3>3. Jalankan Local Blockchain</h3>
<pre>
npx hardhat node
</pre>

<p>
Blockchain berjalan di:
<br>
<b>http://127.0.0.1:8545</b>
</p>

<h3>4. Deploy Smart Contract</h3>
<pre>
npx hardhat run scripts/deploy.js --network localhost
</pre>

<h3>5. Setup Frontend</h3>
<pre>
cd ../frontend
npm install
npm install ethers
</pre>

<h3>6. Jalankan Frontend</h3>
<pre>
npm run dev
</pre>

<p>
Frontend akan berjalan di:
<br>
<b>http://localhost:5173/</b>
</p>

<hr>

<h2>🦊 Setup MetaMask</h2>

<ul>
  <li>Network Name: Hardhat Local</li>
  <li>RPC URL: http://127.0.0.1:8545</li>
  <li>Chain ID: 31337</li>
  <li>Currency: ETH</li>
</ul>

<p><b>Import Account (Hardhat):</b></p>

<pre>
0xf39fd6e51aad88f6aB8827279cfffb92266
</pre>

<hr>

<h2>🔄 Flow Aplikasi</h2>

<ol>
  <li>Connect wallet (MetaMask)</li>
  <li>Mint NFT</li>
  <li>List NFT dengan harga ETH</li>
  <li>User lain membeli NFT</li>
  <li>Ownership berpindah otomatis</li>
</ol>

<hr>

<h2>⚠️ Catatan Penting</h2>

<ul>
  <li>Project ini hanya untuk development lokal</li>
  <li>Jangan gunakan private key di mainnet</li>
  <li>Gunakan Hardhat network untuk testing</li>
</ul>

<hr>

<h2>📌 Author</h2>

<p>
Project ini dibuat untuk pembelajaran <b>Blockchain & Smart Contract Development</b>.
</p>

<h2>Tampilan</h2>
<p>
<img width="1366" height="681" alt="image" src="https://github.com/user-attachments/assets/cf776829-689d-4433-b7fe-aa16b15a6c04" />

</p>

</body>
</html>
