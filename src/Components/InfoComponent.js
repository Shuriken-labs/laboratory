import React from "react";
import CustomCard from "./CustomCard";
const InfoContent = [
  { title: "What do we do?", bodyContent: "Some people" },
  { title: "What do we do?", bodyContent: "Some people" },
  { title: "What do we do?", bodyContent: "Some people" }
];

const InfoComponent = () => {
  return (
    <div className=" columns-1 gap-3 md:columns-3 pr-10 pl-10 mt-40">
      {InfoContent.map((details, _index) => {
        return (
          <CustomCard
            styles={{ display: "flex" }}
            className={`__carded${_index} h-40 `}
            headerContent={details.title}
            bodyContent={details.bodyContent}
          />
        );
      })}
    </div>
  );
};

export default InfoComponent;
