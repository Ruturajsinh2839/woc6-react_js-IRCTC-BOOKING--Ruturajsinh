import React from "react";
import "../Style/Navbar.css";
import "./logo.jpg";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';


function Navbar()
{
    return <>
     <div id="nav">
           <div className="c1">
                 <img src="https://t4.ftcdn.net/jpg/03/96/55/37/360_F_396553788_2cr0reSShNVDmpkvjkGMknVJ9CdrCVx5.jpg" rel="logo"/>
                 <h1> IRCTC </h1>
               </div> 
           
            
            <div className="c2">
                <a href="#">Home </a>
                <a href="#">Book List</a>
                <a href="#">About us</a>
               <AccountCircleRoundedIcon sx={{fontSize:"50px",":hover":{fontSize:"70px",color:"#2C74B3"}}}/>
                </div>

           
     </div>
    </>
}


export default Navbar;