import { AbiCoder } from "ethers/lib/utils";
import { ERC20VotingSettings } from "../types";

export function encodeERC20VotingSetup(params: ERC20VotingSettings) {
  const abiCoder = new AbiCoder();
  return abiCoder.encode(
    [
      "uint64",
      "uint64",
      "uint64",
      "tuple(address, string, string)",
      "tuple(address[], uint256[])",
    ],
    [
      params.participationRequiredPct,
      params.supportRequiredPct,
      params.minDuration,
      params.tokenSettings,
      params.mintSettings,
    ]
  );
}
