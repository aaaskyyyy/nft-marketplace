const hre = require("hardhat");

async function main() {
    const contract = await hre.ethers.getContractAt(
        "NFTMarketplace",
        "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"
    );

    const owner = await contract.ownerOf(0);

    console.log("Owner:", owner);
}

main().catch(console.error);
