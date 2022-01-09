
const RockPaperScissorsContract = artifacts.require("RockPaperScissors.sol");
module.exports = function (deployer) {
  deployer.deploy(RockPaperScissorsContract);
};
