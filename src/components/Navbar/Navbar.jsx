import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to={"/"}>
          <span className="logo">Etkinliğini Bul</span>
        </Link>
      </div>
      <div className="navItems">
      <div className="item">
        <Link to={"/"}>Tiyatro</Link>
      </div>
      <div className="item">
      <Link to={"/"}>Konser</Link>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
