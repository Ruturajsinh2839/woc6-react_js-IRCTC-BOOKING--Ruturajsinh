import React ,{useState}from "react";
import LockPersonRoundedIcon from "@mui/icons-material/LockPersonRounded";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import Button from "@mui/material/Button";
import "../Style/Sign_in.css";
import { motion } from "framer-motion";
import { auth } from "../Config/Irctc_booking";
import { signInWithEmailAndPassword } from "firebase/auth";

function SignIn() {

  const [user,setUser]=useState(
    {email:"",password:""}
  );

  function handlechange(event) {
    const { name, value } = event.target;

    setUser((prev) => {
      return { ...prev, [name]: value };
    });
    
  }
  
  // if(auth?.currentUser===null)
  // {
  //   window.location.href="/signin";
  // }
  // else
  // {
  //   window.location.href="/";
  // }

  async function Sign_IN()
  {
    try{
      const respose= await signInWithEmailAndPassword(auth, user.email, user.password);
      window.location.href="/";
    }
    catch(err)
    {
      alert(err.code);
    }
  }
  return (
    <>
      <motion.div  animate={{ x: 20 }}
 transition={{ type: "spring", stiffness: 100 }} className="SignInC1"> </motion.div>
      <motion.div
    //   animate={{ x:100}}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1, x:"-50%", y:"-50%", }}
    transition={{
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01]
    }}
    //   initial={{ x: "-100vh" }}
    //   
       id="SignIn">
       
        <LockPersonRoundedIcon sx={{ fontSize: "9vh", color: "#0A2647" }} />
        
        
        <h1>Sign In</h1>

        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle
            sx={{ fontSize: "4vh", color: "#0A2647", mr: 1, my: 0.5 }}
          />
          <TextField
            sx={{ width: "20vw", color: "white" }}
            id="input-with-sx"
            label="Email"
            variant="standard"
            onChange={handlechange}
            name="email"
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <KeyIcon sx={{ fontSize: "4vh", color: "#0A2647", mr: 1, my: 0.5 }} />
          <TextField
            sx={{ width: "20vw" }}
            id="input-with-sx"
            label="Password"
            variant="standard"
            onChange={handlechange}
            type="password"
            name="password"
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
          onClick={Sign_IN}
        >
          Sign In
        </Button>

        <span>
          Do'nt have an Account ? <a href="/signup">SIGNUP</a>
        </span>
      </motion.div>
    </>
  );
}

export default SignIn;
