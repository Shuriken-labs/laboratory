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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Web3ReactProvider
      getLibrary={(provider) => new Web3Provider(provider)}
      connectors={[InjectedConnector]}
    >
      <WalletProvider>
        <App />
      </WalletProvider>
    </Web3ReactProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
