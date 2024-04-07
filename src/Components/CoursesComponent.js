import React from "react";
import course_bg from "../assets/CoursesBg.png";
import youtubeicon from "../assets/youtube-icon.png";
import Coursesimg1 from "../assets/Courses-img1.png";
import Coursesimg2 from "../assets/Courses-img2.png";
import Coursesimg3 from "../assets/Courses-img3.png";
import Coursesimg4 from "../assets/Courses-img4.png";
import Courselock from "../assets/Courselock.png";

const CoursesComponent = () => {
  // md:h-[17rem] h-[23rem] w-[17rem] md:w-[12rem] md:mx-0 mx-auto my-7 md:my-0
  return (
    <div className="my-8">
      <div className="relative">
        <img src={course_bg} alt="" className="__courses_bg_image" />
        <img
          src={youtubeicon}
          alt=""
          className="absolute md:top-[9rem] top-[9rem] left-[10rem] md:left-[40rem] h-[2rem]"
        />
      </div>
      <div>
        <div className="mt-[7rem]">
          <div className="md:flex items-center justify-center gap-7 mt-[2rem]">
            <div className="__course_background_design ">
              <div className="__courses_card1">
                <img src={Coursesimg1} alt="" className="h-[11rem] w-[11rem]" />
              </div>
              <div className="mt-3">
                <h2 className="_irish text-white text-xl">Web 3 Enthusiast</h2>
                <button className="__courses_button _irish"> CLAIM PIN </button>
              </div>
            </div>
            <div className="__course_background_design ">
              <div className="__courses_card2">
                <img
                  src={Coursesimg2}
                  alt=""
                  className="h-[11rem] w-[11rem] "
                />
              </div>
              <div className="mt-3">
                <h2 className="_irish  text-white text-xl">Web 3 Master</h2>
                <button className="__courses_button _irish"> CLAIM PIN </button>
              </div>
            </div>
            <div className="__course_background_design ">
              <div className="__courses_card3">
                <img src={Coursesimg3} alt="" className="h-[11rem] w-[12rem]" />
                <img
                  src={Courselock}
                  alt=""
                  className="absolute top-[4rem] left-[4rem]"
                />
              </div>
              <div className="mt-3">
                <h2 className="_irish  text-white text-xl ">
                  Bash Fundamentals
                </h2>
                <button className="__courses_button _irish"> UNLOCK </button>
              </div>
            </div>
            <div className="__course_background_design ">
              <div className="__courses_card4">
                <img src={Coursesimg4} alt="" className="h-[11rem] w-[11rem]" />
                <img
                  src={Courselock}
                  alt=""
                  className="absolute top-[4rem] left-[4rem]"
                />
              </div>
              <div className="mt-3">
                <h2 className="_irish  text-white text-xl">
                  JavaScript Sensei
                </h2>
                <button className="__courses_button _irish"> UNLOCK </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="__courses_footer">
        <h2 className="_irish py-4 md:text-2xl text-[1rem] font-bold">
          UNLOCK ALL PINS TO JOIN OUR EXCLUSIVE DISCORD CHANNEL
        </h2>
      </div>
    </div>
  );
};

export default CoursesComponent;
