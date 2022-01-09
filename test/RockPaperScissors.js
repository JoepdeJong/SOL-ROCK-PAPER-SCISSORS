// to interact with the contract
const RockPaperScissors = artifacts.require("RockPaperScissors");
 
contract('RockPaperScissors', (accounts) => {
  const catchRevert = require("./exceptions.js").catchRevert;

  // initialise the contract instance before running tests
  let contractInstance = null;
  before(async () => {
    contractInstance = await RockPaperScissors.deployed();
  })

  it('Player 1 address', async() => {
    const player1 = await contractInstance.player1.call();
    console.log(player1);
    assert.equal(accounts[0], player1);

  })

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

});