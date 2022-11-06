import { Address, useContractWrite, useWaitForTransaction } from "wagmi";
import { PluginSettings, UseDaoProps } from "../../types";
import { addresses, encodeERC20VotingSetup } from "../index";
import { DAOFactoryABI } from "../../abis/index";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
const { ZERO_ADDRESS, ERC20VotingRepo, ERC20VotingSetup, DAOFactory } =
  addresses;

export const useNewDAO = (daoProps: UseDaoProps) => {
  const { daoName } = daoProps;
  // DAO Config
  const daoSettings = {
    name: daoName as string,
    trustedForwarder: ZERO_ADDRESS,
    metadata: "0x00" as Address,
  };
  // Plugin Config
  const erc20VotingPlugin: PluginSettings = {
    pluginSetup: ERC20VotingSetup,
    pluginSetupRepo: ERC20VotingRepo,
    data: encodeERC20VotingSetup(daoProps),
  };

  const addRecentTransaction = useAddRecentTransaction();

  const { data, ...rest } = useContractWrite({
    mode: "recklesslyUnprepared",
    address: addresses.DAOFactory,
    abi: DAOFactoryABI,
    functionName: "createDao",
    args: [daoSettings, [erc20VotingPlugin]],
    onSuccess: (data) => {
      addRecentTransaction({
        hash: data?.hash,
        description: `Create ${daoName}`,
      });
      console.log("SUCCESS", data);
    },
    onError: (error) => {
      console.log("Error: newDao()", error);
    },
  });

  const { data: transactionReceipt, error: transactionError } =
    useWaitForTransaction({
      hash: data?.hash,
      onSuccess(data) {
        console.log("TX MINED", data);
      },
    });

  return { data, transactionReceipt, transactionError, ...rest };
};
