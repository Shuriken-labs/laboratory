import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles/desktop.css";
import "./styles/generic.css";
import "./styles/mobile.css";
import "./styles/buttons.css";
import { WalletProvider } from "./utils/State";
import { Web3ReactProvider, useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { InjectedConnector } from "@web3-react/injected-connector";
import { formatEther } from "@ethersproject/units";
import { MetaMask } from "@web3-react/metamask";

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";

const ottochain = {
  id: 42161,
  name: "Arbitrum One",
  network: "arbitrum",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    alchemy: {
      http: ["https://arb-mainnet.g.alchemy.com/v2"],
      webSocket: ["wss://arb-mainnet.g.alchemy.com/v2"]
    },
    infura: {
      http: ["https://arbitrum-mainnet.infura.io/v3"],
      webSocket: ["wss://arbitrum-mainnet.infura.io/ws/v3"]
    },
    default: {
      http: ["https://arb1.arbitrum.io/rpc"]
    },
    public: {
      http: ["https://arb1.arbitrum.io/rpc"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "Arbiscan",
      url: "https://arbiscan.io"
    },
    default: {
      name: "Arbiscan",
      url: "https://arbiscan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 7654707
    }
  }
};

const chains = [ottochain];
const projectId = process.env.REACT_APP_WALLET_CONNECT_ID;
console.log(projectId);

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <React.StrictMode>
      <WagmiConfig config={wagmiConfig}>
        <Web3ReactProvider
          getLibrary={(provider) => new Web3Provider(provider)}
          connectors={[InjectedConnector]}
        >
          <WalletProvider>
            <App />
          </WalletProvider>
        </Web3ReactProvider>
      </WagmiConfig>
    </React.StrictMode>
    <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
