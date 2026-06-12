export const CONTRACT_ADDRESS =
  "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";

export const ABI = [
  "function mintNFT(address recipient) public returns(uint256)",

  "function listNFT(uint256 tokenId,uint256 price) public",

  "function buyNFT(uint256 tokenId) public payable",

  "function getListing(uint256 tokenId) public view returns(address,uint256,bool)",

  "function ownerOf(uint256 tokenId) public view returns(address)"
];
