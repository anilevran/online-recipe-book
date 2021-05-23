import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import BlogContent from "../components/BlogContent";

class Blog extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Searchbar />
        <BlogContent />
      </div>
    );
  }
}

export default Blog;
