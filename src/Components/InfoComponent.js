import React from "react";
import CustomCard from "./CustomCard";
const InfoContent = [
  {
    title: "Personalized Learning<br />for Every Level",
    bodyContent: ""
  },
  { title: "Join a<br />Thriving Community", bodyContent: "" },
  { title: "Get the<br />Mentorship Advantage", bodyContent: "" }
];

const InfoComponent = () => {
  return (
    <div className=" columns-1 gap-3 md:columns-3 pr-10 pl-10 mt-40">
      {InfoContent.map((details, _index) => {
        return (
          <CustomCard
            styles={{ display: "flex" }}
            className={`__carded${_index} h-96  mb-14`}
            headerContent={details.title}
            bodyContent={details.bodyContent}
          />
        );
      })}
    </div>
  );
};

export default InfoComponent;
