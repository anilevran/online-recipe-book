import React, { Component } from "react";
import "../css/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav class="nav-container">
        <ul class="navigation">
          <li>
            <a class="active" href="">
              HOME
            </a>
          </li>
          <li>
            <a>BLOG</a>
          </li>
          <li>
            <a>RECIPES</a>
          </li>
          <li>
            <a>CONTACT</a>
          </li>
        </ul>
        <ul class="logging">
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
    );
  }
}

export default Navbar;
