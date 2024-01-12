import React from "react";
import "../Style/Navbar.css";
import "./logo.jpg";
import { Button } from "@mui/material";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { signOut } from "firebase/auth";
import { auth } from "../Config/Irctc_booking";

function Navbar()
{
    const handleSignout = async () =>
    {
        try
        {
            await signOut(auth);
            window.location.href="/signin";
        }
        catch(err)
        {
            alert(err.code);
        }
    }
    return <>
     <div id="nav">
           <div className="c1">
                 <img src="https://t4.ftcdn.net/jpg/03/96/55/37/360_F_396553788_2cr0reSShNVDmpkvjkGMknVJ9CdrCVx5.jpg" rel="logo"/>
                 <h1> IRCTC </h1>
               </div> 
           
            
            <div className="c2">
                <a href="/">Home </a>
                <a href="/Booklist">Book List</a>
                <a href="#">About us</a>
               <AccountCircleRoundedIcon sx={{fontSize:"50px",":hover":{fontSize:"40px",color:"#2C74B3"}}}/>
               <Button
          sx={{
            flex:"1",
            width: "10px",
            height: "6vh",
            fontFamily: "cursive",
            fontSize: "1vw",
            borderRadius: "20px",
          }}
          variant="contained"
          onClick={handleSignout}
        >
          Sign out
        </Button>
                </div>

           
     </div>
    </>
}


export default Navbar;