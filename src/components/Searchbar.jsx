import React, { Component } from "react";
import "../css/searchbar.css";


class Searchbar extends Component {
  state = {};
  render() {
    return (
      
      <div className="container">
       <form action="" >
           <input type="text" placeholder="Tarif Arayınız" name="search"/>
           <button type="submit">Ara</button>
       </form>
       </div>
       
    );
  }
}

export default Searchbar;
