import React from "react";
import { useAccount } from "wagmi";
import { shortenAddress } from "../lib/shortenAddress";

export function HeroCode() {
  const { address } = useAccount();

  return (
    <div className="w-4/12">
      <div className="mockup-code ">
        <pre data-prefix="$" className="text-2xl">
          <code>pnpm i -D hack-web3</code>
        </pre>
        {address ? (
          <>
            <pre data-prefix=">" className="text-warning text-2xl">
              <code>Connected</code>
            </pre>
            <pre data-prefix=">" className="text-success text-2xl">
              <code>{shortenAddress(address, 10)}</code>
            </pre>
          </>
        ) : (
          <pre data-prefix=">" className="text-warning text-2xl">
            <code>Disconnected</code>
          </pre>
        )}
      </div>
    </div>
  );
}
