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
        <p className={location.pathname === "/events" ? "active" : ""}><Link to="/events">Events</Link></p>
        <p className={location.pathname === "/register" ? "active" : ""}><Link to="/register">Register</Link></p>
        <p className={location.pathname === "/campus-ambassador" ? "active" : ""}><Link to="/campus-ambassador">Campus Ambassador</Link></p>
        <p className={location.pathname === "/contact" ? "active" : ""}><Link to="/contact">Contact</Link></p>
      </div>
    </nav>
  );
}

export default Navbar;