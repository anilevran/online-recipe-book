import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import RecipesContent from "../components/RecipesContent"

class Recipes extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <Searchbar />
        <RecipesContent />
        
      </div>
    );
  }
}

export default Recipes;
