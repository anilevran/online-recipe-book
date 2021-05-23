import React, { Component } from "react";
import profilePhoto from "../img/gentlemen.jpg";
import "../css/indexContent.css";
class IndexContent extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "Empty" };
  }
  putData() {
    var response = this.state.apiResponse;
    var items = [];
    for (var i = 0; i < response.length; i++) {
      items.push(
        <div className="card">
          <div className="card-header"></div>
          <div className="card-content">
            {response[i]["recipe_description"]}
          </div>
        </div>
      );
      items.push(<hr></hr>);
      if (i == 2) {
        break;
      }
    }
    return items;
  }

  async callAPI() {
    var url = "http://localhost:9000/";
    var response = await fetch(url);
    var data = await response.json();
    this.setState({ apiResponse: data });
  }

  componentWillMount() {
    this.callAPI();
  }
  render() {
    return (
      <div className="content-container">
        <div className="card-container">{this.putData()}</div>
      </div>
    );
  }
}

export default IndexContent;

/*
<div className="card">
            <div className="card-header">
              <img src={profilePhoto} alt="pp"></img>
            </div>
            <div className="card-content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              eveniet expedita cupiditate accusantium architecto molestias odit
              nihil, velit provident excepturi!
            </div>
          </div>
          <hr></hr>
          <div className="card">
            <div className="card-header">
              <img src={profilePhoto} alt="pp"></img>
            </div>
            <div className="card-content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              eveniet expedita cupiditate accusantium architecto molestias odit
              nihil, velit provident excepturi!
            </div>
          </div>
          <hr></hr>
          <div className="card">
            <div className="card-header">
              <img src={profilePhoto} alt="pp"></img>
            </div>
            <div className="card-content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              eveniet expedita cupiditate accusantium architecto molestias odit
              nihil, velit provident excepturi!
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="card-header">
              <img src={profilePhoto} alt="pp"></img>
            </div>
            <div className="card-content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              eveniet expedita cupiditate accusantium architecto molestias odit
              nihil, velit provident excepturi!
            </div>
          </div>
          <hr></hr>
          <div className="card">
            <div className="card-header">
              <img src={profilePhoto} alt="pp"></img>
            </div>
            <div className="card-content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              eveniet expedita cupiditate accusantium architecto molestias odit
              nihil, velit provident excepturi!
            </div>
          </div>
          <hr></hr>
          <div className="card">
            <div className="card-header">
              <img src={profilePhoto} alt="pp"></img>
            </div>
            <div className="card-content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              eveniet expedita cupiditate accusantium architecto molestias odit
              nihil, velit provident excepturi!
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="card-header">
              <img src={profilePhoto} alt="pp"></img>
            </div>
            <div className="card-content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              eveniet expedita cupiditate accusantium architecto molestias odit
              nihil, velit provident excepturi!
            </div>
          </div>
          <hr></hr>
          <div className="card">
            <div className="card-header">
              <img src={profilePhoto} alt="pp"></img>
            </div>
            <div className="card-content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              eveniet expedita cupiditate accusantium architecto molestias odit
              nihil, velit provident excepturi!
            </div>
          </div>
          <hr></hr>
          <div className="card">
            <div className="card-header">
              <img src={profilePhoto} alt="pp"></img>
            </div>
            <div className="card-content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              eveniet expedita cupiditate accusantium architecto molestias odit
              nihil, velit provident excepturi!
            </div>
          </div>
*/
