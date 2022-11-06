import { BigNumber, ethers } from "ethers";
export const BN = BigNumber.from;

export function toPercentBN(percent: number): BigNumber {
  return BN(percent).mul(BN(10).pow(16));
}

export function tokenToWei(amount: number): BigNumber {
  return BN(amount).mul(BN(10).pow(18));
}
