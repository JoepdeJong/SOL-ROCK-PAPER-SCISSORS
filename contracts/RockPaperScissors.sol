// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract RockPaperScissors {
  enum Hand { NONE, ROCK, PAPER, SCISSORS }

  address public player1;
  address public player2;

  Hand private hand1;
  Hand private hand2;

  constructor() {
    player1 = msg.sender;
  }

  modifier isPlayer(){
    require(msg.sender == player1 || msg.sender == player2, "Caller is not in the game");
    _;
  }

  /**
   * @dev Join the game as second player
   */
  function join() public {
    require(msg.sender != player1, "Caller already in the game.");
    require(player2 == address(0), "Game is already full.");
    player2 = msg.sender;
  }

  /**
   * @dev Set the hand of the current account
   * @param hand The index of the hand. (0 = NONE, 1 = ROCK, 2 = PAPER, 3 = SCISSORS)
   */
  function setHand(Hand hand) public isPlayer {
    require(hand != Hand.NONE, "Cannot set hand to NONE");
    // TODO: check if hand is in Hand Enum.
    if(msg.sender == player1) {
      // require(hand1 == Hand.NONE, "Hand already set.");
      hand1 = hand;
    } else if(msg.sender == player2) {
      // require(hand2 == Hand.NONE, "Hand already set.");
      hand2 = hand;
    }
  }

  function getHand() public view isPlayer returns (Hand) {
    if(msg.sender == player1) return hand1;
    if(msg.sender == player2) return hand2;
    revert();
  }
}


// TODO: encrypt moves