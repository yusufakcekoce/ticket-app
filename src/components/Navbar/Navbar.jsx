import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to={"/"}>
          <span className="logo">
            Etkinligini<b>Bul</b>
          </span>
        </Link>
      </div>
      <div className="search-box">
        <input type="text" placeholder="Ara..." />
      </div>
      <div className="navItems">
        <ul>
          <li>
            <Link to={"/Concert"}>Konser</Link>
          </li>
          <li>
            <Link to={"/Theatre"}>Tiyatro</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
