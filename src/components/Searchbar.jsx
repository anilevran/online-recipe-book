import React, { Component } from "react";
import "../css/searchbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

class Searchbar extends Component {
  state = {};
  render() {
    return (
      <div className="search-container">
        <form action="">
          <input type="text" placeholder="Tarif Arayınız" name="search" />
          <button type="submit">
            <i>
              <FontAwesomeIcon icon={faUtensils} />
            </i>
          </button>
        </form>
      </div>
    );
  }
}

export default Searchbar;
