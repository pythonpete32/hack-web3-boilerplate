import { ethers } from "ethers";
import { Address } from "wagmi";

export const addresses = {
  DAOFactory: "0xd52CA6BbfC11627aF9aC3496CAb975ae20E70A81" as Address,
  Registry: "0x2B8C4DD137104d1E869105cd0106e7D9EF955BfE" as Address,
  TokenFactory: "0xE0b582144d9347e849Ab91780f904d4002c55E05" as Address,
  AllowlistVotingSetup: "0xD39cE95D1e29d4EA9F4E8813d73E68F2F720377a" as Address,
  DAO: "0xe0C6B6f2078bbC38Bf71af47C286766689D3BaaF" as Address,
  DAORegistry: "0xF9514f4Eac328F53d94c87B76c407B9a67E1441A" as Address,
  DAORegistry_Implementation:
    "0xe4F9e25894E864f9D0142375F8A6a3D3E463c5B5" as Address,
  DAORegistry_Proxy: "0xF9514f4Eac328F53d94c87B76c407B9a67E1441A" as Address,
  DAO_ENSSubdomainRegistrar:
    "0x99C7D164fcd6a6F11E0C11fC7e932D285b7F08aB" as Address,
  DAO_ENSSubdomainRegistrar_Implementation:
    "0x92ABB80D541c0Ea5C4C0CeB8c8EAA7c264470c77" as Address,
  DAO_ENSSubdomainRegistrar_Proxy:
    "0x99C7D164fcd6a6F11E0C11fC7e932D285b7F08aB" as Address,
  DAO_Implementation: "0xDA18018D87836394bae8e48beF910f7984ff7333" as Address,
  DAO_Proxy: "0xe0C6B6f2078bbC38Bf71af47C286766689D3BaaF" as Address,
  ERC20VotingSetup: "0xE75B0C19495CbA675e45Cb662D60429dee4de344" as Address,
  PluginRepoFactory: "0x4717226b5Ab973482d2C372f47aaAb46db5caE8C" as Address,
  PluginRepoRegistry: "0x22C8AEA0Ad1c1872E60bD43b3FaF20471F7CC43f" as Address,
  PluginRepoRegistry_Implementation:
    "0xDA3948CD0f78574393AA3a797e4Cd5615f4a30f3" as Address,
  PluginRepoRegistry_Proxy:
    "0x22C8AEA0Ad1c1872E60bD43b3FaF20471F7CC43f" as Address,
  PluginSetupProcessor: "0xf7777b97EBEec7EaFCFD28aabE31EDd8F9b46A08" as Address,
  Plugin_ENSSubdomainRegistrar:
    "0x03d529D600eb5bf30FFa4A644F88F4bC3Bc0fD7c" as Address,
  Plugin_ENSSubdomainRegistrar_Implementation:
    "0xC234cb557F7a45207FFCC3575FD4eE1C165055B1" as Address,
  Plugin_ENSSubdomainRegistrar_Proxy:
    "0x03d529D600eb5bf30FFa4A644F88F4bC3Bc0fD7c" as Address,
  ERC20VotingRepo: "0xA76b0ED4CDefD43aC6b213E957d5Be6526498Fdf" as Address,
  ZERO_ADDRESS: ethers.constants.AddressZero as Address,
};
