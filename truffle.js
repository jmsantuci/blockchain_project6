const HDWalletProvider = require('truffle-hdwallet-provider');

const fs = require('fs');
const screctFile = '.secret';
var mnemonic = null;

if (fs.existsSync(screctFile)) {
  mnemonic = fs.readFileSync(screctFile).toString().trim();
}

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function() {return new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/v3/2bce7c5f9bb24a6f8a9407f0609af9f4')},
        network_id: 4,       // rinkeby's id
        gas: 4500000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000,
        skipDryRun: true
    },
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.4.24",    // Fetch exact version from solc-bin (default: truffle's version)
      docker: false,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }

};