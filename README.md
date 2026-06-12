Berikut versi **README.md yang sudah diformat rapi (GitHub-ready)** dengan Markdown yang lebih bersih, terstruktur, dan enak dibaca 👇

---

```markdown
# 🖼️ NFT Marketplace (Hardhat + React + Ethereum)

Project ini adalah **NFT Marketplace sederhana berbasis blockchain Ethereum** yang dibuat menggunakan:

- Solidity (Smart Contract)
- Hardhat (Development environment)
- Ethers.js (Blockchain interaction)
- React + Vite (Frontend UI)
- MetaMask (Wallet connection)

---

# 🚀 Fitur Utama

## 🔗 Blockchain Features
- Mint NFT (ERC-721)
- List NFT ke marketplace dengan harga ETH
- Beli NFT menggunakan ETH
- Transfer ownership otomatis setelah pembelian
- Penyimpanan listing NFT di smart contract
- Sistem owner-based minting (hanya owner bisa mint NFT)

---

## 💻 Frontend Features
- Connect MetaMask wallet
- Mint NFT ke address tertentu
- List NFT ke marketplace
- Cek listing NFT (seller, price, status)
- Buy NFT langsung dari UI

---

# 🏗️ Struktur Project

```

nft-marketplace/
│
├── contracts/        # Smart Contract (Hardhat)
├── scripts/          # Deploy & interaction scripts
├── frontend/         # React + Vite frontend
└── README.md

````

---

# 📦 Smart Contract

## 📜 NFTMarketplace.sol

Smart contract ini memiliki fitur utama:

### 1. Mint NFT
Hanya owner contract yang bisa mint NFT:

```solidity
function mintNFT(address recipient) public onlyOwner returns (uint256);
````

---

### 2. List NFT

NFT dapat dipasang harga untuk dijual:

```solidity
function listNFT(uint256 tokenId, uint256 price);
```

---

### 3. Buy NFT

Pengguna dapat membeli NFT dengan ETH:

```solidity
function buyNFT(uint256 tokenId) public payable;
```

---

### 4. Check Listing

Melihat detail listing NFT:

```solidity
function getListing(uint256 tokenId)
```

---

# ⚙️ Cara Menjalankan Project (Local)

## 1. Clone Repository

```bash
git clone https://github.com/USERNAME/nft-marketplace.git
cd nft-marketplace
```

---

## 2. Install Dependencies (Smart Contract)

```bash
cd contracts
npm install
```

---

## 3. Jalankan Local Blockchain

```bash
npx hardhat node
```

Blockchain akan berjalan di:

```
http://127.0.0.1:8545
```

---

## 4. Deploy Smart Contract

Buka terminal baru:

```bash
npx hardhat run scripts/deploy.js --network localhost
```

Simpan address contract yang muncul.

---

## 5. Setup Frontend

```bash
cd ../frontend
npm install
npm install ethers
```

---

## 6. Jalankan Frontend

```bash
npm run dev
```

Akses:

```
http://localhost:5173
```

---

# 🦊 Setup MetaMask

Tambahkan network baru:

* Network Name: Hardhat Local
* RPC URL: [http://127.0.0.1:8545](http://127.0.0.1:8545)
* Chain ID: 31337
* Currency Symbol: ETH

Import salah satu akun Hardhat:

```
0xf39fd6e51aad88f6f4ce6aB8827279cfffb92266
```

---

# 🔄 Flow Aplikasi

1. Connect wallet (MetaMask)
2. Mint NFT (owner)
3. List NFT dengan harga ETH
4. User lain membeli NFT
5. Ownership berpindah otomatis
6. Listing menjadi inactive

---

# ⚠️ Catatan Penting

* Ini adalah project **development / lokal**
* Jangan gunakan private key Hardhat di mainnet
* Gunakan hanya untuk belajar blockchain

---

# 🧠 Teknologi

* Solidity ^0.8.x
* Hardhat
* Ethers.js v6
* React + Vite
* OpenZeppelin ERC721

---

# 📌 Author

Project ini dibuat untuk pembelajaran **Blockchain & Smart Contract Development**

```

---

## 🔥 Hasilnya nanti di GitHub:
- rapi seperti dokumentasi profesional
- ada heading + code block yang benar
- mudah dibaca teman kelompok
- terlihat seperti project startup Web3

---

Kalau kamu mau, aku bisa bantu upgrade lagi:
- :contentReference[oaicite:0]{index=0}
- :contentReference[oaicite:1]{index=1}
- atau :contentReference[oaicite:2]{index=2}
```
