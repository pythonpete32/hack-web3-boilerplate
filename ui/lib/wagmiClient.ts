import { Web3AuthConnector } from "@web3auth/web3auth-wagmi-connector";
import { TorusWalletConnectorPlugin } from "@web3auth/torus-wallet-connector-plugin";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  injectedWallet,
  rainbowWallet,
  walletConnectWallet,
  metaMaskWallet,
  omniWallet,
  argentWallet,
  ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, chain, createClient } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider, webSocketProvider } = configureChains(
  [chain.goerli], // chain.polygon, chain.goerli, chain.polygonMumbai
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID as string }),
    publicProvider(),
  ]
);

const rainbowWeb3AuthConnector = ({ chains }: any) => ({
  id: "web3auth",
  name: "Web3Auth",
  iconUrl: "https://web3auth.io/images/w3a-L-Favicon-1.svg",
  iconBackground: "#fff",
  createConnector: () => {
    const connector = new Web3AuthConnector({
      chains: chains,
      options: {
        socialLoginConfig: {},
        enableLogging: true,
        clientId: process.env.NEXT_PUBLIC_WEB3AUTH_ID as string, // Get your own client id from https://dashboard.web3auth.io
        network: "testnet",
        chainId: "0x5",
      },
    });
    connector.web3AuthInstance?.addPlugin(
      new TorusWalletConnectorPlugin({
        torusWalletOpts: {
          buttonPosition: "top-right",
        },
        walletInitOptions: {
          whiteLabel: {
            theme: { isDark: true, colors: { primary: "#00a8ff" } },
            logoDark: "https://web3auth.io/images/w3a-L-Favicon-1.svg",
            logoLight: "https://web3auth.io/images/w3a-D-Favicon-1.svg",
          },
          useWalletConnect: true,
          enableLogging: true,
        },
      })
    );
    return {
      connector,
    };
  },
});

const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      injectedWallet({ chains }),
      rainbowWallet({ chains }),
      walletConnectWallet({ chains }),
      metaMaskWallet({ chains }),
      omniWallet({ chains }),
      argentWallet({ chains }),
      ledgerWallet({ chains }),
      rainbowWeb3AuthConnector({ chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

export { wagmiClient, chains };
