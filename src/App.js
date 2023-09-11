import { Router, Routes, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import ScrollTransparentNavbar from "./Components/Navbar";
import Home from "./Pages/Home";
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
