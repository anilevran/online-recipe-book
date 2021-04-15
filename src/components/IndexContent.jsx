import React, { Component } from "react";
import "../css/indexContent.css";
class IndexContent extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="cards-container">
          <div className="card-container">
            <div className="card">
              <div className="card-header">Fotoğraf</div>
              <div className="card-content">Content</div>
            </div>
            <hr></hr>
            <div className="card">
              <div className="card-header">Fotoğraf</div>
              <div className="card-content">Content</div>
            </div>
            <hr></hr>
            <div className="card">
              <div className="card-header">Fotoğraf</div>
              <div className="card-content">Content</div>
            </div>
          </div>
          <div className="card-container">
            <div className="card">
              <div className="card-header">Fotoğraf</div>
              <div className="card-content">Content</div>
            </div>
            <hr></hr>
            <div className="card">
              <div className="card-header">Fotoğraf</div>
              <div className="card-content">Content</div>
            </div>
            <hr></hr>
            <div className="card">
              <div className="card-header">Fotoğraf</div>
              <div className="card-content">Content</div>
            </div>
          </div>
          <div className="card-container">
            <div className="card">
              <div className="card-header">Fotoğraf</div>
              <div className="card-content">Content</div>
            </div>
            <hr></hr>
            <div className="card">
              <div className="card-header">Fotoğraf</div>
              <div className="card-content">Content</div>
            </div>
            <hr></hr>
            <div className="card">
              <div className="card-header">Fotoğraf</div>
              <div className="card-content">Content</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexContent;
