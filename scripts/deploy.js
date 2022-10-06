const {ethers, upgrades} = require("hardhat");

async function main(){

  const ERC20Token = await ethers.getContractFactory("ERC20Token");
  console.log("Deploying ERC20Token version 1");
  const instance = await upgrades.deployProxy(ERC20Token, {kind: 'uups'});
  
  await instance.deployed();

  console.log("ERC20Token deployed at: ", instance.address);

}
main();