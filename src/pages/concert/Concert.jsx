import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../pages/global.css";
import List from "../list/List";

const Concert = ({concertid, setConcertid}) => {
  const [concerts, setConcerts] = useState([]);

  const getConcerts = async () => {
    const response = await fetch("http://localhost:3002/concerts");
    const data = await response.json();
    setConcerts(data);
  };

  useEffect(() => {
    getConcerts();
  }, []);

  return (
    <div className="wrapContainer">
      <List />

      <div className="searchAll">
        {concerts.map((concert) => (
          <div className="searchItem">
            <img src={concert?.stats[0]?.imgAddress} alt="" className="sImg" />
            <div className="sDesc">
              <h1 className="sTitle">{concert.name}</h1>
              <span className="sDistance">{concert?.stats[0]?.location}</span>
              <span className="sPrice">{concert?.stats[0]?.ticketPrice}₺</span>
              <span className="sTheme">{concert?.stats[0]?.activity}</span>
              
              <span className="sDate">{concert?.stats[0]?.date}</span>
              <Link to={`${concert.id}`} key={concert.id}>
                
                <button onClick={()=>setConcertid(concert.id)} className="sDetails">Detay</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Concert;
