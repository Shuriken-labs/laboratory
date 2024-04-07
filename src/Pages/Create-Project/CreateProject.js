import React from "react";
import createupload from "../../assets/createupload.png";
import Rectangle from "../../assets/Rectangle.png";
import { Container, Row, Col } from "reactstrap";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const CreateProject = () => {
  return (
    <Container fluid>
      <Row className="__create_project_upload">
        <Col>
          <img src={createupload} alt="upload" className="w-10 h-15 mx-auto" />
          <h1 className="text-white font-semibold">Create a Project</h1>
        </Col>
      </Row>
      <Row>
        <Col className=" __create_project_title">
          <h1>Recent Uploads</h1>
        </Col>
      </Row>
      <Row className="md:flex justify-center items-center space-x-8 mt-[4rem] space-y-6 md:space-y-0">
        <Col className="__create_project_content">
          <img
            src={Rectangle}
            alt="upload"
            className="w-[19rem] mx-auto h-[12rem] md:h-auto md:w-auto"
          />
          <div className="md:px-4 px-8">
            <h1 className="text-[#FFE500] text-xl font-bold ">Course Title</h1>
            <p className="text-white">Inspiration</p>
            <div className="flex space-x-3">
              <p className="text-white">4.5</p>
              <div className="flex">
                <FaStar className="text-[#FFE500]" />
                <FaStar className="text-[#FFE500]" />
                <FaStar className="text-[#FFE500]" />
                <FaStar className="text-[#FFE500]" />
                <FaStar className="text-[#FFE500]" />
              </div>
            </div>
          </div>
        </Col>
        <Col className="__create_project_content">
          <img
            src={Rectangle}
            alt="upload"
            className="w-[19rem] mx-auto h-[12rem] md:h-auto md:w-auto"
          />
          <div className="px-4">
            <h1 className="text-[#FFE500] text-xl font-bold ">Course Title</h1>
            <p className="text-white">Inspiration</p>
            <div className="flex space-x-3">
              <p className="text-white">4.5</p>
              <div className="flex">
                <FaStar className="text-[#FFE500]" />
                <FaStar className="text-[#FFE500]" />
                <FaStar className="text-[#FFE500]" />
                <FaStar className="text-[#FFE500]" />
                <FaStarHalfAlt className="text-[#FFE500]" />
              </div>
            </div>
          </div>
        </Col>
        <Col className="__create_project_content">
          <img
            src={Rectangle}
            alt="upload"
            className="w-[19rem] mx-auto h-[12rem] md:h-auto md:w-auto"
          />

          <div className="px-4">
            <h1 className="text-[#FFE500] text-xl font-bold ">Course Title</h1>
            <p className="text-white">Inspiration</p>
            <div className="flex space-x-3">
              <p className="text-white">4.5</p>
              <div className="flex">
                <FaStar className="text-[#FFE500]" />
                <FaStar className="text-[#FFE500]" />
                <FaStar className="text-[#FFE500]" />
                <FaStar className="text-[#FFE500]" />
                <FaStar className="text-[#FFE500]" />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="__create_project_footer">
        <Col>
          <h2 className="_irish py-4 md:text-2xl text-[1rem] font-bold">
            UNLOCK ALL PINS TO JOIN OUR EXCLUSIVE DISCORD CHANNEL
          </h2>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateProject;
