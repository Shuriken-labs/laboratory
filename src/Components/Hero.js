import React from "react";
import InfoComponent from "./InfoComponent";
import Ninja from "../assets/ninja_girl.png";
import Become from "./Become";
import shurikenImage from "../assets/ninja_tab.png";
import Typewriter from "typewriter-effect";
import OttochainLogo from "../assets/ottochain-logo.svg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="__hero_box flex flex-col __no_stretch">
      <div className="__hero_container min-w-full md:h-96">
        <div className="__text_container min-w-full">
          <div className="__first_text_container mt-20">
            <h1 className="__hold_hands text-4xl md:text-8xl">
              Let's hold your hands,
            </h1>
            <h2 className="__become text-base md:text-5xl text-white">
              <Typewriter
                options={{
                  strings: ["as you become all that you can."],
                  autoStart: true,
                  loop: true
                }}
              />
            </h2>
          </div>
          <div className="__second_text_container ">
            <img
              src={Ninja}
              className="__naija_image z-30 md:z-50"
              style={{
                position: "absolute",
                maxHeight: "180vh"
              }}
            />
          </div>
        </div>
      </div>
      <InfoComponent />
      <Become />
      <br />
      <br />
      <div className="__second_div ">
        <div className="__second_container columns-1 md:columns-2 pr-10 pl-10 bg-black black__ flex md:flex-row flex-col justify-center items-center">
          <div className="__first_empty  mb-10  md:h-96 flex flex-row justify-center items-center ">
            <img
              src={shurikenImage}
              alt="shuriken image"
              className="__shuriken h-96 rounded-3xl"
            />
          </div>
          <div className="__second_info __carded1 h-92 md:h-72 rounded-3xl p-10 max-w-2xl">
            <h1 className="__info_header __hook text-3xl">
              Step into Shuriken Labs{" "}
            </h1>
            "your digital dojo for mastering the art of web3." <br /> <br />
            {/* As an online academy, we're committed to transforming you into elite
            Fullstack web3 Developers, and astute Crypto/Forex traders. <br />{" "}
            Discover your potential in an environment that's tailored just for
            you." */}
            In a world filled with tons of Full Stack Developers and Market
            traders. We are committed to making you ONE with a difference.
            Unleash your best self in a dojo made just for YOU.
            <div className="theta mt-3">
              <div
                className="btn 
        btn-light btn-sm black max-w-sm  w-72  text-white font-bold "
                onClick={() => {
                  setTimeout(() => {
                    navigate("/about");
                  }, 250);
                }}
              >
                Meet the Sensei
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div
        className=" text-lg "
        style={{
          color: "white",
          fontFamily: "Circe",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div style={{}}>
          <img style={{ width: "40px", height: "40px" }} src={OttochainLogo} />
        </div>
        <Typewriter
          options={{
            strings: ["Powered by Ottochain ", "Built for You"],
            autoStart: true,
            loop: true
          }}
        />
      </div>
      <br />
    </div>
  );
};

export default Hero;
