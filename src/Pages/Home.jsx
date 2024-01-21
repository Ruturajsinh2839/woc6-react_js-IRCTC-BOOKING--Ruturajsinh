import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import logo from "../Components/logo.jpg";
import { motion as m } from "framer-motion";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "../Style/Home.css";
import Railway_Station from "../RailwayStations.js";
import NearMeIcon from "@mui/icons-material/NearMe";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import CircularProgress from "@mui/material/CircularProgress";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CategoryIcon from '@mui/icons-material/Category';
import { Button } from "@mui/material";
import Axios from "axios";
import Ticket from "../Components/Ticket";
import T1 from "../Ticket.js";
import { auth } from "../Config/Irctc_booking.js";
import dayjs from "dayjs";
// import React, { useEffect, useState } from "react";
// const rail = require("indian-rail-api");

function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

function Home() {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;
  const loading1 = open1 && options.length === 0;
  const [categories, setCategories] = React.useState("");
  const [Classes,setClasses]=React.useState("");
  const [lod1,setlod]=React.useState(false);
  const [date1, setDate] = useState(new Date());
  const [data, setData] = React.useState({
    from:"",
    to:"",
    date:"",
    category:"",
    allclasses:"",
  });
  const handleOptionSelect = (event, value) => {
    // Handle the selected option, you can set it to state or perform any other action
    data.to=value.code;
  };

  const handleOptionSelect1 = (event, value) => {
    // Handle the selected option, you can set it to state or perform any other action
    data.from=value.code;
  };
 
 const [h,setdata]=React.useState([]);
  // const h=T1.data;
  
  function handledata(e)
  {
    console.log(e.target);
    const {name,value}=e.target;
    
    
    setData((prev)=>{
      return {...prev,[name]:value}
    });
    console.log(data);

  }
  const handleDateChange = (date) => {
    console.log('Selected Date:', date);
    // setDate(dayjs(date).format('DD-MM-YYYY'));
    data.date=dayjs(date).format('YYYY-MM-DD');
    console.log(data);
  };


  
 




async function handlesubmit(){
const R = {
  method: 'GET',
  url: 'https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations',
  params: {
    fromStationCode: data.from,
    toStationCode: data.to,
    dateOfJourney: data.date
  },
   headers: {
 'X-RapidAPI-Key': process.env.REACT_APP_X_Rapid_API_Key,
 'X-RapidAPI-Host': process.env.REACT_APP_X_Rapid_API_Host   }
};

try {
	const response = await Axios.request(R);
  console.log(response.data.data);
	setdata(response.data.data);
  setlod(true);
} catch (error) {
	console.error(error);
}
// setlod(true);


}
  const handleChange = (event) => {
    setCategories(event.target.value);
  };
  const handleChange1 = (event) => {
    setClasses(event.target.value);
  };
  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        setOptions([...Railway_Station]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    let active = true;

    if (!loading1) {
      return undefined;
    }
    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        setOptions([...Railway_Station]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading1]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  React.useEffect(() => {
    if (!open1) {
      setOptions([]);
    }
  }, [open1]);

 

  return (
    <>
   
      <Navbar />
     
      <div className="Home">
        <m.div
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="welcome"
          style={{ "@media(maxWidth:720px)": { flexDirection: "column" } }}
        >
          <m.div
            className="w1"
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <h1>Welcome</h1>
            <p style={{fontFamily: 'Merriweather',fontWeight:"400",padding:"20px"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex animi asperiores voluptates atque cum placeat
              corrupti id nulla culpa reiciendis eaque praesentium, totam itaque
              nemo, odit nihil quam consequatur?
            </p>
          </m.div>
          <m.div
            className="w2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <img src={logo} alt="logo" />
          </m.div>
        </m.div>

        <div className="S1">
        <h1>Search Your Journy</h1>
        <div className="S3">
          
          <div className="SearchBox">
            <Autocomplete
              // freeSolo
              id="free-solo-2-demo"
              // disableClearable
              open={open}
              onOpen={() => {
                setOpen(true);
              }}
              onClose={() => {
                setOpen(false);
              }}
              isOptionEqualToValue={(option, value) =>
                option.name === value.name
              }
              options={options}
              loading={loading}
              autoHighlight
              getOptionLabel={(option) => option.name}
              renderOption={(props, option) => (
                <Box
                  component="li"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "10px",
                    justifyContent: "start",
                    alignItems: "start",
                    marginBottom: "10px",
                    backgroundColor: "#DCF2F1",
                  }}
                  {...props}
                >
                  <p style={{ margin: "0px" }}>
                    {" "}
                    {option.name} - {option.code}
                  </p>
                  <p
                    style={{
                      fontFamily: "cursive",
                      fontWeight: "600",
                      margin: "0px",
                    }}
                  >
                    {/* {option.properties.state} */}
                  </p>
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                name="from"
                onChange={handledata}
                  id="outlined-start-adornment"
                  sx={{ width: "30vw" }}
                  {...params}
                  label={
                    <p
                      style={{
                        margin: "0px",
                        fontSize: "1.5vw",
                        fontFamily: "cursive",
                        color: "Highlight",
                      }}
                    >
                      <NearMeIcon /> From
                    </p>
                  }
                  inputProps={{
                    ...params.inputProps,
                    endadornment: (
                      <React.Fragment>
                        {loading ? (
                          <CircularProgress color="inherit" size={20} />
                        ) : null}
                        {params.InputProps.endadornment}
                      </React.Fragment>
                    ),
                    // autoComplete: "new-password",
                  }}
                />
              )}
              onChange={handleOptionSelect1}
            />
            <SwapVertIcon
              sx={{
                fontSize: "6vh",
                backgroundColor: "Highlight",
                color: "white",
                borderRadius: "8px",
              }}
            />
            <Autocomplete
              // freeSolo
              id="free-solo-2-demo"
              open={open1}
              onOpen={() => {
                setOpen1(true);
              }}
              onClose={() => {
                setOpen1(false);
              }}
              isOptionEqualToValue={(option, value) =>
                option.name === value.name
              }
              options={options}
              loading={loading1}
              autoHighlight
              getOptionLabel={(option) => option.name}
              renderOption={(props, option) => (
                <Box
                  component="li"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "10px",
                    justifyContent: "start",
                    alignItems: "start",
                    marginBottom: "10px",
                    backgroundColor: "#DCF2F1",
                  }}
                  {...props}
                >
                  <p  name="to" style={{ margin: "0px" }}>
                    {" "}
                    {option.name} - {option.code}
                  </p>
                  <p
                    style={{
                      fontFamily: "cursive",
                      fontWeight: "600",
                      margin: "0px",
                    }}
                  >
                    {/* {option.properties.state} */}
                  </p>
                </Box>
              )}
             
              renderInput={(params) => (
                <TextField
                 
                 
                
                  sx={{ width: "30vw" }}
                  {...params}
                  label={
                    <p
                      style={{
                        margin: "0px",
                        fontSize: "1.5vw",
                        fontFamily: "cursive",
                        color: "Highlight",
                      }}
                    >
                      <LocationOnIcon /> To
                    </p>
                  }
                  
                  inputProps={{
                    ...params.inputProps,
                    endadornment: (
                      <React.Fragment>
                        {loading1 ? (
                          <CircularProgress color="inherit" size={20} />
                        ) : null}
                        {params.InputProps.endadornment}
                      </React.Fragment>
                    ),
                  }}

                />
              )}
              onChange={handleOptionSelect}
            />
          </div>

          <div className="S2">
            <LocalizationProvider   dateAdapter={AdapterDayjs}>
              <DemoContainer  name="date"  components={["DatePicker"]}>
                <DatePicker defaultValue={data.date} onChange={handleDateChange} sx={{ width: "30vw" }} label={<p style={
                  { fontFamily: "cursive",
                  fontWeight: "600",
                  margin: "0px",color:"Highlight"}
                }>Date</p>} disablePast />
              </DemoContainer>
            </LocalizationProvider>

            <FormControl sx={{ width: "30vw",fontFamily:"cursive", }}>
              <InputLabel sx={{ fontFamily:"cursive",color: "Highlight",fontWeight: "600" }} id="demo-simple-select-label"><CategoryIcon sx={{fontSize:"20px"}}/> Categories</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={data.category}
                // placeholder={}
                label="Categories"
                name="category"
                onChange={handledata}
              >
                <MenuItem value={"GENERAL"}>GENERAL</MenuItem>
                <MenuItem value={"LADIES"}>LADIES</MenuItem>
                <MenuItem value={"PERSON WITH DISABILITY"}>
                  PERSON WITH DISABILITY
                </MenuItem>
                <MenuItem value={"DUTY PASS"}>DUTY PASS</MenuItem>
                <MenuItem value={"TATKAL"}>TATKAL</MenuItem>
                <MenuItem value={"PREMIUM TATKAL"}>PREMIUM TATKAL</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ width: "30vw" }}>
              <InputLabel sx={{ fontFamily:"cursive",color: "Highlight",fontWeight: "600" }} id="demo-simple-select-label"><BusinessCenterIcon sx={{fontSize:"20px"}}/> All Classes</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={data.allclasses}
                name="allclasses"
                onChange={handledata}
              >
  
                <MenuItem value={"1A"}>AC First Class (1A)</MenuItem>
                <MenuItem value={"EC"}>Exec. Chair Car (EC)</MenuItem>
                <MenuItem value={"2A"}>AC 2 Tier (2A)</MenuItem>
                <MenuItem value={"FC"}>First Class (FC)</MenuItem>
                <MenuItem value={"3A"}>AC 3 Tier (3A)</MenuItem>
                <MenuItem value={"2S"}>Second Sitting (2S)</MenuItem>
                <MenuItem value={"CC"}>AC Chair car (CC)</MenuItem>
                <MenuItem value={"SL"}>Sleeper (SL)</MenuItem>
                <MenuItem value={"3E"}>AC 3 Economy (3E)</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <Button
          sx={{
            width: "20vw",
            height: "6vh",
            fontFamily: "cursive",
            fontSize: "1.2vw",
            borderRadius: "10px",
            marginTop:"10px",
            marginBottom:"10px"
          }}
          variant="contained"
          onClick={handlesubmit}
        >
          Search
        </Button>
        {lod1?( <div style={{padding:"3vw"}} className="T5">
        {
           h.map((e)=>
            ( e.class_type.includes(data.allclasses)?(<Ticket 
              key ={e.id}
              train_name={e.train_name}
              train_number={e.train_number}
              train_date={e.train_date}
              from_std={e.from_std}
              to_sta={e.to_sta} 
              run_days={e.run_days}
              duration={e.duration}
              class_type={e.class_type}
              to_station_name={e.to_station_name}
              from_station_name={e.from_station_name}
              paid={false}
              allclasses={data.allclasses}
              category={data.category}

              />):(<></>)
              
            ))
          }
        </div>):(<div></div>)}
        </div>
        
       
      </div>

      <Footer />
    </>
  );
}

export default Home;
