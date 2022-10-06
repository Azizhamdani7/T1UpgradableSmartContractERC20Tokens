// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

contract ERC20TokenV2 is Initializable, ERC20Upgradeable, OwnableUpgradeable, UUPSUpgradeable {

    mapping(address => bool) public authorized;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    modifier ownerOrAuthorized() {
        require(authorized[msg.sender] || owner() == msg.sender);
        _;
    }

    function addAuthorized(address _toAdd) onlyOwner public {
        require(_toAdd != address(0));
        authorized[_toAdd] = true;
    }

    function removeAuthorized(address _toRemove) onlyOwner public {
        require(_toRemove != address(0));
        require(_toRemove != msg.sender);
        authorized[_toRemove] = false;
    }

    function initialize() initializer public {
        __ERC20_init("ERC20Token", "MTK");
        __Ownable_init();
        __UUPSUpgradeable_init();

        _mint(msg.sender, 100000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public ownerOrAuthorized {
        _mint(to, amount);
    }


    function _authorizeUpgrade(address newImplementation)
        internal
        ownerOrAuthorized
        override
    {}

    function add2Numbers(uint _number1 , uint _number2)  public ownerOrAuthorized view returns(uint){
        return _number1 + _number2;
    }

    function multiply2Numbers(uint _number1 , uint _number2) public ownerOrAuthorized view returns(uint){
        return _number1 * _number2;
    }

    
}