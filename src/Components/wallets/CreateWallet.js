import React, { useEffect, useState, useLayoutEffect, useContext } from "react";
import { UitArrowCircleUp } from "@iconscout/react-unicons-thinline";
import shuriken_logo from "../../assets/Shuriken Labs-09.png";
import Atropos from "atropos/react";
import { createWallet12 } from "../../controllers/wallet";
import { decrypt } from "../../utils/encryption";
import WalletState from "../../utils/State";
import { CopyToClipboard } from "react-copy-to-clipboard";

const initWallet = async () => {
  const walletObject = await createWallet12();
  console.log("================================================");
  console.log(walletObject);
  return walletObject;
};

const CreateWallet = ({
  styles,
  headerContent,
  bodyContent,
  className,
  shuriken = "yes",
  noImage,
  onButtonClick,
  walletDetails
}) => {
  console.log("walletDetails");
  const { wallet, createMobileWallet } = useContext(WalletState);
  console.log(wallet);
  // console.log(walletDetails);
  // const [wallet, setWallet] = useState({
  //   encrypted_mnemonic: "",
  //   addresses: {
  //     evm: ""
  //   }
  // });
  // useEffect(async () => {
  //   const newWallet = await walletDetails();
  //   console.log("================================");
  //   console.log(newWallet);
  //   setWallet(newWallet);
  // }, []);
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
          🎉✨ Write these down in a safe place.
        </div>
      </div>
      <br />

      {/* <div className=" ml-8 mr-8 __body_content text-lg text-black __font_space">
        let's do it this way, you get to import your wallet or create a new one
        right here!
      </div> */}

      {/* 
          "thiiiiiiiiis thiiiiiiiiis thiiiiiiiiis thiiiiiiiiis thiiiiiiiiis thiiiiiiiiis thiiiiiiiiis thiiiiiiiiis thiiiiiiiiis thiiiiiiiiis thiiiiiiiiis thiiiiiiiiis" */}

      <div className="__import_seed_container rounded-3xl border border-black h-64 w-72 max-w-[65vw] grid justify-items-center grid-cols-2 p-4">
        {decrypt(wallet.mobileWallet.encrypted_mnemonic)
          .split(" ")
          .map((e, i) => {
            return (
              <div className="__import_seed_container rounded-xl border border-neutral-400  h-8 w-[fit-content] pl-3 pr-3 max-w-[65vw] text-center">
                {e}
              </div>
            );
          })}
      </div>
      <CopyToClipboard
        onCopy={console.log("copied")}
        text={decrypt(wallet.mobileWallet.encrypted_mnemonic)}
      >
        <div className=" text-sm __copy_text">
          click here to copy your seed phrase
        </div>
      </CopyToClipboard>
      <br />

      <div className="__action_buttons pl-4 pr-4 w-full flex justify-end">
        <div className="__back_button flex flex-row justify-center items-center mr-6">
          <div
            className=" text-center  "
            onClick={() => {
              onButtonClick("connect");
            }}
          >
            {"< connect wallet"}
          </div>
        </div>

        <div className="theta ">
          <button
            onClick={() => {
              onButtonClick("verify");
            }}
            className="btn
                btn-black btn-sm __small_font max-w-sm text-white"
          >
            Next
          </button>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default CreateWallet;
