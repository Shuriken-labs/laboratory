import { Router, Routes, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import ScrollTransparentNavbar from "./Components/Navbar";
import Home from "./Pages/Home";
import ProgrammingPage from "./Pages/Code";
import About from "./Pages/About";
import TradingPage from "./Pages/Trade";
import Enroll from "./Pages/Enroll/Enroll";
import ScrollToTop from "./utils/ScrollToTop";


function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <div className="__box_green_highlight rounded-3xl"></div>
        <ScrollTransparentNavbar />
        <div className="noise"></div>
        <div className="__height"></div>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enquiry/ninja" element={<ProgrammingPage />} />
          <Route path="/enquiry/trader" element={<TradingPage />} />
          <Route path="/enrollment/successful" element={<Enroll />} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
