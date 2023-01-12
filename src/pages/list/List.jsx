import "./list.css";
import React from "react";

const List = ({search, handleChange}) => {
  return (
    <div>
      <div className="listProducts">
        <div className="listContainer">
          <div className="listContent">
            <div className="listTitle">
              <h2>Filtrele</h2>
            </div>
            <div className="listBody">
              <p>Konum</p>
              <input type="text" name="location" value={search.location} onChange={handleChange} />
            </div>
            <div className="listBody">
              <p>Tarih</p>
              <input type="date" name="date" value={search.date} onChange={handleChange} />
            </div>
            <div className="listBody">
              <p className="other">Diğer</p>
              <h5 className="maxPrice">
                En fazla <em className="fade"> (Bilet Ücreti)</em>
              </h5>
              <input type="number" name="maxPrice" value={search.maxPrice} onChange={handleChange} />
            </div>
            <div className="listBody">
              <h5 className="minPrice">
                En az <em className="fade"> (Bilet Ücreti)</em>
              </h5>
              <input type="number" name="minPrice" value={search.minPrice} onChange={handleChange} />
            </div>
            <div className="listSubmit">
              <input type="submit" value="Ara" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
