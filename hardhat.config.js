
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.27",
      },
      {
        version: "0.8.20",
      },
      {
        version: "0.8.18",  // Keep this version if needed for backward compatibility.
      },
    ],
  },
  networks: {
    // Correct configuration for Sepolia
    sepolia: {
      url: `https://fd581decbce1466882eb8604654c7e4f:U442Etxjr5MORI3pppx2l5NA4AGGrIOOM5Pn2+D471vglHriXuUPEA@sepolia.infura.io/v3/fd581decbce1466882eb8604654c7e4f`, // Infura project URL for Sepolia
      accounts: [`0x3bc88885a8f211b26a3bf0602a99d7a4db903501a7b8e5789d5dd80d77e4d244`], // Your private key
    },
    // Correct configuration for Rinkeby
    rinkeby: {
      url: `https://fd581decbce1466882eb8604654c7e4f:U442Etxjr5MORI3pppx2l5NA4AGGrIOOM5Pn2+D471vglHriXuUPEA@rinkeby.infura.io/v3/fd581decbce1466882eb8604654c7e4f`,
      accounts: [`0x3bc88885a8f211b26a3bf0602a99d7a4db903501a7b8e5789d5dd80d77e4d244`], // Your private key
    },
  },
  etherscan: {
    apiKey: 'QZ4Z2M23MYV8HNVNG556ETRTF6NU2RQDIZ'
  }, // Add your Etherscan API key here
};





