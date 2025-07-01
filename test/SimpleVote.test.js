const { expect } = require("chai");

describe("SimpleVote", function() {
  it("Should count yes votes", async function() {
    const SimpleVote = await ethers.getContractFactory("SimpleVote");
    const contract = await SimpleVote.deploy();
    await contract.vote(true);
    expect(await contract.yesVotes()).to.equal(1);
  });

  it("Should prevent double voting", async function() {
    const SimpleVote = await ethers.getContractFactory("SimpleVote");
    const contract = await SimpleVote.deploy();
    await contract.vote(false);
    await expect(contract.vote(true)).to.be.revertedWith("Already voted");
  });
});
