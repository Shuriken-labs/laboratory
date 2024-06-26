import React, { useContext, useState } from "react";
import { isDesktop, isMobile } from "../helpers/Responsiveness";

import shurikenLogo from "../assets/Shuriken Labs-08.png";
import WalletState from "../utils/State";
import { useNavigate } from "react-router-dom";
import CustomModal from "./CustomModal";
import ImportWallet from "./wallets/ImportWallet";
import CreateWallet from "./wallets/CreateWallet";
import { createWallet12 } from "../controllers/wallet";

// console.log(window.ethereum?.selectedAddress);
const createWallet = async () => await createWallet12();

const Navbar = () => {
  const {
    addCustomNetwork,
    DisconnectWallet,
    GetAccount,
    connectWallet,
    wallet,
    removeCustomNetwork
  } = useContext(WalletState);
  const navigate = useNavigate();
  const userAgent = navigator.userAgent;
  const isMobileBrowser = /Mobi|Android/i.test(userAgent);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [page, setPage] = useState("connect");

  const nextPage = (page) => {
    setPage(page);
  };

  const nextPageNumber = (pageNumber) => {
    switch (pageNumber) {
      case "1":
        setPage("connect");
        break;
      case "2":
        setPage("import");
        break;
      case "3":
        setPage("create");
        break;

      default:
        setPage("1");
    }
  };

  function mobileFunction() {
    // Code specific to mobile browser
    console.log("This is specific code for a mobile browser");
    setButtonVisible(!buttonVisible);
  }

  return (
    <div className="__nav_box min-w-full fixed max_screen z-50">
      <div className="__nav_container flex flex-row justify-between p-6 rounded-3xl relative">
        <div className="__logo_container flex">
          <img
            src={shurikenLogo}
            alt="shuriken_logo"
            className="__shuriken_logo"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className="__connect_container theta flex">
          <button
            className="btn 
           btn-light btn-sm __btn_white"
            onClick={() => {
              isMobileBrowser
                ? mobileFunction()
                : wallet.walletAddress
                ? DisconnectWallet()
                : connectWallet();
            }}
          >
            {wallet.walletAddress.length > 2
              ? `${wallet.walletAddress.substr(
                  0,
                  8
                )}...${wallet.walletAddress.substr(-8, 8)}`
              : "connect wallet"}
          </button>
        </div>
        {/* <div className="__connect_container theta flex">
          <button
            className="btn 
           btn-light btn-sm __btn_white"
            onClick={() => open()}
          >
            {wallet.walletAddress.length > 2
              ? `${wallet.walletAddress.substr(
                  0,
                  8
                )}...${wallet.walletAddress.substr(-8, 8)}`
              : "wallet Connect"}
          </button>
        </div> */}
      </div>
      {buttonVisible && (
        <div className="__create_import_wallet_container __elevation rounded-3xl">
          {page == "import" ? (
            <ImportWallet onButtonClick={nextPage} />
          ) : page == "connect" ? (
            <CustomModal onButtonClick={nextPage} />
          ) : (
            <CreateWallet onButtonClick={nextPage} />
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
