// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleVote {
    mapping(address => bool) public hasVoted;
    uint public yesVotes;
    uint public noVotes;

    function vote(bool _choice) external {
        require(!hasVoted[msg.sender], "Already voted");
        hasVoted[msg.sender] = true;
        _choice ? yesVotes++ : noVotes++;
    }
}
