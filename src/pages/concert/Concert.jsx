import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../pages/global.css";
import List from "../list/List";

const Concert = ({ concertid, setConcertid }) => {
  const [concerts, setConcerts] = useState([]);
  const [search, setSearch] = useState({
    location: "",
    date: "",
    maxPrice: "",
    minPrice: "",
  });

  const getConcerts = async () => {
    const response = await fetch("http://localhost:3002/concerts");
    const data = await response.json();
    setConcerts(data);
  };

  useEffect(() => {
    getConcerts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearch({ ...search, [name]: value });
  };

  const filteredConcerts = concerts.filter((concert) => {
    if (
      search.location &&
      concert.stats[0].location &&
      concert.stats[0].location
        .toLowerCase()
        .indexOf(search.location.toLowerCase()) === -1
    ) {
      return false;
    }
    if (
      search.date &&
      concert.stats[0].date &&
      concert.stats[0].date !== search.date
    ) {
      return false;
    }
    if (
      search.maxPrice &&
      concert.stats[0].ticketPrice &&
      concert.stats[0].ticketPrice > search.maxPrice
    ) {
      return false;
    }
    if (
      search.minPrice &&
      concert.stats[0].ticketPrice &&
      concert.stats[0].ticketPrice < search.minPrice
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className="wrapContainer">
      <List search={search} handleChange={handleChange} />

      <div className="searchAll">
        {filteredConcerts.map((concert) => (
          <div className="searchItem">
            <img src={concert?.stats[0]?.imgAddress} alt="" className="sImg" />
            <div className="sDesc">
              <h1 className="sTitle">{concert.name}</h1>
              <span className="sDistance">{concert?.stats[0]?.location}</span>
              <span className="sPrice">{concert?.stats[0]?.ticketPrice}₺</span>
              <span className="sTheme">{concert?.stats[0]?.activity}</span>{" "}
              <span className="sDate">{concert?.stats[0]?.date}</span>
              <Link to={`${concert.id}`} key={concert.id}>
                <button
                  onClick={() => setConcertid(concert.id)}
                  className="sDetails"
                >
                  Detay
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Concert;
