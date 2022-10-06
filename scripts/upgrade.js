const {ethers, upgrades} = require("hardhat");

async function main(){

    const ERC20TokenV2 = await ethers.getContractFactory("ERC20TokenV2")
    console.log("contract is upgrading...");
    await upgrades.upgradeProxy("0xC1D2CC1ED70E83a6A5Fd4866A4D019a896a21678", ERC20TokenV2);
    console.log("ERC20Contract version 1 has been updated to ERC20 contract V2");

}
main().then(() => process.exit(0)).catch(error => {console.error(error),process.exit(1)})