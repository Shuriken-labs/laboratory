import React, { useContext, useState } from "react";
import { UitArrowCircleUp } from "@iconscout/react-unicons-thinline";
import shuriken_logo from "../assets/Shuriken Labs-09.png";
import Atropos from "atropos/react";
import { createWallet12 } from "../controllers/wallet";
import WalletState from "../utils/State";

const headerContents = `
  <div className="text-black text-xl">
    looks like you're on a mobile device
  </div>
`;

const CustomModal = ({
  styles,
  headerContent = headerContents,
  bodyContent,
  className,
  shuriken = "yes",
  noImage,
  onButtonClick,
  userWallet
}) => {
  const { wallet, createMobileWallet } = useContext(WalletState);
  const [loading, setLoading] = useState(false);
  return (
    <div
      className={` ${className} rounded-3xl `}
      style={{
        ...styles,
        display: noImage ? "hidden" : "flex",
        border: noImage ? "unset" : "2px solid rgba(255, 255, 255, 0.646)",
        boxShadow: noImage && "unset",
        flexDirection: "column",
        alignItems: "center",
        gap: "2px"
      }}
    >
      {shuriken && (
        <div className="__awesome_shuriken h-14 mt-4  min-w-full flex flex-row pl-5 pr-5 justify-between items-center rounded-2xl">
          <img
            src={shuriken_logo}
            className={`max-h-6`}
            alt="shuriken_labs_logo"
            style={{ display: noImage ? "none" : "grid" }}
          />
          {/* <UitArrowCircleUp className=" arr h-auto  -rotate-180" /> */}
        </div>
      )}

      <div
        //   dangerouslySetInnerHTML={{ __html: headerContent }}
        className="ml-8 mr-8 text-2xl md:w-72 w-21 mt-8 text-left __header_content text-black"
      >
        <div className="text-black text-xl">
          looks like you're on a mobile device 📱
        </div>
      </div>
      <br />

      <div className=" ml-8 mr-8 __body_content text-lg text-black __font_space">
        let's do it this way, you get to import your wallet or create a new one
        right here!
      </div>

      <br />
      <br />
      <div className="__action_buttons pl-8 pr-8 w-full flex justify-between">
        <div className="theta ">
          <button
            onClick={() => {
              onButtonClick("import");
            }}
            className="btn
                btn-black btn-sm __small_font max-w-sm text-white"
          >
            Import wallet
          </button>
        </div>

        <div className="theta">
          <div
            className="btn 
        btn-dark btn-sm max-w-sm __small_font text-white"
            onClick={async () => {
              setLoading(true);
              await createMobileWallet();
              onButtonClick("create");
            }}
          >
            {loading ? "loading ..." : "Create wallet"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
