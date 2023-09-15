import React, { useState } from "react";
import programming_img from "../../assets/ninja_trader_real.png";

const TradingPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const rect = event.target.getBoundingClientRect();

    // Calculate the offset from the center of the container
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;

    // Update the mouse position in state
    setMousePosition({ x: offsetX, y: offsetY });
  };

  return (
    <div className="__programming_page h-screen -mt-40   z-50">
      <div className="__programming_container columns-1 md:columns-2 h-full w-full">
        <div className="bg-white __left_programming_container h-full flex flex-column items-center">
          <div className="__text_container_programming w-full">
            <div className="__hook text-5xl text-left flex flex-row justify-center ">
              Analyze <br />
              The Market
              <br />
              Like a Pro
            </div>
            <div className="__hook_expo_center_container w-full flex justify-center">
              <div className="__hook_expo text-left flex flex-column justify-center w-64 items-center ">
                <br />
                Coming soon...
                <br />
                <br />
                {/* >>>> Become a Fullstack developer with hands-on mentorship. */}
                <br />
              </div>
            </div>

            <div className="theta">
              <button
                className="btn
              btn-light btn-sm black max-w-sm text-white"
              >
                Shuriken Start
              </button>
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

export default TradingPage;
