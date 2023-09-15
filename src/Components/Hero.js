import React from "react";
import InfoComponent from "./InfoComponent";
import Ninja from "../assets/ninja_girl.png";
import Become from "./Become";
import shurikenImage from "../assets/ninja_tab.png";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="__hero_box min-w-full flex flex-col">
      <div className="__hero_container min-w-full md:h-96">
        <div className="__text_container min-w-full">
          <div className="__first_text_container mt-20">
            <h1 className="__hold_hands text-4xl md:text-8xl">
              Let's hold your hands,
            </h1>
            <h2 className="__become text-base md:text-5xl">
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
                maxHeight: "200vh"
              }}
            />
          </div>
        </div>
      </div>
      <InfoComponent />
      <Become />
      <br />
      <br />
      <div className="__second_div">
        <div className="__second_container columns-1 md:columns-2 pr-10 pl-10 bg-black black__">
          <div className="__first_empty  mb-10  md:h-96 flex flex-row justify-center items-center">
            <img
              src={shurikenImage}
              alt="shuriken image"
              className="__shuriken h-96 rounded-3xl"
            />
          </div>
          <div className="__second_info __carded1 h-96 rounded-3xl p-10 ">
            <h1 className="__info_header __hook text-3xl">
              Step into Shuriken Labs{" "}
            </h1>
            "your digital dojo for mastering the art of web3. <br /> <br />
            As an online academy, we're committed to transforming you into elite
            Fullstack web3 Developers, and astute Crypto/Forex traders. <br />{" "}
            Discover your potential in an environment that's tailored just for
            you."
          </div>
        </div>
      </div>
      <br />
      <div className=" text-lg" style={{ color: "white", fontFamily: "Circe" }}>
        <Typewriter
          options={{
            strings: ["Powered by Ottochain", "Built for You"],
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
