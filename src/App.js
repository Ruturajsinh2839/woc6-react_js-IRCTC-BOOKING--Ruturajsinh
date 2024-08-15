import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import SignIn from "./Pages/Sign_in";
import SignUp from "./Pages/Sign_up";
import Home from "./Pages/Home";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Ticket from "./Components/Ticket";
import Book_list from "./Pages/Book_list";
import Payment from "./Pages/Payment";
import Profile from "./Pages/Profile";
import AboutUs from "./Pages/About_us";
import { auth } from "./Config/Irctc_booking";
import { useEffect, useState } from "react";
import React from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!auth.currentUser);

  console.log(isLoggedIn);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe(); // Cleanup the listener on component unmount
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {!isLoggedIn ? (
            <>
             {/* <Route path="/" element={<Navigate to="/signin" />} /> */}
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/ticket" element={<Ticket />} />
              <Route path="/Booklist" element={<Book_list />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/aboutus" element={<AboutUs />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
