import React from "react";

const CustomCard = ({ styles, headerContent, bodyContent, className }) => {
  return (
    <div
      className={` __elevation ${className} rounded-3xl`}
      style={{
        ...styles,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2px"
      }}
    >
      {headerContent && <div className="__header_content">{headerContent}</div>}
      {bodyContent && <div className="__body_content">{bodyContent}</div>}
    </div>
  );
};

export default CustomCard;
