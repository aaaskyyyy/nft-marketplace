<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>NFT Marketplace</title>
</head>

<body style="font-family: Arial, sans-serif; line-height: 1.6;">

<h1>🖼️ NFT Marketplace (Hardhat + React + Ethereum)</h1>

<p>
Project ini adalah <b>NFT Marketplace sederhana berbasis blockchain Ethereum</b> menggunakan:
</p>

<ul>
  <li>Solidity (Smart Contract)</li>
  <li>Hardhat (Development Environment)</li>
  <li>Ethers.js (Blockchain Interaction)</li>
  <li>React + Vite (Frontend)</li>
  <li>MetaMask (Wallet Connection)</li>
</ul>

<hr>

<h2>🚀 Fitur Utama</h2>

<h3>🔗 Blockchain Features</h3>
<ul>
  <li>Mint NFT (ERC-721)</li>
  <li>List NFT dengan harga ETH</li>
  <li>Beli NFT menggunakan ETH</li>
  <li>Transfer ownership otomatis</li>
  <li>Penyimpanan listing di smart contract</li>
  <li>Owner-only minting system</li>
</ul>

<h3>💻 Frontend Features</h3>
<ul>
  <li>Connect MetaMask wallet</li>
  <li>Mint NFT</li>
  <li>List NFT ke marketplace</li>
  <li>Cek listing NFT</li>
  <li>Buy NFT langsung dari UI</li>
</ul>

<hr>

<h2>🏗️ Struktur Project</h2>

<pre>
nft-marketplace/
│
├── contracts/   Smart Contract (Hardhat)
├── scripts/     Deploy & interaction scripts
├── frontend/    React + Vite UI
└── README.html
</pre>

<hr>

<h2>📦 Smart Contract</h2>

<h3>NFTMarketplace.sol</h3>

<h4>1. Mint NFT</h4>
<pre>
function mintNFT(address recipient) public onlyOwner returns (uint256);
</pre>

<h4>2. List NFT</h4>
<pre>
function listNFT(uint256 tokenId, uint256 price);
</pre>

<h4>3. Buy NFT</h4>
<pre>
function buyNFT(uint256 tokenId) public payable;
</pre>

<h4>4. Get Listing</h4>
<pre>
function getListing(uint256 tokenId);
</pre>

<hr>

<h2>⚙️ Cara Menjalankan Project</h2>

<h3>1. Clone Repository</h3>
<pre>
git clone https://github.com/USERNAME/nft-marketplace.git
cd nft-marketplace
</pre>

<h3>2. Install Dependencies</h3>
<pre>
cd contracts
npm install
</pre>

<h3>3. Jalankan Blockchain Lokal</h3>
<pre>
npx hardhat node
</pre>

<p>RPC: http://127.0.0.1:8545</p>

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

<p>Frontend: http://localhost:5173</p>

<hr>

<h2>🦊 MetaMask Setup</h2>

<ul>
  <li>Network: Hardhat Local</li>
  <li>RPC: http://127.0.0.1:8545</li>
  <li>Chain ID: 31337</li>
</ul>

<p><b>Import account:</b></p>

<pre>
0xf39fd6e51aad88f6aB8827279cfffb92266
</pre>

<hr>

<h2>🔄 Flow Aplikasi</h2>

<ol>
  <li>Connect wallet</li>
  <li>Mint NFT</li>
  <li>List NFT</li>
  <li>Buy NFT</li>
  <li>Ownership berpindah</li>
</ol>

<hr>

<h2>⚠️ Catatan Penting</h2>

<ul>
  <li>Hanya untuk development lokal</li>
  <li>Jangan pakai private key di mainnet</li>
</ul>

<hr>

<h2>🧠 Teknologi</h2>

<ul>
  <li>Solidity 0.8.x</li>
  <li>Hardhat</li>
  <li>Ethers.js v6</li>
  <li>React + Vite</li>
</ul>

<hr>

<h2>📌 Author</h2>
<p>Project ini dibuat untuk pembelajaran Blockchain Development.</p>

</body>
</html>
