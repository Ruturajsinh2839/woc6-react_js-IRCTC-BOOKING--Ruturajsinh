import React from "react";
import "../Style/Navbar.css";
import "./logo.jpg";
import { Button } from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { signOut } from "firebase/auth";
import { auth } from "../Config/Irctc_booking";

function Navbar() {

  const handleSignout = async () => {
    try {
      await signOut(auth);
      window.location.href = "/signin";
    } catch (err) {
      alert(err.code);
    }
  };
  return (
    <>
      <div id="nav">
        <div className="c1">
          <img
            src="https://t4.ftcdn.net/jpg/03/96/55/37/360_F_396553788_2cr0reSShNVDmpkvjkGMknVJ9CdrCVx5.jpg"
            rel="logo"
          />
          <h1> IRCTC </h1>
        </div>

        <div className="c2"  >
          <a href="/">Home </a>
          <a href="/Booklist">Book List</a>
          <a href="/aboutus">About us</a>
          <AccountCircleRoundedIcon
            sx={{
              fontSize: "3vw",
              ":hover": {
                fontSize: "4vw",
                color: "#2C74B3",
                borderBottom: "6px solid rgb(0, 162, 255)",
              },
            }}
            onClick={(e)=>(window.location.href="/profile")}
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
