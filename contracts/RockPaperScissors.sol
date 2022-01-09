// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract RockPaperScissors {
  // enum Hands { ROCK, PAPER, SCISSORS }

  address public player1;
  address public player2;

  constructor() {
    player1 = msg.sender;
  }

  function join() public {
    require(msg.sender != player1, "Caller already in the game.");
    require(player2 == address(0), "Game is already full.");
    player2 = msg.sender;
  }
}


// TODO: encrypt moves