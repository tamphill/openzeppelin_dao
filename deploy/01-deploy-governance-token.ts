import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import { HardhatUserConfig } from "hardhat/config"
import { ethers } from "hardhat";

const deployGovernanceToken: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    // @ts-ignore

    const { getNamedAccounts, deployments, network } = hre;
    const {deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();

    log("deploying governance token");
    const governanceToken = await deploy("GovernanceToken", {
      from: deployer,
      args: [],
      log: true,
      // wait for confirm
    });
    // auto verify
    console.log("deployed governance token to address",governanceToken.address);
    await delegate(governanceToken.address, deployer);

  }

  const delegate = async (governanceTokenAddress: string, delegatedAccount: string) => {
    const governanceToken = await ethers.getContractAt("GovernanceToken", governanceTokenAddress)
    const transactionResponse = await governanceToken.delegate(delegatedAccount)
    await transactionResponse.wait(1)
    console.log(`Checkpoints: ${await governanceToken.numCheckpoints(delegatedAccount)}`)
  }
  

  export default deployGovernanceToken;