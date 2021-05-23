import React, { Component } from "react";
import food1 from "../img/YEMEK.jpg";
import food2 from "../img/YEMEK2.jpg";
import food3 from "../img/YEMEK3.jpg";
import food4 from "../img/YEMEK4.jpg";
import food5 from "../img/YEMEK5.jpg";
import food6 from "../img/YEMEK6.jpg";
import "../css/recipesContent.css";

class RecipesContent extends Component {
  state = {};
  render() {
    return (
      <div className="recipes-content-container">
        <div className="recipes-card-container">
          <div className="recipes-card">
            <div className="recipes-card-header">
              <img src={food1} alt="pp"></img>
            </div>
            <hr></hr>
            <div className="recipes-card-content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
              animi quod incidunt asperiores iste, porro deleniti harum.
              Consectetur, facere similique?
            </div>
          </div>
        </div>
        <div className="recipes-card-container">
          <div className="recipes-card">
            <div className="recipes-card-header">
              <img src={food2} alt="pp"></img>
            </div>
            <hr></hr>
            <div className="recipes-card-content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
              animi quod incidunt asperiores iste, porro deleniti harum.
              Consectetur, facere similique?
            </div>
          </div>
        </div>
        <div className="recipes-card-container">
          <div className="recipes-card">
            <div className="recipes-card-header">
              <img src={food3} alt="pp"></img>
            </div>
            <hr></hr>
            <div className="recipes-card-content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
              animi quod incidunt asperiores iste, porro deleniti harum.
              Consectetur, facere similique?
            </div>
          </div>
        </div>
        <div className="recipes-card-container">
          <div className="recipes-card">
            <div className="recipes-card-header">
              <img src={food4} alt="pp"></img>
            </div>
            <hr></hr>
            <div className="recipes-card-content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
              animi quod incidunt asperiores iste, porro deleniti harum.
              Consectetur, facere similique?
            </div>
          </div>
        </div>
        <div className="recipes-card-container">
          <div className="recipes-card">
            <div className="recipes-card-header">
              <img src={food5} alt="pp"></img>
            </div>
            <hr></hr>
            <div className="recipes-card-content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
              animi quod incidunt asperiores iste, porro deleniti harum.
              Consectetur, facere similique?
            </div>
          </div>
        </div>
        <div className="recipes-card-container">
          <div className="recipes-card">
            <div className="recipes-card-header">
              <img src={food6} alt="pp"></img>
            </div>
            <hr></hr>
            <div className="recipes-card-content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
              animi quod incidunt asperiores iste, porro deleniti harum.
              Consectetur, facere similique?
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RecipesContent;
