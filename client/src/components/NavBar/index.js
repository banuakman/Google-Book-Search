import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function NavTabs() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <ul className="navbar-nav">
        <li class="nav-item">
          <Link
            to="/"
            className={
              location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            Home
          </Link>
        </li>
        <li class="nav-item">
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
    </nav>
  );
}

export default NavTabs;
