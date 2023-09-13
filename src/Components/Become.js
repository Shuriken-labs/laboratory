import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/buttons.css";

const Become = () => {
  const navigate = useNavigate();
  return (
    <div className="__become w-full columns-1 md:columns-2 h-32 z-40">
      <div className=" hidden md:grid h-full rounded-xl"></div>
      <div className="__become columns-2 grid justify-center md:flex md:flex-row md:columns-2 theta rounded-xl md:gap-5">
        <div
          className="btn 
        btn-light btn-sm purple max-w-sm text-white"
          onClick={() => {
            setTimeout(() => {
              navigate("/enquiry/ninja");
            }, 250);
          }}
        >
          Become a web3 Ninja
        </div>
        <div
          className="btn 
        btn-light btn-sm __btn_white max-w-sm"
          onClick={() => navigate("/")}
        >
          Become a web3 Trader
        </div>
      </div>
    </div>
  );
};

export default Become;
