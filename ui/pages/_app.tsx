import "../styles/globals.css";
import { AppProps } from "next/app";
import Providers from "../components/Providers";
import Layout from "../components/Layout/Layout";
import { Logo } from "../components/Buttons";
import Sidebar from "../components/Layout/Sidebar";
import { ViewGridIcon, TerminalIcon } from "@heroicons/react/outline";

const navLinks = [
  {
    route: "/",
    icon: <ViewGridIcon className="w-5 h-5" />,
    name: "Start",
  },
  {
    route: "https://github.com/pythonpete32/hack-web3-boilerplate",
    icon: <TerminalIcon className="w-5 h-5" />,
    name: "GitHub",
  },
];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Layout
        sidebar={
          <Sidebar logo={<Logo />} navLinks={navLinks} onRoute={console.log} />
        }
      >
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
}

export default MyApp;
