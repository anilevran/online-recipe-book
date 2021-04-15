import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../css/index.css";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import IndexContent from "./IndexContent";

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
ReactDOM.render(<Index />, document.getElementById("root"));

export default Index;
