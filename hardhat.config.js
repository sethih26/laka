require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "87f87041ee27ba500a0e4d83b60c21cae475f6429e39d9f876bb3beb18e53c5a";

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x` + `${PRIVATE_KEY}`],
    },
  },
};
