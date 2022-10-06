

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const ERC20TOKEN = await ethers.getContractFactory("ERC20Token");
  console.log("Deploying ERC20Token version 1");
  const instance = await upgrades.deployProxy(ERC20TOKEN, {kind: 'uups'});
  
  await instance.deployed();

  console.log("ERC20Token deployed at: ", instance.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });