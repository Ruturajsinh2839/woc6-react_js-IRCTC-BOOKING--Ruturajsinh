import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { Button } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import PaidIcon from '@mui/icons-material/Paid';
import "../Style/list.css";

function List_Ticket(props)
{
    const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
    return <>
    <div style={{marginBottom:"20px",}}>
        <ListItemButton sx={{backgroundColor:"#2C74B3",width:"90vw",borderRadius:"20px"}}onClick={handleClick}>
        <h2 style={{margin:"0px",marginRight:"10px",}}>{props.index}</h2>
          <ListItemIcon>
            
            <img
              style={{ height: "5vh" }}
              src="https://cdn-icons-png.flaticon.com/512/494/494724.png"
              alt="ticket"
            />
          </ListItemIcon>
          <div className="B1">
            
            <p>From :{props.from_station_name}</p>
            <p>To:{props.to_station_name}</p>
            <p>Date:{props.train_date}</p>
            <p>Train:{props.train_number}</p>
            {props.paid ? (
              <p style={{ backgroundColor: "green",marginRight:"10vw" }}>PAID</p>
            ) : (
              <p style={{ backgroundColor: "red",marginRight:"10vw" }}>UN PAID</p>
            )}
          </div>
          {/* <ListItemText primary={<div</div>} />
        <ListItemText primary={<div><p>To:{props.to_station_name}</p></div>}  />
        <ListItemText primary={<div><p>Date:{props.train_date}</p></div>} />
        <ListItemText primary={<div><p>Train:{props.train_number}</p></div>} /> */}
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List
            sx={{
              padding: "20px",
              border: "3px solid black",
              borderRadius: "40px",
            }}
            component="div"
            disablePadding
          >
            <div className="B2">
              {/* <ListItemText primary="Train Name" secondary={props.train_name} /><ListItemText primary={props.train_name}/> */}

                <table style={{width:"100%",fontFamily:"cursive",fontSize:"3vh"}}>
                <tr>
                    <td>Train Name </td>
                    <td>: {props.train_name }</td>
                </tr>
                <tr>
                    <td>From  </td>
                    <td>: {props.from_station_name}</td>
                </tr>
                <tr>
                    <td>To </td>
                    <td>: {props.to_station_name }</td>
                </tr>
                <tr>
                    <td>Date  </td>
                    <td>: {props.train_date}</td>
                </tr>
                <tr>
                    <td>Train Number  </td>
                    <td>: {props.train_number}</td>
                </tr>
                <tr>
                    <td>Category  </td>
                    <td>: {props.category}</td>
                </tr>
                <tr>
                    <td>All Classes</td>
                    <td>: {props.allclasses}</td>
                </tr>
                <tr>
                    <td>Ac Chair Car </td>
                    <td>: {props.class_type.includes("CC")?"Yes":"No" }</td>
                </tr>
                <tr>
                    <td>ExecChair Car </td>
                    <td>: {props.class_type.includes("EC")?"Yes":"No" }</td>
                </tr>
                <tr>
                    <td>Ac 1 Tier </td>
                    <td>: {props.class_type.includes("1A")?"Yes":"No" }</td>
                </tr>
                
                <tr>
                    <td>Ac 2 Tier</td>
                   <td>:  {props.class_type.includes("2A")?"Yes":"No" }</td> 
                </tr>

                <tr>
                    <td>Ac 3 Tier</td>
                   <td>:  {props.class_type.includes("3A")?"Yes":"No" }</td> 
                </tr>

                <tr>
                    <td>First Class</td>
                   <td>:  {props.class_type.includes("FC")?"Yes":"No" }</td> 
                </tr>

                <tr>
                    <td>Second Setting</td>
                   <td>:  {props.class_type.includes("2S")?"Yes":"No" }</td> 
                </tr>

                <tr>
                    <td>Sleeper</td>
                   <td>:  {props.class_type.includes("SL")?"Yes":"No" }</td> 
                </tr>
                <tr>
                    <td>AC 3 Economy </td>
                   <td>:  {props.class_type.includes("3E")?"Yes":"No" }</td> 
                </tr>
                <tr>
                    <td>Price</td>
                    <td>:{props.price}Rs</td>
                </tr>

                </table>
               
            </div>
            <div className="B3">
              {props.paid?( <Button
          sx={{
            width: "15vw",
            height: "6vh",
            fontFamily: "cursive",
            fontSize: "1.2vw",
            borderRadius: "10px",
            marginTop:"10px",
            backgroundColor:"red",
            marginBottom:"10px"
          }}
          variant="contained"
        //   onClick={handlesubmit}
        >
          Cancel Ticket <CancelIcon />
        </Button>):( <Button
          sx={{
            width: "15vw",
            height: "6vh",
            fontFamily: "cursive",
            fontSize: "1.2vw",
            borderRadius: "10px",
            marginTop:"10px",
            backgroundColor:"#22B14C",
            marginBottom:"10px"
          }}
          variant="contained"
        //   onClick={handlesubmit}
        >
          PAID  <PaidIcon />
        </Button>)}
           
            </div>
          </List>
        </Collapse>
        </div>
    </>
}

export default List_Ticket;