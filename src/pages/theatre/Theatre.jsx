import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../pages/global.css";
import List from "../list/List";

const Theatre = ({ theatreid, setTheatreid }) => {
  const [theatres, setTheatres] = useState([]);
  const [search, setSearch] = useState({
    location: "",
    date: "",
    maxPrice: "",
    minPrice: "",
  });

  const getTheatres = async () => {
    const response = await fetch("http://localhost:3002/theatres");
    const data = await response.json();
    setTheatres(data);
  };

  useEffect(() => {
    getTheatres();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearch({ ...search, [name]: value });
  };

  const filteredTheatres = theatres.filter((theatre) => {
    if (
      search.location &&
      theatre.stats[0].location &&
      theatre.stats[0].location
        .toLowerCase()
        .indexOf(search.location.toLowerCase()) === -1
    ) {
      return false;
    }
    if (
      search.date &&
      theatre.stats[0].date &&
      theatre.stats[0].date !== search.date
    ) {
      return false;
    }
    if (
      search.maxPrice &&
      theatre.stats[0].ticketPrice &&
      theatre.stats[0].ticketPrice > search.maxPrice
    ) {
      return false;
    }
    if (
      search.minPrice &&
      theatre.stats[0].ticketPrice &&
      theatre.stats[0].ticketPrice < search.minPrice
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className="wrapContainer">
      <List search={search} handleChange={handleChange} />

      <div className="searchAll">
        {filteredTheatres.map((theatre) => (
          <div className="searchItem">
            <img src={theatre?.stats[0]?.imgAddress} alt="" className="sImg" />
            <div className="sDesc">
              <h1 className="sTitle">{theatre.name}</h1>
              <span className="sDistance">{theatre?.stats[0]?.location}</span>
              <span className="sPrice">{theatre?.stats[0]?.ticketPrice}₺</span>
              <span className="sTheme">{theatre?.stats[0]?.activity}</span>{" "}
              <span className="sDate">{theatre?.stats[0]?.date}</span>
              <Link to={`${theatre.id}`} key={theatre.id}>
                <button
                  onClick={() => setTheatreid(theatre.id)}
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

export default Theatre;
