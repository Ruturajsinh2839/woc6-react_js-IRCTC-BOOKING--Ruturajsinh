import React from "react";
import { FaReact } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { BiSolidFileCss } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Style/aboutus.css";
function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="aboutus">
        <div className="A1">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis esse
            fugit nesciunt molestiae blanditiis reprehenderit a optio, rerum
            tempore tempora sed sunt cum maiores vitae illum, adipisci accusamus
            obcaecati similique.
          </p>
        </div>
        <div className="A3">
          <div className="aboutMe">
            <h1>Intro</h1>
            <p>Ruturajsinh Chauhan</p>
            <p>B.Tech(ICT)</p>
            <p>Student at DA-IICT</p>
          </div>
          <div className="A2">
            <h1> Tech, Stack Used</h1>
            <div className="Techstack">
              <div>
                <FaReact /> <h1>React</h1>
              </div>
              <div>
                <SiMui /> <h1>Material UI</h1>
              </div>
              <div>
                <IoLogoFirebase />
                <h1>Firebase</h1>
              </div>
              <div>
                <FaHtml5 /> <h1>HTML</h1>
              </div>
              <div>
                <BiSolidFileCss />
                <h1>css</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
