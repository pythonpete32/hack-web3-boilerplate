import { ethers } from "hardhat";
import { DAOFactory__factory } from "@aragon/core-contracts-ethers";
import { DAOSettings, PluginSettings } from "../types";
import {
  random,
  addresses,
  parseNewDAOTx,
  encodeERC20VotingSetup,
} from "../lib";

// Constants
const BN = ethers.BigNumber.from;
const FIVE_PERCENT = BN(5n * 10n ** 15n);
const FIFTY_PERCENT = BN(50n * 10n ** 15n);
const ONE_WEEK = BN(60 * 60 * 24 * 7);

// Addresses
const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
const ERC20VotingSetup = "0xE75B0C19495CbA675e45Cb662D60429dee4de344";
const ERC20VotingRepo = "0xA76b0ED4CDefD43aC6b213E957d5Be6526498Fdf";

async function main() {
  const signer = (await ethers.getSigners())[0];

  // 1. Connect to the DAOFactory
  const daoFactory = DAOFactory__factory.connect(addresses.DAOFactory, signer);

  // 2. Settings for the new DAO, we are omitting the `trustedForwarder` setting
  const daoSettings: DAOSettings = {
    trustedForwarder: ZERO_ADDRESS,
    name: "Test DAO" + random(),
    metadata: "0x00",
  };

  // 3. Settings for the ERC20Voting plugin
  const erc20VotingPlugin: PluginSettings = {
    pluginSetup: ERC20VotingSetup,
    pluginSetupRepo: ERC20VotingRepo,
    data: encodeERC20VotingSetup({
      participationRequiredPct: FIVE_PERCENT,
      supportRequiredPct: FIFTY_PERCENT,
      minDuration: ONE_WEEK,
      tokenSettings: [ZERO_ADDRESS, "The DAO Token", "DAO"],
      mintSettings: [[signer.address], [BN(10n ** 18n)]],
    }),
  };

  // 4. Create the new DAO and get the transaction receipt, if we had more plugins we would add them to the array
  const tx = await daoFactory.createDao(daoSettings, [erc20VotingPlugin]);

  // 5. Parse the transaction receipt to get the DAO address, this is not working yet
  console.log(await parseNewDAOTx(tx));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
