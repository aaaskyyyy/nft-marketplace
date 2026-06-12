import { useState } from "react";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS, ABI } from "./contract";

function App() {
  const [account, setAccount] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [price, setPrice] = useState("");
  const [mintTo, setMintTo] = useState("");

  // =====================
  // CONNECT WALLET
  // =====================
  async function connectWallet() {
    try {
      if (!window.ethereum) {
        alert("MetaMask tidak ditemukan");
        return;
      }

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
    } catch (err) {
      console.error(err);
      alert("Gagal connect wallet");
    }
  }

  // =====================
  // MINT NFT
  // =====================
  async function mintNFT() {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        ABI,
        signer
      );

      const tx = await contract.mintNFT(mintTo);
      await tx.wait();

      alert("NFT Minted!");
    } catch (err) {
      console.error(err);
      alert("Mint gagal");
    }
  }

  // =====================
  // LIST NFT
  // =====================
  async function listNFT() {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        ABI,
        signer
      );

      const tx = await contract.listNFT(
        tokenId,
        ethers.parseEther(price)
      );

      await tx.wait();

      alert("NFT Listed!");
    } catch (err) {
      console.error(err);
      alert("Gagal list NFT");
    }
  }

  // =====================
  // CHECK LISTING
  // =====================
  async function checkListing() {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);

      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        ABI,
        provider
      );

      const listing = await contract.getListing(tokenId);

      alert(
        `Seller: ${listing[0]}
Price: ${ethers.formatEther(listing[1])} ETH
Active: ${listing[2]}`
      );
    } catch (err) {
      console.error(err);
      alert("Gagal cek listing");
    }
  }

  // =====================
  // BUY NFT
  // =====================
  async function buyNFT() {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        ABI,
        signer
      );

      const listing = await contract.getListing(tokenId);

      if (!listing[2]) {
        alert("NFT tidak aktif / tidak ter-list");
        return;
      }

      const tx = await contract.buyNFT(tokenId, {
        value: listing[1],
      });

      await tx.wait();

      alert("NFT berhasil dibeli!");
    } catch (err) {
      console.error(err);
      alert("Gagal beli NFT");
    }
  }

  // =====================
  // UI
  // =====================
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>NFT Marketplace</h1>

      {/* CONNECT WALLET */}
      <button onClick={connectWallet}>
        Connect Wallet
      </button>

      <p><b>Account:</b> {account}</p>

      <hr />

      {/* MINT */}
      <h3>Mint NFT</h3>
      <input
        placeholder="Mint To Address"
        value={mintTo}
        onChange={(e) => setMintTo(e.target.value)}
      />
      <br /><br />
      <button onClick={mintNFT}>
        Mint NFT
      </button>

      <hr />

      {/* LIST */}
      <h3>List NFT</h3>
      <input
        placeholder="Token ID"
        value={tokenId}
        onChange={(e) => setTokenId(e.target.value)}
      />
      <br /><br />
      <input
        placeholder="Price (ETH)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br /><br />
      <button onClick={listNFT}>
        List NFT
      </button>

      <hr />

      {/* BUY */}
      <h3>Buy NFT</h3>
      <input
        placeholder="Token ID"
        value={tokenId}
        onChange={(e) => setTokenId(e.target.value)}
      />
      <br /><br />
      <button onClick={buyNFT}>
        Buy NFT
      </button>

      <hr />

      {/* CHECK */}
      <h3>Check Listing</h3>
      <input
        placeholder="Token ID"
        value={tokenId}
        onChange={(e) => setTokenId(e.target.value)}
      />
      <br /><br />
      <button onClick={checkListing}>
        Check Listing
      </button>
    </div>
  );
}

export default App;
