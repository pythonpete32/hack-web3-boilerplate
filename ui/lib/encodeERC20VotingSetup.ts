import { AbiCoder } from "ethers/lib/utils";
import { Address } from "wagmi";
import { UseDaoProps } from "../types";
import { addresses } from "./goerli_contracts";
const { ZERO_ADDRESS } = addresses;

const ERC20_SETUP_ABI = [
  "uint64",
  "uint64",
  "uint64",
  "tuple(address, string, string)",
  "tuple(address[], uint256[])",
];

export function encodeERC20VotingSetup({
  participationRequiredPct,
  supportRequiredPct,
  minDuration,
  tokenName,
  tokenSymbol,
  recipients,
  amounts,
}: Omit<UseDaoProps, "daoName">) {
  if (recipients?.[0] === undefined) return "0x00";
  const abiCoder = new AbiCoder();
  const encodedData = abiCoder.encode(ERC20_SETUP_ABI, [
    participationRequiredPct,
    supportRequiredPct,
    minDuration,
    [ZERO_ADDRESS, tokenName, tokenSymbol],
    [recipients, amounts],
  ]) as Address;

  // console.log("encodedData", encodedData);

  return encodedData;
}
