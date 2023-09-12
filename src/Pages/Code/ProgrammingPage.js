import React from "react";
import programming_img from "../../assets/Snap.png";

const ProgrammingPage = () => {
  return (
    <div className="__programming_page h-screen -mt-40   z-50">
      <div className="__programming_container columns-1 md:columns-2 h-full w-full">
        <div className="bg-white __left_programming_container h-full flex flex-column items-center">
          <div className="__text_container_programming w-full">
            <div className="__hook text-5xl text-left flex flex-row justify-center ">
              Accelerate <br />
              Your Learning
              <br />
              Journey
            </div>
            <div className="__hook_expo_center_container w-full flex justify-center">
              <div className="__hook_expo text-left flex flex-column justify-center w-64 items-center ">
                <br />
                Learn JavaScript + web3 <br /> inside out <br />
                <br />
                >>>> Become a Fullstack developer with hands-on mentorship.
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="  __right_programming_container h-full flex flex-col justify-center items-center">
          <img
            src={programming_img}
            className=""
            alt="programming_image"
            style={{ maxHeight: "80%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgrammingPage;
