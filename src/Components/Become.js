import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/buttons.css";

const Become = () => {
  const navigate = useNavigate();
  return (
    <div className="__become  md:columns-2 h-32 z-10">
      <div className=" hidden md:grid h-full rounded-xl"></div>
      <div className="__become columns-2 grid justify-center md:flex md:flex-row md:columns-2 theta rounded-xl md:gap-5 md:mr-10">
        <div
          className="btn 
        btn-light btn-sm purple max-w-sm  w-72  text-white"
          onClick={() => {
            setTimeout(() => {
              navigate("/enquiry/ninja");
            }, 250);
          }}
        >
          Become a web3 Ninja
        </div>
        <br />
        <div
          className="btn 
        btn-light btn-sm __btn_white max-w-sm w-72"
          onClick={() =>
            setTimeout(() => {
              navigate("/enquiry/trader");
            }, 250)
          }
        >
          Become a web3 Trader
        </div>
      </div>
    </div>
  );
};

export default Become;
