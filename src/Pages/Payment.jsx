import React,{useState} from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Button } from "@mui/material";
import {TextField }from "@mui/material";
import { useLocation } from "react-router-dom";
import { db } from "../Config/Irctc_booking";
import { getDocs, collection,addDoc } from "firebase/firestore";
import "../Style/payment.css"
function Payment()
{
    // const location = useLocation();
    // const [book,setBook]=useState(location.state.Ticket);
    // const TicketRef = collection(db, "Ticket_book");
    
    async function Pay()
    {
    //     try{
    //       await addDoc(TicketRef, {
    //         allclasses:book.allclasses,
    //         category:book.category,
    //         class_type:book.class_type,
    //         from_station_name:book.from_station_name,
    //         paid:true,
    //         price:100,
    //         to_station_name:book.to_station_name,
    //         train_number: book.train_number,
    //         train_date:book.train_date,
    //         train_name:book.train_name,
    //       });
    //       alert("Payment Successful!");
    //       window.location.href="/Book_list";
    //     }
    //     catch(err)
    //     {
    //       alert(err.code);
    //       console.error(err);
    //     }
    }
    return <>
    <div>
      <Navbar/>
      <div style={{height:"100vh",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center"}}>
       <div className="Payment">
        <h2>Payment Details</h2>
        <TextField
         sx={{width:"30vw"}}
          id="outlined-textarea"
          label="Card Number"
          // placeholder="Placeholder"
          multiline
        />
<div className="P1">
<TextField
sx={{width:"14vw"}}
          id="outlined-textarea"
          label="Month"
          placeholder="Placeholder"
          multiline
        />

      <TextField
       sx={{width:"14vw"}}
          id="outlined-textarea"
          label="Year"
          placeholder="Placeholder"
          multiline
        />
        </div>

        <TextField
         sx={{width:"30vw",color:"white"}}
          id="outlined-textarea"
          label="CVV"
          placeholder="Placeholder"
          multiline
        />

        <Button
          sx={{
            width: "10vw",
            height: "6vh",
            fontFamily: "cursive",
            fontSize: "1.5vw",
            borderRadius: "20px",
            marginBottom:"10vh"
          }}
          variant="contained"
          onClick={Pay}
        >
          Pay
        </Button>
        </div>
        </div>
        <Footer/>
        </div>
    </>
}


export default Payment;