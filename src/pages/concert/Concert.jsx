import { useState, useEffect } from 'react';
import "../../pages/global.css";
import concertBG from "../../images/concert.jpg";
import List from "../list/List";

const Concert = () => {
  const [concerts, setConcerts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getConcerts = async () => {
    setLoading(true)
    const response = await fetch("http://localhost:3002/concerts"
    );
    const data = await response.json();
    setConcerts(data)
    setLoading(false)
  }

  useEffect(() => {
    getConcerts()
  }, [])

  return (
    <div className="wrapContainer">
      <List />

      <div className="searchAll">
        {
          concerts.map(concert => (
            <div className="searchItem">
          <img src={concert.imgAddress} alt="" className="sImg" />
          <div className="sDesc">
            <h1 className="sTitle">{concert.name}</h1>
            <span className="sDistance">{concert.location}</span>
            <span className="sPrice">{concert.ticketprice}₺</span>
            <span className="sTheme">{concert.activity}</span>
            <span className="sDate">{concert.date}</span>
            <button className="sDetails">Detay</button>
          </div> 
        </div>
          ))
        }
      </div>

    </div>
  );
};

export default Concert;