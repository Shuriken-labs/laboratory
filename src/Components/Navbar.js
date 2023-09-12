import React, { useContext } from "react";
import { isDesktop, isMobile } from "../helpers/Responsiveness";

import shurikenLogo from "../assets/Shuriken Labs-08.png";
import WalletState from "../utils/State";

console.log(window.ethereum?.selectedAddress);

const Navbar = () => {
  const { addCustomNetwork, DisconnectWallet, GetAccount, connectWallet } =
    useContext(WalletState);
  return (
    <div className="__nav_box min-w-full fixed max_screen">
      <div className="__nav_container flex flex-row justify-between p-6 rounded-3xl">
        <div className="__logo_container flex">
          <img
            src={shurikenLogo}
            alt="shuriken_logo"
            className="__shuriken_logo"
          />
        </div>
        <div className="__connect_container theta flex">
          <button
            className="btn 
           btn-light btn-sm __btn_white"
            onClick={() => connectWallet()}
          >
            connect wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
