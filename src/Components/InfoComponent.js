import React from "react";
import CustomCard from "./CustomCard";
import slideImage from "../assets/slide.jpg";
import scrollImage from "../assets/scroll.jpg";
import portalImage from "../assets/portals.jpg";

const imageeList = ["", "", portalImage, "", slideImage, scrollImage];
const imageList = ["", portalImage, slideImage, "", "", scrollImage];

const InfoContent = [
  { title: "", bodyContent: "" },
  {
    title: "Personalized Learning<br />for Every Level",
    bodyContent: ""
  },
  { title: "Join a<br />Thriving Community", bodyContent: "" },
  { title: "", bodyContent: "" },
  { title: "", bodyContent: "" },
  { title: "Get the<br />Mentorship Advantage", bodyContent: "" }
];

const InfoComponent = () => {
  return (
    <div className=" columns-1 gap-3 md:grid md:grid-cols-3 pr-10 pl-10 mt-40 z-10 md:z-10 ">
      {InfoContent.map((details, _index) => {
        return (
          <CustomCard
            noImage={
              _index == 0
                ? true
                : _index == 1
                ? false
                : _index == 2
                ? false
                : _index == 3
                ? true
                : _index == 4
                ? true
                : _index == 5
                ? false
                : true
            }
            styles={{
              backgroundImage: `url(${imageList[_index]})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
            className={`__carded${_index} h-96 md:h-128 mb-14`}
            headerContent={details.title}
            bodyContent={details.bodyContent}
          />
        );
      })}
    </div>
  );
};

export default InfoComponent;
