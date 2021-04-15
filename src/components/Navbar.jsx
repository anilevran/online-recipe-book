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
            <li>
              <Link to="/Home" className="active">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/Blog">BLOG</Link>
            </li>
            <li>
              <a>RECIPES</a>
            </li>
            <li>
              <a>CONTACT</a>
            </li>
          </ul>
          <ul className="logging">
            <li>
              <a>
                LOG-IN
                <a>
                  <i>
                    <FontAwesomeIcon icon={faIdCard} />
                  </i>
                </a>
              </a>
            </li>
            <li>
              <a>
                SIGN-UP
                <a>
                  <i>
                    <FontAwesomeIcon icon={faUserPlus} />
                  </i>
                </a>
              </a>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/Home" component={Index}></Route>
          <Route path="/Blog" component={Blog}></Route>
        </Switch>
      </Router>
    );
  }
}

export default Navbar;
