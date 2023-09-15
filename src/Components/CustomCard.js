import React from "react";
import { UitArrowCircleUp } from "@iconscout/react-unicons-thinline";
import shuriken_logo from "../assets/Shuriken Labs-09.png";

const CustomCard = ({
  styles,
  headerContent,
  bodyContent,
  className,
  shuriken = "hope",
  noImage
}) => {
  return (
    <div
      className={` __elevation ${className} rounded-3xl `}
      style={{
        ...styles,
        display: noImage ? "hidden" : "flex",
        boxShadow: noImage && "unset",
        flexDirection: "column",
        alignItems: "center",
        gap: "2px"
      }}
    >
      {shuriken && (
        <div className="__awesome_shuriken h-14 mt-4  min-w-full flex flex-row pl-5 pr-5 justify-between items-center rounded-2xl">
          <img
            src={shuriken_logo}
            className={`max-h-6`}
            alt="shuriken_labs_logo"
            style={{ display: noImage ? "none" : "grid" }}
          />
          {/* <UitArrowCircleUp className=" arr h-auto  -rotate-180" /> */}
        </div>
      )}
      {headerContent && (
        <div
          dangerouslySetInnerHTML={{ __html: headerContent }}
          className=" ml-8 mr-8 text-2xl w-21 mt-8 text-left __header_content text-white"
        />
      )}
      {bodyContent && (
        <div className=" pl-8 pr-8 __body_content">{bodyContent}</div>
      )}
    </div>
  );
};

export default CustomCard;
