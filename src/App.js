import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

// Pages
import Home from "./pages/home/Home";
import Concert from "./pages/concert/Concert";
import Theatre from "./pages/theatre/Theatre";
import TheatreDetails from "./pages/details/TheatreDetail";
import ConcertDetails from "./pages/details/ConcertDetail";
import { useState } from "react";

function App() {
  const [concertid, setConcertid] = useState([]);
  const [theatreid, setTheatreid] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/concert" element={<Concert concertid={concertid} setConcertid={setConcertid} />} />
          <Route path="/theatre" element={<Theatre theatreid={theatreid} setTheatreid={setTheatreid}  />} />
          <Route path="/theatre/:name" element={<TheatreDetails theatreid={theatreid} setTheatreid={setTheatreid} />} />
          <Route path="/concert/:name" element={<ConcertDetails concertid={concertid} setConcertid={setConcertid} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
