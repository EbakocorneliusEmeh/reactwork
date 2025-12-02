import React from "react";
import { Link } from "react-router-dom";
import '../component/nav.css'; 

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/popular">Popular</Link></li>
        <li><Link to="/now-playing">Now Playing</Link></li>
        <li><Link to="/search">Search</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
