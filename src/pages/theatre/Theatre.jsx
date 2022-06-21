import { useState, useEffect } from 'react';
import "../../pages/global.css";
import theatreBG from "../../images/theatre.jpg";
import List from "../list/List";

const Theatre = () => {
  const [theatres, setTheatres] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTheatres = async () => {
    setLoading(true)
    const response = await fetch("http://localhost:3002/theatres"
    );
    const data = await response.json();
    setTheatres(data)
    setLoading(false)
  }

  useEffect(() => {
    getTheatres()
  }, [])

  return (
    <div className="wrapContainer">
      <List />

      <div className="searchAll">
        {
          theatres.map(theatre => (
            <div className="searchItem">
          <img src={theatre.imgAddress} alt="" className="sImg" />
          <div className="sDesc">
            <h1 className="sTitle">{theatre.name}</h1>
            <span className="sDistance">{theatre.location}</span>
            <span className="sPrice">{theatre.ticketprice}₺</span>
            <span className="sTheme">{theatre.activity}</span>
            <span className="sDate">{theatre.date}</span>
            <button className="sDetails">Detay</button>
          </div> 
        </div>
          ))
        }
      </div>

    </div>
  );
};

export default Theatre;
