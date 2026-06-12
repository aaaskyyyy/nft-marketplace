// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTMarketplace is ERC721, Ownable {

    uint256 private _nextTokenId;

    struct Listing {
        address seller;
        uint256 price;
        bool active;
    }

    mapping(uint256 => Listing) public listings;

    constructor()
        ERC721("NFT Marketplace", "NFTM")
        Ownable(msg.sender)
    {}

    function mintNFT(address recipient)
        public
        onlyOwner
        returns (uint256)
    {
        uint256 tokenId = _nextTokenId++;

        _safeMint(recipient, tokenId);

        return tokenId;
    }

    function listNFT(
        uint256 tokenId,
        uint256 price
    ) public {

        require(ownerOf(tokenId) == msg.sender,
            "Not NFT owner");

        require(price > 0,
            "Price must be greater than zero");

        listings[tokenId] = Listing({
            seller: msg.sender,
            price: price,
            active: true
        });
    }

    function buyNFT(
        uint256 tokenId
    ) public payable {

        Listing memory item =
            listings[tokenId];

        require(item.active,
            "NFT not listed");

        require(
            msg.value >= item.price,
            "Insufficient payment"
        );

        address seller =
            item.seller;

        listings[tokenId].active = false;

        _transfer(
            seller,
            msg.sender,
            tokenId
        );

        payable(seller)
            .transfer(msg.value);
    }

    function cancelListing(
        uint256 tokenId
    ) public {

        require(
            listings[tokenId].seller
                == msg.sender,
            "Not seller"
        );

        listings[tokenId].active = false;
    }

    function getListing(
        uint256 tokenId
    )
        public
        view
        returns (
            address seller,
            uint256 price,
            bool active
        )
    {
        Listing memory item =
            listings[tokenId];

        return (
            item.seller,
            item.price,
            item.active
        );
    }
}
