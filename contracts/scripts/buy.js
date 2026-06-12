const hre = require("hardhat");

async function main() {

    const buyer =
        await hre.ethers.getSigner(
            "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
        );

    const contract =
        await hre.ethers.getContractAt(
            "NFTMarketplace",
            "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
            buyer
        );

    const tx =
        await contract.buyNFT(
            0,
            {
                value:
                    hre.ethers.parseEther("1")
            }
        );

    await tx.wait();

    console.log("NFT purchased");
}

main().catch(console.error);
