import React from "react";
import Rectangle from "../../assets/Rectangle.png";
import filter from "../../assets/filter.png";
import { FaStar } from "react-icons/fa";
import Upload from "./Upload.js";
const Projects = () => {
  return (
    <div className="px-[3%] mt-5">
      {/* header */}
      <table class="text-white border-t border-[#ffe50080] justify-center items-center">
        <thead>
          <tr className=" text-white items-center text-sm">
            <th className="h-[2rem] border-r border-[#ffe50080]">
              <input
                id="checked-checkbox"
                value=""
                type="checkbox"
                className="mr-9 w-4 h-4 text-blue-600 bg-transparent border-white rounded "
              />
            </th>
            <th className="h-[2rem] border-r border-[#ffe50080]">
              <p>VIDEO</p>
            </th>
            <th className="h-[2rem] px-3 border-r border-[#ffe50080]">
              <p>VISIBILITY</p>
            </th>
            <th className="h-[2rem] px-3 border-r border-[#ffe50080]">
              <p>RESTRICTIONS</p>
            </th>
            <th className="h-[2rem] border-r px-3 border-[#ffe50080]">
              <div className="ml-2 text-sm pr-[2%]  flex flex-row space-x-5">
                <p>DATE</p>
                <p>DATE</p>
              </div>
            </th>
            <th className="h-[2rem] px-3 border-r border-[#ffe50080]">
              <p>VIEWS</p>
            </th>
            <th className="h-[2rem] px-3 border-r border-[#ffe50080]">
              <p>COMMENTS</p>
            </th>
            <th className="h-[2rem] px-3 border-r border-[#ffe50080]">
              <p>LIKES (vs DISLIKES)</p>
            </th>
            <th>
              <div className=" px-3 text-sm flex flex-row space-x-3">
                <p>FILTER</p>
                <img
                  src={filter}
                  alt="video"
                  // className="h-[6rem] w-[15rem]"
                />
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="border-t border-[#ffe50080] pb-[7%]">
            <td className="">
              <input
                type="checkbox"
                className="mr-9 w-4 h-4 text-blue-600 bg-transparent border-white rounded"
              />
            </td>
            <td>
              <div className="flex flex-row items-center space-x-3">
                <img
                  src={Rectangle}
                  alt="video"
                  className="h-[6rem] w-[15rem]"
                />
                <div className="flex flex-col">
                  <p className="text-left">
                    JAVASCRIPT CRASH COURSE FOR BEGINNERS
                  </p>
                  <div className="flex space-x-4">
                    <FaStar className="text-[#FFE500]" />
                    <FaStar className="text-[#FFE500]" />
                    <FaStar className="text-[#FFE500]" />
                    <FaStar className="text-[#FFE500]" />
                    <FaStar className="text-[#FFE500]" />
                  </div>
                </div>
              </div>
            </td>
            <td>PUBLIC</td>
            <td>
              {/* <div> */}
              <Upload />
              {/* </div> */}
            </td>
            <td>
              <p>10 APRIL 2025</p>
              <p>PUBLISHED</p>
            </td>
            <td>200K</td>
            <td>3.5K</td>
            <td>0</td>
            <td></td>
          </tr>
          <tr className="border-t border-[#ffe50080]">
            <td>
              <input
                type="checkbox"
                className="mr-9 w-4 h-4 text-blue-600 bg-transparent border-white rounded"
              />
            </td>
            <td>
              <div className="flex flex-row items-center space-x-3">
                <img
                  src={Rectangle}
                  alt="video"
                  className="h-[6rem] w-[15rem]"
                />
                <div className="flex flex-col">
                  <p className="text-left">
                    JAVASCRIPT CRASH COURSE FOR BEGINNERS
                  </p>
                  <div className="flex space-x-4">
                    <FaStar className="text-[#FFE500]" />
                    <FaStar className="text-[#FFE500]" />
                    <FaStar className="text-[#FFE500]" />
                    <FaStar className="text-[#FFE500]" />
                    <FaStar className="text-[#FFE500]" />
                  </div>
                </div>
              </div>
            </td>
            <td>PUBLIC</td>
            <td>
              <div>
                <Upload />
              </div>
            </td>
            <td>
              <p>10 APRIL 2025</p>
              <p>PUBLISHED</p>
            </td>
            <td>200K</td>
            <td>3.5K</td>
            <td>0</td>
            <td></td>
          </tr>
          <tr className="border-t border-[#ffe50080]">
            <td>
              <input
                type="checkbox"
                className="mr-9 w-4 h-4 text-blue-600 bg-transparent border-white rounded"
              />
            </td>
            <td>
              <div className="flex flex-row items-center space-x-3">
                <img
                  src={Rectangle}
                  alt="video"
                  className="h-[6rem] w-[15rem]"
                />
                <div className="flex flex-col">
                  <p className="text-left">
                    JAVASCRIPT CRASH COURSE FOR BEGINNERS
                  </p>
                  <div className="flex space-x-4">
                    <FaStar className="text-[#FFE500]" />
                    <FaStar className="text-[#FFE500]" />
                    <FaStar className="text-[#FFE500]" />
                    <FaStar className="text-[#FFE500]" />
                    <FaStar className="text-[#FFE500]" />
                  </div>
                </div>
              </div>
            </td>
            <td>PUBLIC</td>
            <td>
              <div>
                <Upload />
              </div>
            </td>
            <td>
              <p>10 APRIL 2025</p>
              <p>PUBLISHED</p>
            </td>
            <td>200K</td>
            <td>3.5K</td>
            <td>0</td>
            <td></td>
          </tr>
          <tr className="border-t border-[#ffe50080]">
            <td>
              <input
                type="checkbox"
                className="mr-9 w-4 h-4 text-blue-600 bg-transparent border-white rounded"
              />
            </td>
            <td>
              <div className="flex flex-row items-center space-x-3">
                <img
                  src={Rectangle}
                  alt="video"
                  className="h-[6rem] w-[15rem]"
                />
                <div className="flex flex-col">
                  <p className="text-left">
                    JAVASCRIPT CRASH COURSE FOR BEGINNERS
                  </p>
                  <div className="flex space-x-4">
                    <FaStar className="text-[#FFE500]" />
                    <FaStar className="text-[#FFE500]" />
                    <FaStar className="text-[#FFE500]" />
                    <FaStar className="text-[#FFE500]" />
                    <FaStar className="text-[#FFE500]" />
                  </div>
                </div>
              </div>
            </td>
            <td>PUBLIC</td>
            <td>
              <div>
                <Upload />
              </div>
            </td>
            <td>
              <p>10 APRIL 2025</p>
              <p>PUBLISHED</p>
            </td>
            <td>200K</td>
            <td>3.5K</td>
            <td>0</td>
            <td></td>
          </tr>
          <tr className="border-t border-[#ffe50080]">
            <td>
              <input
                type="checkbox"
                className="mr-9 w-4 h-4 text-blue-600 bg-transparent border-white rounded"
              />
            </td>
            <td>
              <div className="flex flex-row items-center space-x-3">
                <img
                  src={Rectangle}
                  alt="video"
                  className="h-[6rem] w-[15rem]"
                />
                <div className="flex flex-col">
                  <p className="text-left">
                    JAVASCRIPT CRASH COURSE FOR BEGINNERS
                  </p>
                  <div className="flex space-x-4">
                    <FaStar className="text-[#FFE500]" />
                    <FaStar className="text-[#FFE500]" />
                    <FaStar className="text-[#FFE500]" />
                    <FaStar className="text-[#FFE500]" />
                    <FaStar className="text-[#FFE500]" />
                  </div>
                </div>
              </div>
            </td>
            <td>PUBLIC</td>
            <td>
              <div>
                <Upload />
              </div>
            </td>
            <td>
              <p>10 APRIL 2025</p>
              <p>PUBLISHED</p>
            </td>
            <td>200K</td>
            <td>3.5K</td>
            <td>0</td>
            <td></td>
          </tr>
          <tr className="border-t border-[#ffe50080]">
            <td>
              <input
                type="checkbox"
                className="mr-9 w-4 h-4 text-blue-600 bg-transparent border-white rounded"
              />
            </td>
            <td>
              <div className="flex flex-row items-center space-x-3">
                <img
                  src={Rectangle}
                  alt="video"
                  className="h-[6rem] w-[15rem]"
                />
                <div className="flex flex-col">
                  <p className="text-left">
                    JAVASCRIPT CRASH COURSE FOR BEGINNERS
                  </p>
                  <div className="flex space-x-4">
                    <FaStar className="text-[#FFE500]" />
                    <FaStar className="text-[#FFE500]" />
                    <FaStar className="text-[#FFE500]" />
                    <FaStar className="text-[#FFE500]" />
                    <FaStar className="text-[#FFE500]" />
                  </div>
                </div>
              </div>
            </td>
            <td>PUBLIC</td>
            <td>
              <div>
                <Upload />
              </div>
            </td>
            <td>
              <p>10 APRIL 2025</p>
              <p>PUBLISHED</p>
            </td>
            <td>200K</td>
            <td>3.5K</td>
            <td>0</td>
            <td></td>
          </tr>
          <tr className="border-t border-[#ffe50080]">
            <td>
              <input
                type="checkbox"
                className="mr-9 w-4 h-4 text-blue-600 bg-transparent border-white rounded"
              />
            </td>
            <td>
              <div className="flex flex-row items-center space-x-3">
                <img
                  src={Rectangle}
                  alt="video"
                  className="h-[6rem] w-[15rem]"
                />
                <div className="flex flex-col">
                  <p className="text-left">
                    JAVASCRIPT CRASH COURSE FOR BEGINNERS
                  </p>
                  <div className="flex space-x-4">
                    <FaStar className="text-[#FFE500]" />
                    <FaStar className="text-[#FFE500]" />
                    <FaStar className="text-[#FFE500]" />
                    <FaStar className="text-[#FFE500]" />
                    <FaStar className="text-[#FFE500]" />
                  </div>
                </div>
              </div>
            </td>
            <td>PUBLIC</td>
            <td>
              <div>
                <Upload />
              </div>
            </td>
            <td>
              <p>10 APRIL 2025</p>
              <p>PUBLISHED</p>
            </td>
            <td>200K</td>
            <td>3.5K</td>
            <td>0</td>
            <td></td>
          </tr>
          <tr className="border-t border-[#ffe50080]">
            <td>
              <input
                type="checkbox"
                className="mr-9 w-4 h-4 text-blue-600 bg-transparent border-white rounded"
              />
            </td>
            <td>
              <div className="flex flex-row items-center space-x-3">
                <img
                  src={Rectangle}
                  alt="video"
                  className="h-[6rem] w-[15rem]"
                />
                <div className="flex flex-col">
                  <p className="text-left">
                    JAVASCRIPT CRASH COURSE FOR BEGINNERS
                  </p>
                  <div className="flex space-x-4">
                    <FaStar className="text-[#FFE500]" />
                    <FaStar className="text-[#FFE500]" />
                    <FaStar className="text-[#FFE500]" />
                    <FaStar className="text-[#FFE500]" />
                    <FaStar className="text-[#FFE500]" />
                  </div>
                </div>
              </div>
            </td>
            <td>PUBLIC</td>
            <td>
              <div>
                <Upload />
              </div>
            </td>
            <td>
              <p>10 APRIL 2025</p>
              <p>PUBLISHED</p>
            </td>
            <td>200K</td>
            <td>3.5K</td>
            <td>0</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Projects;
