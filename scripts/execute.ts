import { ethers, network } from "hardhat"
import {
  FUNC,
  NEW_STORE_VALUE,
  PROPOSAL_DESCRIPTION,
  MIN_DELAY,
  developmentChains,
} from "../helper-hardhat-config"

export async function execute() {
  const args = [NEW_STORE_VALUE]
  const functionToCall = FUNC
  const box = await ethers.getContract("Box")
  const encodedFunctionCall = box.interface.encodeFunctionData(functionToCall, args)
  const descriptionHash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(PROPOSAL_DESCRIPTION))
  // could also use ethers.utils.id(PROPOSAL_DESCRIPTION)

  const governor = await ethers.getContract("GovernorContract")

  console.log("Executing...")
  // this will fail on a testnet because you need to wait for the MIN_DELAY!
  const executeTx = await governor.execute(
    [box.address],
    [0],
    [encodedFunctionCall],
    descriptionHash
  )
  await executeTx.wait(1)
  console.log(`Box value: ${await box.retrieve()}`)
}

execute()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })