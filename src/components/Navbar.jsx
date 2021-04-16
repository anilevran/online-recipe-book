import React, { Component } from "react";
import "../css/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderNone, faIdCard } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="nav-container">
        <ul className="navigation">
          <li className="active">
            <Link to="/" className="links">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/Blog" className="links">
              BLOG
            </Link>
          </li>
          <li>
            <Link to="/Recipes" className="links">
              RECIPES
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="links">
              CONTACT
            </Link>
          </li>
        </ul>
        <ul className="logging">
          <li>
            <Link to="/" className="links">
              <FontAwesomeIcon icon={faIdCard} size="2x" />
            </Link>
          </li>
          <li>
            <Link to="/" className="links">
              <FontAwesomeIcon icon={faUserPlus} size="2x" />
            </Link>
            <i></i>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
