import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

// Pages
import Home from "./pages/home/Home";
import Concert from "./pages/concert/Concert";
import Theatre from "./pages/theatre/Theatre";
import Details from "./pages/details/Details";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/concert" element={<Concert />} />
          <Route path="/theatre" element={<Theatre />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
