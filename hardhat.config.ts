import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";
import "@nomiclabs/hardhat-ethers";
import "@typechain/hardhat";


const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {
      chainId: 31337
    },
    localhost: {
      chainId: 31337
    },
    goerli: {
      chainId: 5,
      url: 'https://goerli.infura.io/v3/xxxxxxxxxx', //<---- YOUR INFURA ID! (or it won't work)
      accounts: ['xxxxxxxx'],  //<---- YOUR private key! (or it won't work)
      gasPrice: 5500000000
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    }
  }
};

export default config;
