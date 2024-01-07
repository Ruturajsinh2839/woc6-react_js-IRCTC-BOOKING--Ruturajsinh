import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import SignIn from "./Pages/Sign_in";
import SignUp from "./Pages/Sign_up";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      {/* <Navbar />

      <Footer /> */}
      {/* <SignIn /> */}
    </div>
  );
}

export default App;
