const hre = require("hardhat");

async function main() {
    const contract = await hre.ethers.getContractAt(
        "NFTMarketplace",
        "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"
    );

    const tx = await contract.mintNFT(
        "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
    );

    await tx.wait();

    console.log("NFT minted");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
