import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import homeBG from "../../images/homebg.jpg";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="homeContainer">
        {/* <h3>EĞLENCENİN DİBİNE VURMAYA HAZIR MISIN</h3> */}
        <img src={homeBG} alt="" />
      </div>
    </div>
  );
};

export default Home;
