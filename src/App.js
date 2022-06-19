import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

// Pages
import Home from "./pages/home/Home";
import Concert from "./pages/concert/Concert";
import Theatre from "./pages/theatre/Theatre";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/concert" element={<Concert />} />
        <Route path="/theatre" element={<Theatre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
