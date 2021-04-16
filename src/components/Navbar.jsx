import React, { Component } from "react";
import "../css/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Blog from "./Blog";
import Index from "./Index";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <Router>
        <nav className="nav-container">
          <ul className="navigation">
            <li className="active">
              <a>
                <Link to="/Home">HOME</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/Blog">BLOG</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/Recipes">RECIPES</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/CONTACT">CONTACT</Link>
              </a>
            </li>
          </ul>
          <ul className="logging">
            <li>
              <a>
                <Link to="/Signin">Sign-in</Link>
              </a>

              <i>
                <FontAwesomeIcon icon={faIdCard} />
              </i>
            </li>
            <li>
              <a>
                <Link to="/Signup">Sign-up</Link>
              </a>
              <i>
                <FontAwesomeIcon icon={faUserPlus} />
              </i>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/Home" component={Index} />
          <Route path="/Blog" component={Blog} />
        </Switch>
      </Router>
    );
  }
}

export default Navbar;
