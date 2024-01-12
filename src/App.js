import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import SignIn from "./Pages/Sign_in";
import SignUp from "./Pages/Sign_up";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Ticket from "./Components/Ticket";
import Book_list from "./Pages/Book_list";
import Payment from "./Pages/Payment";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/Booklist" element={<Book_list />} />
        <Route path="/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
      {/* <Navbar />

      <Footer /> */}
      {/* <SignIn /> */}
    </div>
  );
}

export default App;
