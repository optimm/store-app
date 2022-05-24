import React, { useEffect, useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <>
      <div className="navbar-container">
        <h1 className="nav-logo">Fyntune</h1>
        <div className="nav-links">
          <Link
            to="/catalogue"
            style={{ color: "white", padding: 0 }}
            className="nav-navigator"
          >
            <p className="nav-item">Stores</p>
          </Link>

          <Link
            to="/catalogue"
            style={{ color: "white", padding: 0 }}
            className="nav-navigator"
          >
            <p className="nav-item about">About</p>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Navbar;