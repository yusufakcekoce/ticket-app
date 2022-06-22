import {
  faAnglesDown,
  faCalendarCheck,
  faMusic,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import homeBG from "../../images/homeBgg.jpg";
import ReactSimplyCarouselExample from "../../components/slider/slider";
import "./home.css";

const Home = () => {
  return (
    <div className="bigContainer">
      <div className="homeContainer">
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
              <h3>Ilk Sen Ogren</h3>
            </div>
            <div className="card-body">
              <p>
                Merak ettigin tum konser ve tiyatrolardan haberdar olmak icin
                bildirimleri ac herkesten once ilk senin haberin olsun
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
              <h3>Uygun Bilet</h3>
            </div>
            <div className="card-body">
              <p>
                Butcene en uygun kampanyali biletler ETKINLIGINIBUL.COM' da.
                Sayısız konser ve tiyatrolara sadece birkac tik ile istedigin
                koltuktan biletini kolayca kap.
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
              <h3>Cekilis</h3>
            </div>
            <div className="card-body">
              <p>
                Her ay düzenli olarak yapılan SEKSENDORT konserine locadan
                hicbir ucret odemeden izlemek istemez misin ? Tek yapman gereken
                siteye uye olmak ve sansina guvenmek
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
        <h2>
          Suan Merakla Beklenen Etkinlikler{" "}
          <div className="downIcon">
          <FontAwesomeIcon icon={faAnglesDown} className="iconDown" />
          </div>
        </h2>
      </div>
      <ReactSimplyCarouselExample/>
    </div>
  );
};

export default Home;
