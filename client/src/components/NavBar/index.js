import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function NavTabs() {
  const location = useLocation();

  return (
    <ul className="nav">
      <li className="nav-item">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Search
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/saved"
          className={
            location.pathname === "/saved" ? "nav-link active" : "nav-link"
          }
        >
          Saved Books
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
