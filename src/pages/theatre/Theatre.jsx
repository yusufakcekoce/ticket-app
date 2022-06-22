import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../pages/global.css";
import List from "../list/List";

const Concert = ({theatreid, setTheatreid}) => {
  const [theatres, setTheatres] = useState([]);

  const getTheatres = async () => {
    const response = await fetch("http://localhost:3002/theatres");
    const data = await response.json();
    setTheatres(data);
  };

  useEffect(() => {
    getTheatres();
  }, []);

  return (
    <div className="wrapContainer">
      <List />

      <div className="searchAll">
        {theatres.map((theatre) => (
          <div className="searchItem">
            <img src={theatre?.stats[0]?.imgAddress} alt="" className="sImg" />
            <div className="sDesc">
              <h1 className="sTitle">{theatre.name}</h1>
              <span className="sDistance">{theatre?.stats[0]?.location}</span>
              <span className="sPrice">{theatre?.stats[0]?.ticketPrice}₺</span>
              <span className="sTheme">{theatre?.stats[0]?.activity}</span>
              
              <span className="sDate">{theatre?.stats[0]?.date}</span>
              <Link to={`${theatre.id}`} key={theatre.id}>
                
                <button onClick={()=>setTheatreid(theatre.id)} className="sDetails">Detay</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Concert;
