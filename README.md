🖼️ NFT Marketplace (Hardhat + React + Ethereum)

Project ini adalah NFT Marketplace sederhana berbasis blockchain Ethereum yang dibuat menggunakan:

Solidity (Smart Contract)
Hardhat (Development environment)
Ethers.js (Frontend blockchain interaction)
React + Vite (Frontend UI)
MetaMask (Wallet connection)
🚀 Fitur Utama
🔗 Blockchain Features
Mint NFT (ERC-721)
List NFT ke marketplace dengan harga ETH
Beli NFT menggunakan ETH
Transfer ownership otomatis setelah pembelian
Penyimpanan listing NFT di smart contract
Sistem owner-based minting (hanya owner bisa mint NFT)
💻 Frontend Features
Connect MetaMask wallet
Mint NFT ke address tertentu
List NFT ke marketplace
Cek listing NFT (seller, price, status)
Buy NFT langsung dari UI
🏗️ Struktur Project
nft-marketplace/
│
├── contracts/        # Smart contract (Hardhat)
├── scripts/          # Deploy & interaction scripts
├── frontend/         # React + Vite frontend
└── README.md
📦 Smart Contract
📜 NFTMarketplace.sol

Fitur utama contract:

1. Mint NFT

Hanya owner contract yang bisa mint NFT:

function mintNFT(address recipient) public onlyOwner returns (uint256)
2. List NFT

NFT bisa dipasang harga:

function listNFT(uint256 tokenId, uint256 price)
3. Buy NFT

User bisa membeli NFT dengan ETH:

function buyNFT(uint256 tokenId) public payable
4. Check Listing

Melihat detail NFT:

function getListing(uint256 tokenId)
⚙️ Cara Menjalankan Project (Local)
1. Clone Repository
git clone https://github.com/USERNAME/nft-marketplace.git
cd nft-marketplace
2. Install Dependencies (Contracts)
cd contracts
npm install
3. Jalankan Local Blockchain (Hardhat)

Terminal 1:

npx hardhat node

Ini akan menjalankan blockchain lokal di:

http://127.0.0.1:8545
4. Deploy Smart Contract

Terminal 2:

npx hardhat run scripts/deploy.js --network localhost

Simpan alamat contract yang muncul.

5. Setup Frontend
cd ../frontend
npm install
npm install ethers
6. Jalankan Frontend
npm run dev

Frontend akan berjalan di:

http://localhost:5173
🦊 Setup MetaMask

Tambahkan network:

Network Name: Hardhat Local
RPC URL: http://127.0.0.1:8545
Chain ID: 31337
Currency: ETH

Import salah satu private key dari Hardhat node:

0xf39fd6e51aad88f6f4ce6aB8827279cfffb92266
🔄 Flow Aplikasi
Connect wallet (MetaMask)
Mint NFT (oleh owner)
List NFT dengan harga ETH
User lain membeli NFT
Ownership berpindah otomatis
Listing menjadi inactive
⚠️ Catatan Penting
Ini project lokal (development only), bukan mainnet
Gunakan Hardhat node untuk testing
Jangan gunakan private key ini di jaringan asli
🧠 Teknologi yang Dipakai
Solidity ^0.8.x
Hardhat
Ethers.js v6
React + Vite
OpenZeppelin ERC721
📌 Author

Project NFT Marketplace ini dibuat untuk pembelajaran blockchain development.

