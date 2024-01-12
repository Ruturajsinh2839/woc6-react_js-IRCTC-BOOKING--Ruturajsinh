import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import List_Ticket from "../Components/List_Ticket";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { db } from "../Config/Irctc_booking";
import { getDocs, collection } from "firebase/firestore";

function Book_list() {
  // const location = useLocation();
  const [book, setBook] = useState([]);
  const [loading,setloading]=useState(true);
  const TicketRef = collection(db, "Ticket_book");
  useEffect(() => {
    const getTicket = async () => {
      try {
        const data = await getDocs(TicketRef);
        const filterdata = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log("Filtered Data",filterdata);
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

      <div  style={{height:"100%",padding:"20%"}}className="Book_list">
        <h1>BOOK LIST</h1>
     { loading?(book.map((e,index) => (
          <List_Ticket
            index={index+1}
            train_name={e.train_name}
            train_number={e.train_number}
            train_date={e.train_date}
            class_type={e.class_type}
            to_station_name={e.to_station_name}
            from_station_name={e.from_station_name}
            allclasses={e.allclasses}
            paid={e.paid}
            category={e.category }
            price={e.price}
          />
        ))):(<h1>Empty</h1>) } 
      </div>

      <Footer />
    </>
  );
}

export default Book_list;
