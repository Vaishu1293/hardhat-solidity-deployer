const { ethers } = require("hardhat");
const fs = require("fs"); // Required for file operations

async function main() {
  const [deployer] = await ethers.getSigners();
  
  console.log("Deploying contracts with the account:", deployer.address);
//   target: '0xC9f252bcaB3f77EC052383D3887Db9E1227227Df',
  // Get the contract factory
  const Token = await ethers.getContractFactory("MyToken");

  // Deploy the contract and set the initial supply (1 million tokens)
  const token = await Token.deploy(1000000);  // Set initial supply

  // Log the deployed contract address
  const contractAddress = token.address || token.target;
  console.log("Token deployed to:", contractAddress);

  // Save the contract details to a JSON file
  fs.writeFileSync("deployedToken.json", JSON.stringify(token, null, 2));

  console.log("Contract details saved to deployedToken.json");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Deployment failed:", error);
    process.exit(1);
  });
