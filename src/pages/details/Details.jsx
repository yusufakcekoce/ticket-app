import React from "react";
import detailBG from "../../images/detailconcert.jpg";
import michael from "../../images/michaeljpg.jpg";
import "./details.css";
const Details = () => {
  return (
    <div className="detailContainer">
      <div className="dImg">
        <img src={detailBG} alt="" />
      </div>

      <div className="dDetails">
        <div className="banner">
          <img src={michael} alt="" />
          <div className="rules">
            <h3>Kurallar</h3>
            <ul>
              <li>7 Yas ve üzeri bilete tabidir.</li>
              <li>Biletlerde iptal iade ve değisilik yapılmaz.</li>
              <li>
                Kampanyalar sınırlı sayıda belirli kategorilere uygulanır.
              </li>
              <li>
                Organizatör firma katılım seklini uygun bulmadığı kisi veya
                kisileri bilet ücretini iade etmek kosulu ile salona almama
                hakkına sahiptir.
              </li>
            </ul>
          </div>
        </div>
        <div className="dDesc">
          <h1>Michael Jackson</h1>
          <p>Sehir: Izmir</p>
          <p>Tarih: 22.06.2022 19.07</p>
          <div className="dTicketBuy">
            <input type="submit" value="Bilet Al" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
