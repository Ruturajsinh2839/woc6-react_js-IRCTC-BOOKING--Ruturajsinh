import React from "react";
import LockPersonRoundedIcon from "@mui/icons-material/LockPersonRounded";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import Button from "@mui/material/Button";
import "../Style/Sign_in.css";
import { motion } from "framer-motion";

function SignUp() {
  return (
    <>
      <motion.div  animate={{ x: 20 }}
 transition={{ type: "spring", stiffness: 100 }} className="SignInC1"> </motion.div>
      <motion.div
    //   animate={{ x:100}}
    animate={{ x:-250, y:-250 }}
    transition={{ type: "spring", stiffness: 100 }}
    //   initial={{ x: "-100vh" }}
    //   
       id="SignIn">
       
        <LockPersonRoundedIcon sx={{ fontSize: "9vh", color: "#0A2647" }} />
        
        
        <h1>Create Account</h1>

        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle
            sx={{ fontSize: "4vh", color: "#0A2647", mr: 1, my: 0.5 }}
          />
          <TextField
            sx={{ width: "20vw", color: "white" }}
            id="input-with-sx"
            label="Email"
            variant="standard"
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <KeyIcon sx={{ fontSize: "4vh", color: "#0A2647", mr: 1, my: 0.5 }} />
          <TextField
            sx={{ width: "20vw" }}
            id="input-with-sx"
            label="Password"
            variant="standard"
            type="password"
          />
        </Box>

        <Button
          sx={{
            width: "14vw",
            height: "6vh",
            fontFamily: "cursive",
            fontSize: "1.2vw",
            borderRadius: "20px",
          }}
          variant="contained"
        >
          Sign Up
        </Button>

        <span>
         Have an Account ? <a href="/signin">SIGNIN</a>
        </span>
      </motion.div>
    </>
  );
}

export default SignUp;
