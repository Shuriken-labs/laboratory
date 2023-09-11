import React, { createContext, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";

const WalletState = createContext();
export const WalletProvider = ({ children }) => {
  const { deactivate, account, library } = useWeb3React();

  const addCustomNetwork = async () => {
    const ethereum = window.ethereum;

    try {
      // Request permission to add the network
      await ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x238C", // Replace with your chain's ID
            chainName: "Otto Chain",
            nativeCurrency: {
              name: "GNOSIS",
              symbol: "GNO",
              decimals: 18
            },
            rpcUrls: [
              "https://gateway.testnet.octopus.network/ottochain/m4k5urt9h33dpbhgsp4lqxemo6naeihz"
            ], // Replace with your RPC URL
            blockExplorerUrls: ["https://34.69.4.240:4000/"] // Replace with your block explorer URL
          }
        ]
      });
    } catch (error) {
      console.error("Error adding network:", error);
    }
  };

  const NativeBalance = () => {
    const checkNativeBalance = async () => {
      if (library && account) {
        const web3 = new Web3(library);
        const balance = await web3.eth.getBalance(account);

        // Convert balance from wei to ether
        const balanceInEther = web3.utils.fromWei(balance, "ether");

        console.log(`Native Balance: ${balanceInEther} ETH`);
        return balanceInEther;
      }
    };

    return checkNativeBalance();
  };

  const DisconnectWallet = () => {
    console.log("disconnecting wallet");
    return deactivate();
  };

  const GetAccount = () => {
    console.log(account);
    return account;
  };

  return (
    <WalletState.Provider
      value={{ addCustomNetwork, NativeBalance, GetAccount, DisconnectWallet }}
    >
      {children}
    </WalletState.Provider>
  );
};

export default WalletState;
