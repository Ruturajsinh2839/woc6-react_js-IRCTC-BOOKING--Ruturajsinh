import Footer from "./Pages/Footer";
import Navbar from "./Pages/Navbar";
import SignIn from "./Pages/Sign_in";
import SignUp from "./Pages/Sign_up";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
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
