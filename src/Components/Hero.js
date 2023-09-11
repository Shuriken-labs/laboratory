import React from "react";
import InfoComponent from "./InfoComponent";

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
          <div className="__second_text_container"></div>
        </div>
      </div>
      <InfoComponent />
      <br />
      <br />
    </div>
  );
};

export default Hero;
