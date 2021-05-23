import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import IndexContent from "../components/IndexContent";
class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Searchbar />
        <IndexContent />
      </div>
    );
  }
}

export default Home;
