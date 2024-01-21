import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import List_Ticket from "../Components/List_Ticket";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { db, auth } from "../Config/Irctc_booking";
import { getDocs, collection, query, where } from "firebase/firestore";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import { motion } from "framer-motion";
function Book_list() {
  // const location = useLocation();
  const [book, setBook] = useState([]);
  const [loading, setloading] = useState(false);
  const TicketRef = query(
    collection(db, "Ticket_book"),
    where("userID", "==", auth?.currentUser?.uid)
  );
  useEffect(() => {
    const getTicket = async () => {
      try {
        const data = await getDocs(TicketRef);
        const filterdata = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log("Filtered Data", filterdata);
        setBook(filterdata);
        setloading(true);
      } catch (err) {
        console.error(err);
      }
    };
    getTicket();
  }, []);
  console.log(book);

  return (
    <>
      <Navbar />

      <div style={{ height: "100%" }} className="Book_list">
        <h1>BOOK LIST</h1>
        {loading ? (
          book.length !== 0 ? (
            book.map((e, index) => (
              <motion.div
                className="box"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <List_Ticket
                  index={index + 1}
                  id={e.id}
                  train_name={e.train_name}
                  train_number={e.train_number}
                  train_date={e.train_date}
                  class_type={e.class_type}
                  to_station_name={e.to_station_name}
                  from_station_name={e.from_station_name}
                  allclasses={e.allclasses}
                  paid={e.paid}
                  category={e.category}
                  price={e.price}
                />
              </motion.div>
            ))
          ) : (
            <>
              <motion.div
                className="box"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <Card sx={{ maxWidth: "30vw", marginTop: 5, boxShadow: 20 }}>
                  <CardMedia
                    sx={{ height: "40vh", width: "30vw" }}
                    image="https://assets.materialup.com/uploads/3bb5bf77-24cf-464b-bb0c-415cca344095/preview.jpg"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      No Booked Ticket
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Book Your Ticket Now
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </>
          )
        ) : (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Book_list;
