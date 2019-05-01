
// Copyright (c) 2019 NandemoToken
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.


pragma solidity ^0.5.2;

import "github.com/OpenZeppelin/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "github.com/OpenZeppelin/openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";

contract Reiwa_Token is ERC20, ERC20Detailed {

address owner;
bool publishing;

        constructor()   ERC20Detailed("令和", "REIWA", 0) public {
            owner = msg.sender;
            publishing = true;
    }


    modifier onlyOwner{
        require(msg.sender == owner);
        _;
    }

    modifier isPublishing{
        require(publishing == true);
        _;
    }


    
       function newToken(address sendto, uint256 value)  public onlyOwner {
        _mint(sendto, value );
       }    
       
       function newToken100()  public isPublishing {
        _mint(msg.sender, 100 );
       }    
    
        function publishOff() public onlyOwner{
            publishing = false;
        }

        function publishOn() public onlyOwner{
            publishing = true;
        }
    
}
