import React, { Component } from "react";
import profilePhoto from "../img/gentlemen.jpg";
import "../css/blogContent.css";

class BlogContent extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "Empty" };
  }
  putData() {
    var response = this.state.apiResponse;
    var items = [];
    for (var i = 0; i < response.length; i++) {
      items.push(
        <div className="blog-card">
          <div className="blog-card-header"></div>
          <div className="blog-card-content">
            {response[i]["recipe_description"]}
          </div>
        </div>
      );
      items.push(<hr></hr>);
    }
    return items;
  }

  async callAPI() {
    var url = "http://localhost:9000/Blog";
    var response = await fetch(url);
    var data = await response.json();
    this.setState({ apiResponse: data });
  }

  componentWillMount() {
    this.callAPI();
  }
  render() {
    return (
      <div className="blog-content-container">
        <div className="blog-card-container">{this.putData()}</div>
      </div>
    );
  }
}

export default BlogContent;
