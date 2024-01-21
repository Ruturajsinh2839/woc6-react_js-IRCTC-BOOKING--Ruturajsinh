import React from "react";
import "../Style/Footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import DiamondIcon from "@mui/icons-material/Diamond";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  return (
    <>
      <div id="footer">
        <div className="f1">
          <span>Get connected with us on social networks:</span>
          <div>
            <a href="#">
              <LinkedInIcon sx={{ fontSize: "3vw", color: "black" }} />
            </a>
            <a href="#">
              <GitHubIcon sx={{ fontSize: "3vw", color: "black" }} />
            </a>
            <a href="#">
              <InstagramIcon sx={{ fontSize: "3vw", color: "black" }} />
            </a>
            {/* <a href="#"><i class="fa fa-linkedin"></i></a> */}
          </div>
        </div>
        <div className="f2">
          <div className="woc">
            <h2>
              <DiamondIcon sx={{ fontSize: "2.5vw" }} /> Winter Of Code
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              maxime quam quas reprehenderit. Rerum ipsa consequuntur eligendi
              quas ex sed laborum maiores. Cumque, ea accusamus quis qui
              corrupti praesentium distinctio.
            </p>
          </div>
          <div className="contact">
            <h2>Contact</h2>
            <p>
              <HomeIcon /> Daiict
            </p>
            <p>
              <EmailIcon /> 202101146@daiict.ac.in
            </p>
            <p>
              <CallIcon /> +91 8799364279
            </p>
          </div>
        </div>
        <div className="f3">
          <footer>IRCTC BOOKING@2024</footer>
        </div>
      </div>
    </>
  );
}

export default Footer;
