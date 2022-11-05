import React from "react";
import { useAccount } from "wagmi";
import { shortenAddress } from "../lib/shortenAddress";

export default function HeroCode() {
  const { address } = useAccount();

  return (
    <div className="mockup-code ">
      <pre data-prefix="$" className="text-xl">
        <code>pnpm i -D hack-web3</code>
      </pre>
      {address ? (
        <>
          <pre data-prefix=">" className="text-warning text-xl">
            <code>Connected</code>
          </pre>
          <pre data-prefix=">" className="text-success text-xl">
            <code>{shortenAddress(address, 10)}</code>
          </pre>
        </>
      ) : (
        <pre data-prefix=">" className="text-warning text-xl">
          <code>Disconnected</code>
        </pre>
      )}
    </div>
  );
}
