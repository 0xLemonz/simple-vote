const hre = require("hardhat");

async function main() {
  const SimpleVote = await hre.ethers.getContractFactory("SimpleVote");
  const simpleVote = await SimpleVote.deploy();

  console.log("Contract deployed to:", await simpleVote.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
