// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract nft is Ownable, ERC721 {
    uint private tokenID=0;
    using Strings for uint256; 

    mapping(uint256 => string) private _tokenURIs;
    mapping(uint256 =>address) private ownership;
    mapping(uint256=>bool) private valid;
    constructor()  ERC721("nft", "A") {}



    function _setTokenURI(uint256 tokenId, string memory _tokenURI)
        internal
        virtual
    {
        
        _tokenURIs[tokenId] = _tokenURI;
    }

    

    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        
        if(valid[tokenId]==true)
        {
            string memory _tokenURI = _tokenURIs[tokenId];
            return _tokenURI;
        }
        else{
            return "none";

        }
        
        
    }

    function claimItem(string memory tokenURIs) public returns (uint256) {
        
        uint256 newItemId = tokenID++;
        _safeMint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURIs);
        ownership[newItemId]=msg.sender;
        valid[newItemId]= true;
        return newItemId;
    }


    function burn(uint256 tokenid) public {
        require(valid[tokenid]==true && msg.sender==ownership[tokenid]);
        {
            ownership[tokenid]=address(0);
            valid[tokenid]=false;
        }
    }
}