import { Address } from "wagmi";

export function shortenAddress(address: Address, charsLength = 4) {
  const prefixLength = 2; // "0x"
  if (!address) {
    return "";
  }
  if (address.length < charsLength * 2 + prefixLength) {
    return address;
  }
  return (
    address.slice(0, charsLength + prefixLength) +
    " ... " +
    address.slice(-charsLength)
  );
}
