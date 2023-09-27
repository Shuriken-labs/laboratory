import React, { createContext, useState } from "react";
import Web3 from "web3";
import { Web3ReactProvider, useWeb3React } from "@web3-react/core";
import { Web3Provider, ExternalProvider } from "@ethersproject/providers";
import { InjectedConnector } from "@web3-react/injected-connector";
import { formatEther } from "@ethersproject/units";
import { ethers } from "ethers";
// import { MetaMask } from "@web3-react/metamask";
const externalProvider = new ethers.JsonRpcProvider(
  "https://gateway.testnet.octopus.network/ottochain/m4k5urt9h33dpbhgsp4lqxemo6naeihz"
);

const WalletState = createContext();
export const WalletProvider = ({ children }) => {
  const { deactivate, account, library, activate } = useWeb3React();

  const [wallet, setWallet] = useState({
    walletAddress:
      window.ethereum && window.ethereum.selectedAddress
        ? window.ethereum.selectedAddress
        : "",
    nativeBalance: "",
    connected: ""
  });

  const addCustomNetwork = async () => {
    try {
      await window.ethereum.request({
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
            blockExplorerUrls: [
              "https://34.69.4.240:4000/" // Replace with your block explorer URL
            ]
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

  const DisconnectWallet = async () => {
    console.log("disconnecting wallet");
    // deactivate();
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        window.ethereum.disconnect();
        console.log(window.ethereum);
        setWallet((prevWallet) => {
          console.log("...", prevWallet);
          prevWallet.walletAddress = "";
          return { ...prevWallet, walletAddress: "" };
        });
        // window.ethereum.disconnect();
        console.log("wallet.wallet address:");
        console.log(wallet);
        // Disconnection was successful
      } catch (error) {
        // Handle error or user cancellation
        console.log(error);
      }
    }
  };

  const connectWallet = async () => {
    try {
      // Check if MetaMask is installed
      if (window.ethereum) {
        // Request permission to connect the wallet
        await window.ethereum.request({ method: "eth_requestAccounts" });
        // Wallet is connected
        console.log("Wallet connected:", window.ethereum.selectedAddress);
        setWallet({
          ...wallet,
          walletAddress: window.ethereum.selectedAddress
        });
      } else {
        // MetaMask is not installed or not detected
        console.log("MetaMask is not installed");
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  const GetAccount = () => {
    console.log(account);
    return account;
  };

  // GetAccount();

  return (
    <WalletState.Provider
      value={{
        addCustomNetwork,
        NativeBalance,
        GetAccount,
        DisconnectWallet,
        connectWallet,
        wallet
      }}
    >
      {children}
    </WalletState.Provider>
  );
};

export default WalletState;
