import React, { useContext, useEffect, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { blob1 } from "./Blobs";
import WalletState from "../utils/State";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EnrollComponent = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  // const { videoUrl, headerComponent, bodyContent, courseOutlineUrl } = state;
  const [isExploding, setIsExploding] = useState(false);
  useEffect(() => {
    setIsExploding(true);

    return () => {
      setIsExploding(false);
    };
  }, []);
  const {
    addCustomNetwork,
    DisconnectWallet,
    GetAccount,
    connectWallet,
    wallet
  } = useContext(WalletState);
  return (
    <div className="__enroll_component relative md:min-w-full flex flex-col overflow-x-hidden items-center md:-mt-32">
      {isExploding && (
        <ConfettiExplosion
          zIndex={900}
          width={1500}
          particleCount={700}
          duration={3200}
        />
      )}
      <div className="md:min-w-full md:min-h-screen z-10 columns-1 md:columns-2 flex items-center  justify-center pl-20 pr-20 ">
        <div className="__info">
          <div className="__circe_bold font-bold text-left text-4xl md:text-6xl text-white">
            Congratulations 🎉🎉
            <br />
          </div>
          <div className="wallet_address text-3xl text-white text-left">
            {wallet.walletAddress.length > 2 &&
              `${wallet.walletAddress.substr(
                0,
                5
              )}...${wallet.walletAddress.substr(-3, 3)}`}
          </div>

          <div className="__enroll_header md:mt-24 text-left text-white text-2xl">
            You've been enrolled
          </div>
          <div className="__enroll_header">{state?.headerComponent}</div>
          <div className="__enroll_body">{state?.bodyContent}</div>
          <div className="__enroll_download theta  flex justify-start justify-self-start">
            <button className="btn btn-light btn-sm __btn_white justify-self-start">
              Download Outline
            </button>
          </div>
        </div>
        <div className="__enroll_image  w-full min-h-full">{"finished"}</div>
      </div>
      <div className="mb-40" />

      <div className="whats_next text-center ">what's next?</div>
      <div className="__glassmorphism_container w-full pl-20 pr-20">
        <div className=" blobs_glass z-10 w-full rounded-3xl container __glassmorphism h-96"></div>
      </div>
      <div className="__video_container min-w-full relative">
        {state?.videoUrl && <video src={state?.videoUrl}></video>}
      </div>
      <div className=" z-0 blobs container flex items-center justify-center min-w-full min-h-full">
        {/* <div className="first_blog w-[10rem] opacity-50 self-center z-0 ">
          {blob1}
        </div> */}
      </div>
    </div>
  );
};

export default EnrollComponent;
