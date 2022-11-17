"use client";

import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { chains, wagmiClient } from "../lib/wagmiClient";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={darkTheme()}>
        <QueryClientProvider client={new QueryClient()}>
          {children}
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default Providers;
