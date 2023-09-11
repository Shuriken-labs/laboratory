import React from "react";
import InfoComponent from "./InfoComponent";
import Ninja from "../assets/ninja_girl.png";

const Hero = () => {
  return (
    <div className="__hero_box min-w-full flex flex-col">
      <div className="__hero_container min-w-full md:h-96">
        <div className="__text_container min-w-full">
          <div className="__first_text_container mt-20">
            <h1 className="__hold_hands md:text-8xl">Let's hold your hands,</h1>
            <h2 className="__become text-base md:text-5xl">
              as you become all that you can.
            </h2>
          </div>
          <div className="__second_text_container">
            <img
              src={Ninja}
              className="__naija_image"
              style={{
                position: "absolute",
                maxHeight: "200vh",
                zIndex: "400"
              }}
            />
          </div>
        </div>
      </div>
      <InfoComponent />
      <br />
      <br />
      <div className="__second_div min-w-full">
        <div className="__second_container columns-1 md:columns-2 pr-10 pl-10 md:mt-40">
          <div className="__first_empty h-96"></div>
          <div className="__second_info __carded1 h-96 rounded-3xl"></div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Hero;
