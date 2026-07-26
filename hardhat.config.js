/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle")
const ALCHEMY_API_KEY="";
const ROPSTEN_PROVATE_KEY="";
module.exports = {
  solidity: "0.8.28",

  networks:{
    ropsten:{
      url:`https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts:[`${ROPSTEN_PRIVATE_KEY}`]
    }
  }
};
