import { Router, Routes, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import ScrollTransparentNavbar from "./Components/Navbar";
import Home from "./Pages/Home";
import ProgrammingPage from "./Pages/Code";
function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <div className="__box_green_highlight rounded-3xl"></div>
        <ScrollTransparentNavbar />
        <div className="noise"></div>
        <div className="__height"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enquiry/ninja" element={<ProgrammingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
