import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../css/index.css";
import Navbar from "./Navbar";

class Index extends Component {
  state = {};
  render() {
    return <div className="container m-0 p-0 bg">Deneme</div>;
  }
}
ReactDOM.render(<Navbar />, document.getElementById("root"));

export default Index;
