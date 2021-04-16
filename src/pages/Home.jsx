import React, { Component } from "react";
import "../css/index.css";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import IndexContent from "../components/IndexContent";
class Index extends Component {
  state = {};
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

export default Index;
