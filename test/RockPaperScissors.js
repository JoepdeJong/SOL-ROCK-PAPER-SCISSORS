// to interact with the contract
const RockPaperScissors = artifacts.require("RockPaperScissors");
 
contract('RockPaperScissors', (accounts) => {
  const Hand = {NONE: 0, ROCK: 1, PAPER: 2, SCISSORS: 3}

  const catchRevert = require("./exceptions.js").catchRevert;

  // initialise the contract instance before running tests
  let contractInstance = null;
  before(async () => {
    contractInstance = await RockPaperScissors.deployed();
  })

  describe('Player 1 address', async() => {
    it('Check if player1 is contract sender', async() => {
      const player1 = await contractInstance.player1.call();
      assert.equal(accounts[0], player1);

    })
  });

  describe('Player 2 address', async() => {

    it("Expect revert when player1 tries to join again", async function() {
      await catchRevert(contractInstance.join());
    })

    it("Successfully join the game", async function() {
      await contractInstance.join({from: accounts[1]});
      const player2 = await contractInstance.player2.call();
      assert.equal(accounts[1], player2);
    })

    it("Expect revert when game is full", async function() {
      await catchRevert(contractInstance.join({from: accounts[1]}));
    })

  })

  describe('Player 1 hand', async() => {
    it('Set hand to rock', async() => {
      await contractInstance.setHand(Hand.ROCK);
      const hand1 = await contractInstance.getHand();
      assert.equal(hand1, Hand.ROCK)
    })

    it('Set hand to paper', async() => {
      await contractInstance.setHand(Hand.PAPER);
      const hand1 = await contractInstance.getHand();
      assert.equal(hand1, Hand.PAPER)
    })

    it('Set hand to scissors', async() => {
      await contractInstance.setHand(Hand.SCISSORS);
      const hand1 = await contractInstance.getHand();
      assert.equal(hand1, Hand.SCISSORS)
    })
  });

  describe('Player 2 hand', async() => {
    it('Set hand to rock', async() => {
      await contractInstance.setHand(Hand.ROCK, {from: accounts[1]});
      const hand1 = await contractInstance.getHand({from: accounts[1]});
      assert.equal(hand1, Hand.ROCK)
    })

    it('Set hand to paper', async() => {
      await contractInstance.setHand(Hand.PAPER, {from: accounts[1]});
      const hand1 = await contractInstance.getHand({from: accounts[1]});
      assert.equal(hand1, Hand.PAPER)
    })

    it('Set hand to scissors', async() => {
      await contractInstance.setHand(Hand.SCISSORS, {from: accounts[1]});
      const hand1 = await contractInstance.getHand({from: accounts[1]});
      assert.equal(hand1, Hand.SCISSORS)
    })
  });

  describe('Player 3 hand', async() => {
    it('Expect revert when player 3 tries to set hand', async() => {
      await catchRevert(contractInstance.setHand(Hand.ROCK, {from: accounts[2]}));
    })

    it('Expect revert when player 3 tries to get hand', async() => {
      await catchRevert(contractInstance.getHand({from: accounts[2]}));
    })
  });

});