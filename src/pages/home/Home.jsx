import {
  faAnglesDown,
  faCalendarCheck,
  faMusic,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import homeBG from "../../images/homeBgg.jpg";
import "./home.css";

const Home = () => {
  return (
    <div className="bigContainer">
      <div className="homeContainer">
        <Navbar />
        <img src={homeBG} alt="" />
        <div className="imgText">
          <h1>EGLENCENIN DIBINE VURMAYA HAZIR MISIN ?</h1>
          <p>
            Ister bulundugun sehirde istersen de Turkiye’nin dort bir yanindaki
            konser ve tiyatrolara tek tikla ulasabilirsin
          </p>
        </div>
      </div>

      <div class="section-title-border"></div>

      <div className="products">
        <div className="card-container">
          <div className="card-content">
            <div className="card-title">
              <h3>Lorem Ipsum</h3>
            </div>
            <div className="card-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus maxime perspiciatis nihil fugiat tempora beatae ipsa
                sunt non consequuntur magnam ab, quibusdam illum, autem
                incidunt!
              </p>
            </div>
          </div>
          <div className="image-container">
            <FontAwesomeIcon icon={faCalendarCheck} className="iconStyle" />
          </div>
        </div>

        <div className="card-container">
          <div className="card-content">
            <div className="card-title">
              <h3>Lorem Ipsum</h3>
            </div>
            <div className="card-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus maxime perspiciatis nihil fugiat tempora beatae ipsa
                sunt non consequuntur magnam ab, quibusdam illum, autem
                incidunt!
              </p>
            </div>
          </div>
          <div className="image-container">
            <FontAwesomeIcon icon={faTicket} className="iconStyle" />
          </div>
        </div>

        <div className="card-container">
          <div className="card-content">
            <div className="card-title">
              <h3>Lorem Ipsum</h3>
            </div>
            <div className="card-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus maxime perspiciatis nihil fugiat tempora beatae ipsa
                sunt non consequuntur magnam ab, quibusdam illum, autem
                incidunt!
              </p>
            </div>
          </div>
          <div className="image-container">
            <FontAwesomeIcon icon={faMusic} className="iconStyle" />
          </div>
        </div>
      </div>
      
      <div class="section-title-border"></div>

      <div className="expected">
        <h2>Suan Merakla Beklenen Etkinlikler  <FontAwesomeIcon icon={faAnglesDown} className="iconDown"/></h2>
      </div>
    </div>
  );
};


export default Home;
