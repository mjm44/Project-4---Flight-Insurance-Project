var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "innocent laugh never soap medal hip half vacant choose prosper possible have";

module.exports = {
  networks: {
    development: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "http://127.0.0.1:7545/",);
      },
      network_id: '5777',
      gas: 9999999,
    }
  },
  compilers: {
    solc: {
      version: "^0.4.24"
    }
  }
};
