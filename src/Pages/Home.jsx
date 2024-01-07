import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import logo from "../Components/logo.jpg";
import { motion as m } from "framer-motion";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "../Style/Home.css";
import Railway_Station from "../Station_data";
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
          style={{ "@media(max-width:720px)": { flexDirection: "column" } }}
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
            <p>
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
                option.properties.name === value.properties.name
              }
              options={options}
              loading={loading}
              autoHighlight
              getOptionLabel={(option) => option.properties.name}
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
                  <h3 style={{ margin: "0px" }}>
                    {" "}
                    {option.properties.name} - {option.properties.code}
                  </h3>
                  <p
                    style={{
                      fontFamily: "cursive",
                      fontWeight: "600",
                      margin: "0px",
                    }}
                  >
                    {option.properties.state}
                  </p>
                </Box>
              )}
              renderInput={(params) => (
                <TextField
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
                    endAdornment: (
                      <React.Fragment>
                        {loading ? (
                          <CircularProgress color="inherit" size={20} />
                        ) : null}
                        {params.InputProps.endAdornment}
                      </React.Fragment>
                    ),
                    // autoComplete: "new-password",
                  }}
                />
              )}
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
                option.properties.name === value.properties.name
              }
              options={options}
              loading={loading1}
              autoHighlight
              getOptionLabel={(option) => option.properties.name}
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
                  <h3 style={{ margin: "0px" }}>
                    {" "}
                    {option.properties.name} - {option.properties.code}
                  </h3>
                  <p
                    style={{
                      fontFamily: "cursive",
                      fontWeight: "600",
                      margin: "0px",
                    }}
                  >
                    {option.properties.state}
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
                    endAdornment: (
                      <React.Fragment>
                        {loading1 ? (
                          <CircularProgress color="inherit" size={20} />
                        ) : null}
                        {params.InputProps.endAdornment}
                      </React.Fragment>
                    ),
                  }}
                />
              )}
            />
          </div>

          <div className="S2">
            <LocalizationProvider  dateAdapter={AdapterDayjs}>
              <DemoContainer  components={["DatePicker"]}>
                <DatePicker sx={{ width: "30vw" }} label={<p style={
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
                value={categories}
                label="Categories"
                onChange={handleChange}
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
                value={Classes}
                label="classes"
                onChange={handleChange1}
              >
                <MenuItem value={"Anubhuti Class (EA)"}>
                  Anubhuti Class (EA)
                </MenuItem>
                <MenuItem value={"AC First Class (1A)"}>
                  AC First Class (1A)
                </MenuItem>
                <MenuItem value={"Vistadome AC (EV)"}>
                  Vistadome AC (EV)
                </MenuItem>
                <MenuItem value={"Exec. Chair Car (EC)"}>Exec. Chair Car (EC)</MenuItem>
                <MenuItem value={"AC 2 Tier (2A)"}>AC 2 Tier (2A)</MenuItem>
                <MenuItem value={"First Class (FC)"}>First Class (FC)</MenuItem>
                <MenuItem value={"AC 3 Tier (3A)"}>AC 3 Tier (3A)</MenuItem>
                <MenuItem value={"Vistadome Non AC (VS)"}>Vistadome Non AC (VS)</MenuItem>
                <MenuItem value={"Second Sitting (2S)"}>Second Sitting (2S)</MenuItem>
                <MenuItem value={"AC Chair car (CC)"}>AC Chair car (CC)</MenuItem>
                <MenuItem value={"Sleeper (SL)"}>Sleeper (SL)</MenuItem>
                <MenuItem value={"AC 3 Economy (3E)"}>AC 3 Economy (3E)</MenuItem>
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
        >
          Search
        </Button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
