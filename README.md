# SOL-ROCK-PAPER-SCISSORS

WIP of implementing the rock paper scissors game as a solidity smart contract. Experimental project to work with payable functions.

## Update 26 January 2022
Project temporarly on hold due to complications with sending the chosen hands encrypted to the contract. It is not as straightforward as I thought it was. Thinking of letting the users send their choice encrypted to the contract, and after they both submitted let them send their decryption key to determine the winner. The problem with this is that users have to make an additional transaction to the contract, thus with additional costs, and maybe they won't share their decryption key if they already know they lost, resulting in unfinished games.
