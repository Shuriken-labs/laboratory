import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import "./styles/desktop.css";
import "./styles/generic.css";
import "./styles/mobile.css";
import "./styles/buttons.css";
import { WalletProvider } from "./utils/State";

import "atropos/css";


const projectId = process.env.REACT_APP_WALLET_CONNECT_ID;
// console.log(projectId);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <React.StrictMode>

          <WalletProvider>
            <App />
          </WalletProvider>
        
    </React.StrictMode>
 
  </>
);
