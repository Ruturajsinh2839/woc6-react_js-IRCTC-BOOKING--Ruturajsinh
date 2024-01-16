import React, { useState } from "react";
import { Button } from "@mui/material";
import TrainIcon from "@mui/icons-material/Train";
import "../Style/Ticket.css";
import AddIcon from "@mui/icons-material/Add";
import { motion as m } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { db,auth } from "../Config/Irctc_booking";
import { getDocs, collection ,query,where} from "firebase/firestore";
import { useEffect } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RemoveIcon from "@mui/icons-material/Remove";

function Ticket(props) {
  const navigate = useNavigate();
  const [book, setBook] = useState([]);
  var ticket_book = [];
  const [loading, setloading] = useState(false);
  const TicketRef = query(collection(db, "Ticket_book"),where("userID","==",auth?.currentUser?.uid));

  useEffect(() => {
    const getTicket = async () => {
      try {
        const data = await getDocs(TicketRef);
        const filterdata = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setBook(filterdata);
        setloading(true);
      } catch (err) {
        console.error(err);
      }
    };
    getTicket();
  }, []);

  book.map((e) => ticket_book.push(e.train_number));

  function handleChange() {
    navigate("/payment", {
      state: { Ticket: props },
    });
  }
  return (
    <>
      <m.div
        className="Ticket"
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="T1">
          <h1>
            {props.train_name} ({props.train_number})
          </h1>
          <div className="T6">
            <p>Run On :</p>
            <p>
              <p
                style={{
                  color: props.run_days.includes("Mod") ? "blue" : "gray",
                }}
              >
                {" "}
                M{" "}
              </p>
              <p
                style={{
                  color: props.run_days.includes("Tue") ? "blue" : "gray",
                }}
              >
                {" "}
                T{" "}
              </p>
              <p
                style={{
                  color: props.run_days.includes("Wed") ? "blue" : "gray",
                }}
              >
                {" "}
                W{" "}
              </p>
              <p
                style={{
                  color: props.run_days.includes("Thu") ? "blue" : "gray",
                }}
              >
                {" "}
                T{" "}
              </p>
              <p
                style={{
                  color: props.run_days.includes("Fri") ? "blue" : "gray",
                }}
              >
                {" "}
                F{" "}
              </p>
              <p
                style={{
                  color: props.run_days.includes("Sat") ? "blue" : "gray",
                }}
              >
                {" "}
                S{" "}
              </p>
              <p
                style={{
                  color: props.run_days.includes("Sun") ? "blue" : "gray",
                }}
              >
                {" "}
                S{" "}
              </p>
            </p>
          </div>
          <Button sx={{ height: "5vh", width: "13vw" }} variant="outlined">
            Train Schedule
          </Button>
        </div>

        <div className="T2">
          <h2>
            {props.from_std} | {props.from_station_name} | {props.train_date}
          </h2>

          <h2>Duration: {props.duration}</h2>
          <h2>
            {props.to_sta} | {props.to_station_name} | {props.train_date}
          </h2>
        </div>

        <div className="T3">
          <h3>Discount on : </h3>
          <div>
            {props.class_type.map((e) => (
              <Button
                style={{ marginRight: "20px", height: "5vh", width: "5vw" }}
                variant="outlined"
              >
                {e}
              </Button>
            ))}
          </div>
        </div>
        <div className="T4">
          {loading ? (
            ticket_book.includes(props.train_number) ? (
              <>
                <Button
                  style={{
                    marginRight: "20px",
                    backgroundColor: "rgba(3, 3, 64, 0.879)",
                    height: "5vh",
                    width: "18vw",
                  }}
                  variant="contained"
                >
                  Remove From Book List <RemoveIcon />
                </Button>

                <Button
                  style={{
                    marginRight: "20px",
                    backgroundColor: "#22B14C",
                    height: "5vh",
                    width: "9vw",
                  }}
                  variant="contained"
                >
                  Book <CheckCircleIcon />
                </Button>
              </>
            ) : (
              <>
                <Button
                  style={{
                    marginRight: "20px",
                    backgroundColor: "rgba(3, 3, 64, 0.879)",
                    height: "5vh",
                    width: "18vw",
                  }}
                  variant="contained"
                >
                  Add To Book List <AddIcon />
                </Button>

                <Button
                  style={{
                    marginRight: "20px",
                    backgroundColor: "rgba(3, 3, 64, 0.879)",
                    height: "5vh",
                    width: "9vw",
                  }}
                  onClick={handleChange}
                  variant="contained"
                >
                  Book <TrainIcon />
                </Button>
              </>
            )
          ) : (
            <></>
          )}
        </div>
      </m.div>
    </>
  );
}

export default Ticket;
