import { BigNumber } from "ethers";

export type ERC20VotingSettings = {
  participationRequiredPct: BigNumber; // 100% = 10^18
  supportRequiredPct: BigNumber; // 100% = 10^18
  minDuration: BigNumber; // in seconds
  tokenSettings: [
    string, // token address (ZERO_ADDRESS for new token)
    string, // token name
    string // token symbol
  ];
  mintSettings: [
    string[], // receivers
    BigNumber[] // amounts
  ];
};

export type DAOSettings = {
  trustedForwarder: string;
  name: string;
  metadata: string;
};

export type PluginSettings = {
  pluginSetup: string;
  pluginSetupRepo: string;
  data: string; // bytes
};
