import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { random, tokenToWei } from "../lib";
import { FIFTY_PERCENT, FIVE_PERCENT, ONE_DAY } from "../lib/constants";
import { useNewDAO } from "../lib/hooks/dao";

const VOTE_SETTINGS = {
  supportRequiredPct: FIFTY_PERCENT,
  participationRequiredPct: FIVE_PERCENT,
  minDuration: ONE_DAY,
};

const New: NextPage = () => {
  const { address } = useAccount();
  const { data, error, write, variables } = useNewDAO({
    daoName: "TestDAO" + random(),
    ...VOTE_SETTINGS,
    tokenName: "DAO Token",
    tokenSymbol: "DAOT",
    recipients: [address],
    amounts: [tokenToWei(1)],
  });
  // console.log("newDAO", { variables, data, error, write });
  return (
    <>
      <div className="flex flex-col max-w-3xl">
        <p className="my-8 text-lg">
          Create a new DAO, everything is already set up for you (hardcoded
          because im too lazy to make the form)
          <br />
        </p>

        <div className="grid xl:grid-cols-2 mt-2 gap-8">
          <button className="btn" disabled={!write} onClick={() => write?.()}>
            New DAO
          </button>
        </div>
        {}
      </div>
    </>
  );
};

export default New;
