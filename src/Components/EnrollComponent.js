import React, { useContext, useEffect, useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import { blob1 } from './Blobs';
import WalletState from '../utils/State';
import { useLocation } from 'react-router-dom';
import { useNavigate, Link } from 'react-router-dom';
import Uchiha from '../assets/uchiha_itachi.svg';

const EnrollComponent = () => {
	const { state } = useLocation();
	console.log(state);
	const navigate = useNavigate();
	// const { videoUrl, headerComponent, bodyContent, courseOutlineUrl } = state;
	const [ isExploding, setIsExploding ] = useState(false);
	useEffect(() => {
		setIsExploding(true);
		return () => {
			setIsExploding(false);
		};
	}, []);
	const { addCustomNetwork, DisconnectWallet, GetAccount, connectWallet, wallet } = useContext(WalletState);
	return (
		<div className="__enroll_component relative md:min-w-full flex flex-col overflow-x-hidden items-center md:-mt-32">
			{/* {isExploding && (
        <ConfettiExplosion
          zIndex={900}
          width={1500}
          particleCount={700}
          duration={3200}
        />
      )} */}
			<div className="md:min-w-full md:min-h-screen z-10 columns-1  flex items-center  justify-center pl-20 pr-20 ">
				<div className="__info">
					<div className="__uchiha_image w-full flex md:mt-10 flex-row justify-center">
						<img src={Uchiha} className="max-h-[70vh]" />
					</div>
					<div className="__circe_bold font-bold text-center text-6xl md:text-8xl __gradient_new">
						Congratulations
						<br />
					</div>

					<div className="wallet_address text-3xl text-white text-center">
						{wallet.walletAddress.length > 2 &&
							`${wallet.walletAddress.substr(0, 5)}...${wallet.walletAddress.substr(-3, 3)}`}
					</div>
					<div className="__enroll_header md:mt-2 text-center text-white text-xl">
						Now it's time for serious work, let's dive in
					</div>
					{/* <div className="__enroll_header text-white">
            {state?.headerContent}
          </div>
          <div className="__enroll_body text-white">{state?.bodyContent}</div> */}
					<div className="__enroll_download theta  flex justify-center ">
						<Link to="/courses">
							<button className="btn btn-light btn-sm __btn_white mt-4">Let's Goo!</button>
						</Link>
					</div>
				</div>
				{/* <div className="__enroll_image  w-full min-h-full">{"finished"}</div> */}
			</div>
			<div className="mb-40" />

			{/* <div className="whats_next text-center text-white">what's next?</div>
      <div className="__glassmorphism_container  w-full pl-20 pr-20 flex flex-row justify-center items-center">
        <div className=" blobs_glass z-10 w-[900px] md:w-[100%] md:max-w-[1200px] rounded-3xl container __glassmorphism h-96">
          {" "}
          <div className="__video_container min-w-full min-h-full relative">
            {state?.videoUrl && (
              <video
                style={{
                  display: "flex",
                  height: "100%",
                  width: "100%"
                }}
                src={state?.videoUrl}
              ></video>
            )}
          </div>
        </div>
      </div> */}

			<div className=" z-0 blobs container flex items-center justify-center min-w-full min-h-full">
				{/* <div className="first_blog w-[10rem] opacity-50 self-center z-0 ">
          {blob1}
        </div> */}
			</div>
		</div>
	);
};

export default EnrollComponent;
