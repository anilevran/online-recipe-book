import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import IndexContent from "../components/IndexContent";
class Home extends Component {
  /*constructor(props) {
    super(props);
    this.state = { apiResponse: "BOŞ" };
  }

  callAPI() {
    fetch("http://localhost:9000/")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
    console.log(this.state);
  }
  componentWillMount() {
    this.callAPI();
    console.log("Home Sayfası Başaltılı");
  }*/
  render() {
    return (
      <div>
        <Navbar />
        {/*this.state.apiResponse*/}
        <Searchbar />
        <IndexContent />
      </div>
    );
  }
}

export default Home;
