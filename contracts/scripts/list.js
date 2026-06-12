const hre = require("hardhat");

async function main() {
    const contract = await hre.ethers.getContractAt(
        "NFTMarketplace",
        "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"
    );

    const tx = await contract.listNFT(
        0,
        hre.ethers.parseEther("1")
    );

    await tx.wait();

    console.log("NFT listed for 1 ETH");
}

main().catch(console.error);
