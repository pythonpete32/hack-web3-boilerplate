import type { NextPage } from "next";
import HomeCard from "../components/HomeCard";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col max-w-3xl">
        <h1 className="card-title text-center text-5xl font-semibold mb-2 flex justify-center">
          Hack Web3 Boilerplate
        </h1>

        <p className="my-8 text-lg">
          This is a boilerplate for building web3 applications with Next.js,
          Tailwind CSS, and WAGMI hooks. It is based on the{" "}
          <a
            href="https://app.nation3.org/"
            className="font-semibold underline"
          >
            Nation3 Citizens app
          </a>{" "}
          <br />
        </p>

        <div className="grid xl:grid-cols-2 mt-2 gap-8">
          <HomeCard title="NextJS 13" href="https://nextjs.org/">
            <p className="pt-2 font-mono">
              Next.js gives you the best developer experience with all the
              features you need for production: hybrid static & server
              rendering, TypeScript support, smart bundling, route pre-fetching,
              and more. No config needed.
            </p>
          </HomeCard>
          <HomeCard title="TailwindCSS 3" href="https://tailwindcss.com/">
            <p className="pt-2 pb-12 font-mono">
              A utility-first CSS framework packed with classes like flex, pt-4,
              text-center and rotate-90 that can be composed to build any
              design, directly in your markup.
            </p>
          </HomeCard>
          <HomeCard href="https://wagmi.sh/" title="WAGMI ">
            <p className="pt-2 font-mono">
              wagmi is a collection of React Hooks containing everything you
              need to start working with Ethereum. wagmi makes it easy to
              Connect Wallet, display ENS and balance information, sign
              messages, interact with contracts, and much more — all with
              caching, request deduplication, and persistence.
            </p>
          </HomeCard>
          <HomeCard
            title="TanStack Query"
            href="https://tanstack.com/query/v4/"
          >
            <p className="pt-2 pb-6 font-mono">
              Toss out that granular state management, manual refetching and
              endless bowls of async-spaghetti code. TanStack Query gives you
              declarative, always-up-to-date auto-managed queries and mutations
              that directly improve both your developer and user experiences.
            </p>
          </HomeCard>
        </div>
      </div>
    </>
  );
};

export default Home;
