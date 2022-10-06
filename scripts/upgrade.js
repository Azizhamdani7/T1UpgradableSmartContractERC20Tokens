const {ethers, upgrades} = require("hardhat");

async function main(){

    const ERC20TokenV2 = await ethers.getContractFactory("ERC20TokenV2")
    console.log("contract is upgrading...");
    await upgrades.upgradeProxy("0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512", ERC20TokenV2);
    console.log("ERC20Contract version 1 has been updated to ERC20 contract V2");

}
main().then(() => process.exit(0)).catch(error => {console.error(error),process.exit(1)})