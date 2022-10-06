require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");

/** @type import('hardhat/config').HardhatUserConfig */

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL
const PRIVATE_KEY = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"

module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts:[PRIVATE_KEY]
    } 
  },
  solidity: "0.8.17",
};
