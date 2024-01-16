import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "../Style/profile.css";
import LogoutIcon from "@mui/icons-material/Logout";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { auth, db } from "../Config/Irctc_booking";
import { signOut } from "firebase/auth";
import { getDocs, collection, addDoc,updateDoc, where,query,doc } from "firebase/firestore";
import { useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { motion } from "framer-motion";
//  const Uid=auth.currentUser.uid;
const Profile = () => {
  const [update1,setUpdate]=useState(false);
  const [userid,setuserId]=useState("");
  const [profileData, setData] = useState({
    username: "guest",
    email: "guest@abc.com",
    firstname: "guest",
    middlename: "guest",
    lastname: "guest",
    gender: "male",
    phoneNo: 9999999999,
    state: "Gujarat",
    date: "2024-01-01",
  });
  const[loading,setloading]=useState(false);


  

  function handlechange(e) {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    console.log(profileData);
  }
 
 
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const uid = user.uid;
        const userRef = collection(db, 'User_data');
        const userSnapshot = await getDocs(query(userRef, where('userID', '==', uid)));

        if (!userSnapshot.empty) {
          const userData = userSnapshot.docs[0].data();
          setUpdate(true);
          setData(userData.profileData);
          setuserId(userSnapshot.docs[0].id);
        }

        setloading(true);
      } else {
        
        setloading(true);
      }
    });

    return () => unsubscribe();

  }, []);

  async function update()
  {
    if(update1)
    {
        const userDoc=doc(db,"User_data",userid);
        try{
          await updateDoc(userDoc, {
            profileData,
          });
          alert("Update Successful!");
          
        }
        catch(err)
        {
          alert(err.code);
          console.error(err);
        }
    }
    else
    {
      const userRef=collection(db,"User_data");

      try{
      
        await addDoc(userRef, {
         profileData,
         userID:auth?.currentUser?.uid,
        });
        alert("Update Successful!");
        
      }
      catch(err)
      {
        alert(err.code);
        console.error(err);
      }
    }
    
  }


async  function signout()
  {
    try {
      await signOut(auth);
      window.location.href = "/signin";
    } catch (err) {
      alert(err.code);
    }
  }
  return (
    <>
      <Navbar />{loading?(<motion.div
      
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }} className="Profile">
        <div className="P2">
          <Card sx={{ maxWidth: "30vw", marginTop: 5, boxShadow: 20 }}>
            <CardMedia
              sx={{ height: "40vh", width: "30vw" }}
              image="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                User Name :
                {profileData.username}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Email :
                {profileData.email}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Contact No :
                {profileData.phoneNo
                  }
              </Typography>
            </CardContent>
          </Card>

          <div className="P1">
            <h1>Profile</h1>
            <TextField
              sx={{ width: "30vw" }}
              id="outlined-textarea"
              label="First Name"
              name="firstname"
              defaultValue={profileData.firstname}
              onChange={handlechange}
              // placeholder="Placeholder"
              multiline
            />
            <TextField
              sx={{ width: "30vw" }}
              id="outlined-textarea"
              label="Middle Name"
              name="middlename"
              defaultValue={profileData.middlename}
              onChange={handlechange}
              // placeholder="Placeholder"
              multiline
            />
            <TextField
              sx={{ width: "30vw" }}
              id="outlined-textarea"
              label="Last Name"
              name="lastname"
              defaultValue={profileData.lastname}
              onChange={handlechange}
              // placeholder="Placeholder"
              multiline
            />
            <TextField
              sx={{ width: "30vw" }}
              id="outlined-textarea"
              label="User Name"
              name="username"
              defaultValue={profileData.username}
              onChange={handlechange}
              // placeholder="Placeholder"
              multiline
            />

            <TextField
              sx={{ width: "30vw" }}
              id="outlined-textarea"
              label="Email"
              name="email"
              defaultValue={profileData.email}
              onChange={handlechange}
              // placeholder="Placeholder"
              multiline
            />

            <FormControl sx={{ width: "30vw", fontFamily: "cursive" }}>
              <InputLabel
                sx={{ color: "Highlight", fontWeight: "600" }}
                id="demo-simple-select-label"
              >
                Gender
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={ profileData.gender}
                // placeholder={}
                label="Gender"
                name="gender"
                onChange={handlechange}
                // onChange={}
              >
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
                <MenuItem value={"other"}>Other</MenuItem>
              </Select>
            </FormControl>

            <TextField
              sx={{ width: "30vw", fontSize: "2vh" }}
              id="outlined-textarea"
              label="Date of Birth"
              type="date"
              name="date"
              defaultValue={profileData.date}
              onChange={handlechange}
              placeholder="Placeholder"
            />
            <TextField
              sx={{ width: "30vw" }}
              id="outlined-textarea"
              label="Phone No."
              type="number"
              name="phoneNo"
              defaultValue={profileData.phoneNo}
              onChange={handlechange}
              // placeholder="Placeholder"
            />

            <TextField
              sx={{ width: "30vw" }}
              id="outlined-textarea"
              label="State"
              name="state"
              defaultValue={profileData.state}
              onChange={handlechange}

              // placeholder="Placeholder"
            />
            <div
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                gap: "2vw",
              }}
            >
              <Button
                sx={{
                  width: "10vw",
                  height: "5vh",
                  fontFamily: "Ubuntu, sans-serif",
                  fontSize: "1vw",
                  borderRadius: "20px",
                }}
                variant="contained"
                onClick={update}
              >
                Update
              </Button>
              <Button
                sx={{
                  width: "11vw",
                  height: "5vh",
                  fontFamily: "Ubuntu, sans-serif",
                  fontSize: "0.9vw",
                  background: "red",
                  borderRadius: "20px",
                }}
                variant="contained"
                onClick={signout}
              >
                Sign out <LogoutIcon sx={{ marginLeft: "1vw" }} />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>):( <Box sx={{ display: 'flex',height:"60vh",width:"100vw",justifyContent:"center",alignItems:"center" }}>
      <CircularProgress sx={{fontSize:"30vh"}} />
    </Box>)}
      
      <Footer />
    </>
  );
};

export default Profile;
