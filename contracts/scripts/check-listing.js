const hre = require("hardhat");

async function main() {
    const contract = await hre.ethers.getContractAt(
        "NFTMarketplace",
        "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"
    );

    const listing = await contract.getListing(0);

    console.log("Seller:", listing[0]);
    console.log(
        "Price:",
        hre.ethers.formatEther(listing[1]),
        "ETH"
    );
    console.log("Active:", listing[2]);
}

main().catch(console.error);
