import React from "react";
import { UitArrowCircleUp } from "@iconscout/react-unicons-thinline";
import shuriken_logo from "../../assets/Shuriken Labs-09.png";
import Atropos from "atropos/react";

const ImportWallet = ({
  styles,
  headerContent,
  bodyContent,
  className,
  shuriken = "yes",
  noImage,
  onButtonClick
}) => {
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
          Paste your 12-word mnemonics here 👇
        </div>
      </div>
      <br />

      {/* <div className=" ml-8 mr-8 __body_content text-lg text-black __font_space">
        let's do it this way, you get to import your wallet or create a new one
        right here!
      </div> */}

      <div className="__import_seed_container rounded-3xl border border-black h-64 w-72 max-w-[65vw] grid justify-items-center grid-cols-4 p-4">
        {"this is what your mnemonics looks like get it from your wallet"
          .split(" ")
          .map((e, i) => {
            return (
              <input
                className="__import_seed_container rounded-xl border border-neutral-400  h-8 w-11 max-w-[65vw] text-center"
                placeholder={e}
              ></input>
            );
          })}
      </div>
      <br />

      <div className="__action_buttons pl-4 pr-4 w-full flex justify-end">
        <div className="theta">
          <div
            className="btn 
        btn-dark btn-sm max-w-sm __small_font  text-white"
            onClick={() => {
              onButtonClick("connect");
            }}
          >
            back
          </div>
        </div>
        <div className="theta ">
          <button
            onClick={() => {}}
            className="btn
                btn-black btn-sm __small_font max-w-sm text-white"
          >
            Import wallet
          </button>
        </div>
      </div>
      <br />
    </div>
  );
};

export default ImportWallet;
