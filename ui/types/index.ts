import { BigNumber, Bytes } from "ethers";
import { Address } from "wagmi";

export type ERC20VotingSettings = {
  participationRequiredPct: BigNumber; // 100% = 10^18
  supportRequiredPct: BigNumber; // 100% = 10^18
  minDuration: BigNumber; // in seconds
  tokenSettings: [
    Address, // token address (ZERO_ADDRESS for new token)
    Address, // token name
    string // token symbol
  ];
  mintSettings: [
    Address[], // receivers
    BigNumber[] // amounts
  ];
};

export type DAOSettings = {
  trustedForwarder: Address;
  name: string;
  metadata: string;
};

export type PluginSettings = {
  pluginSetup: Address;
  pluginSetupRepo: Address;
  data: Address; // bytes
};

export type UseDaoProps = {
  daoName: string | undefined;
  tokenName: string | undefined;
  tokenSymbol: string | undefined;
  recipients: Array<Address | undefined>;
  amounts: Array<BigNumber | undefined>;
  participationRequiredPct: BigNumber | undefined;
  supportRequiredPct: BigNumber | undefined;
  minDuration: BigNumber | undefined;
};
