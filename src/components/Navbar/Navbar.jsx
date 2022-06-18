import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import {
  faMagnifyingGlass,
  faSolid,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to={"/"}>
          <span className="logo">Etkinliğini Bul</span>
         
          <input type="search" placeholder="Ara..." className="sButton" />

        </Link>
      </div>
      <div className="navItems">
        <ul>
          <li><Link to={"/"}>Konser</Link></li>
          <li><Link to={"/"}>Tiyatro</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
