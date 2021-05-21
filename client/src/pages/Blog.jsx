import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import BlogContent from "../components/BlogContent"

class Blog extends Component {
  /*constructor(props) {
    super(props);
    this.state = { apiResponse: "BOŞ" };
  }

  callAPI() {
    fetch("http://localhost:9000/Blog")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
    console.log(this.state);
  }
  componentWillMount() {
    this.callAPI();
    console.log("Blog Sayfası Başlatıldı");
  }*/
  render() {
    return (
      <div>
        <Navbar />
        {/*this.state.apiResponse*/}
        <Searchbar />
        <BlogContent />
        
        
      </div>
    );
  }
}

export default Blog;
