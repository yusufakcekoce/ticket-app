import React, { useEffect, useState } from "react";
import detailBG from "../../images/detailconcert.jpg";
import "./details.css";
import Ticket from "../../components/BuyTicket/Ticket";

const ConcertDetail = ({ concertid, setConcertid }) => {
  const [concert, setConcert] = useState([]);
  const [showMyTicket, setShowMyTicket] = useState(false);

  const handleOnClose = () => {
    setShowMyTicket(false);
  };

  let api = `http://localhost:3002/concerts/${concertid}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setConcert(data);
    })();
  }, [concertid, api]);
  return (
    <div className="detailContainer">
      <div className="dImg">
        <img src={detailBG} alt="" />
      </div>
      {concert.stats?.map((stat) => (
        <div className="dDetails">
          <div className="banner">
            <img src={stat.imgAddress} alt="" />
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
            <h1>{concert.name}</h1>
            <p>Sehir: {stat.location}</p>
            <p>Bilet Ucreti: {stat.ticketPrice}₺</p>
            <p>Tarih: {stat.date} 19.07</p>
            <p className="info">Info: {stat.info}</p>
            <div className="dTicketBuy">
              <button onClick={() => setShowMyTicket(true)} type="submit">
                Bilet Al
              </button>
            </div>
            {/* <ConcertCarousel/> */}
          </div>
        </div>
      ))}
      <Ticket onClose={handleOnClose} visible={showMyTicket} />
    </div>
  );
};

export default ConcertDetail;
