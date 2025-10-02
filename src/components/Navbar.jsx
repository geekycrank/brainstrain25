import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/bslogo.png";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbarr">
      {/* Left side: Logo + Brand */}
      <div className="brand">
        <img src={logo} alt="logo" className="logo" />
        <h2 className="brainstrain">Brainstrain '25</h2>
      </div>

      {/* Right side: Navigation */}
      <div className="top-nav">
        <p className={location.pathname === "/" ? "active" : ""}><Link to="/">Home</Link></p>
        <p className={location.pathname === "/Events" ? "active" : ""}><Link to="/Events">Events</Link></p>
        <p className={location.pathname === "/Register" ? "active" : ""}><Link to="/Register">Register</Link></p>
        <p className={location.pathname === "/CampusAmbassador" ? "active" : ""}><Link to="/CampusAmbassador">Campus Ambassador</Link></p>
        <p className={location.pathname === "/Contact" ? "active" : ""}><Link to="/Contact">Contact</Link></p>
      </div>
    </nav>
  );
}

export default Navbar;
